import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  AuthError
} from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../core/firebase';
import { AUTH_WHITELIST, ADMIN_EMAIL } from '../config/authWhitelist';

import type { UserRole } from '../types/global';

// --- CONFIGURACIÓN EXPERIMENTAL ---
// Si es true, el sistema funciona 100% en el navegador (localStorage)
// y no contacta con Firebase ni verifica la whitelist.
const IS_OFFLINE_MODE = true; 

interface User {
  email: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
  error: string | null;

  checkWhitelist: (email: string) => boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  initialize: () => Promise<void>;
  logActivity: (email: string, type: string) => Promise<void>;
}

/** Type guard to check if error is a Firebase AuthError */
function isFirebaseAuthError(error: unknown): error is AuthError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as AuthError).code === 'string'
  );
}

/** Extract error message from unknown error */
function getErrorMessage(error: unknown): string {
  if (isFirebaseAuthError(error)) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Error desconocido';
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isInitialized: false,
      error: null,

      checkWhitelist: (email: string) => {
        if (IS_OFFLINE_MODE) return true; // Bypass whitelist in offline mode
        const cleanEmail = email.toLowerCase().trim();
        return AUTH_WHITELIST.map(e => e.toLowerCase().trim()).includes(cleanEmail);
      },

      clearError: () => set({ error: null }),

      initialize: () => {
        // Check for E2E bypass in localStorage
        const bypass = typeof window !== 'undefined' && window.localStorage.getItem('upnassist-auth-bypass') === 'true';
        
        if (bypass || IS_OFFLINE_MODE) {
          // In offline mode, we rely on the persisted state (zustand/persist)
          // We just need to mark as initialized.
          // If a user was logged in, they stay logged in.
          set((state) => ({ 
            isInitialized: true,
            // Ensure persisted user remains if valid
            isAuthenticated: !!state.user
          }));
          return Promise.resolve();
        }

        return new Promise<void>((resolve) => {
          const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser && firebaseUser.email) {
              const role: UserRole = firebaseUser.email.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';
              set({
                user: { email: firebaseUser.email, role },
                isAuthenticated: true,
                isInitialized: true
              });
            } else {
              set({ user: null, isAuthenticated: false, isInitialized: true });
            }
            resolve();
          }, (error: unknown) => {
            console.error('Auth state change error:', error);
            set({ user: null, isAuthenticated: false, isInitialized: true, error: getErrorMessage(error) });
            resolve();
          });

          return unsubscribe;
        });
      },

      logActivity: async (email: string, type: string) => {
        if (IS_OFFLINE_MODE) {
          console.log(`[Offline Activity] ${email} - ${type}`);
          return;
        }
        try {
          await addDoc(collection(db, 'activity_logs'), {
            email: email.toLowerCase().trim(),
            type,
            timestamp: serverTimestamp(),
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
          });
        } catch (error: unknown) {
          console.error("Error logging activity:", getErrorMessage(error));
        }
      },

      login: async (email: string, password: string) => {
        const normalizedEmail = email.toLowerCase().trim();
        
        if (IS_OFFLINE_MODE) {
          // Simulación de login local
          if (password.length < 4) {
             set({ error: "La contraseña es muy corta (min 4)." });
             return;
          }
          const role: UserRole = normalizedEmail === ADMIN_EMAIL ? 'admin' : 'student';
          set({
            user: { email: normalizedEmail, role },
            isAuthenticated: true,
            error: null
          });
          return;
        }

        if (!get().checkWhitelist(normalizedEmail)) {
          set({ error: "Este correo no está en la lista de autorizados." });
          return;
        }

        try {
          await signInWithEmailAndPassword(auth, normalizedEmail, password);
          await get().logActivity(normalizedEmail, 'login');
          set({ error: null });
        } catch (error: unknown) {
          if (isFirebaseAuthError(error)) {
            switch (error.code) {
              case 'auth/user-not-found':
                set({ error: "El usuario no existe. Si es tu primera vez, por favor regístrate." });
                break;
              case 'auth/wrong-password':
              case 'auth/invalid-credential':
                set({ error: "Contraseña incorrecta." });
                break;
              case 'auth/too-many-requests':
                set({ error: "Demasiados intentos. Intenta de nuevo más tarde." });
                break;
              case 'auth/invalid-email':
                set({ error: "Correo electrónico inválido." });
                break;
              default:
                set({ error: "Error al iniciar sesión: " + error.message });
            }
          } else {
            set({ error: "Error al iniciar sesión: " + getErrorMessage(error) });
          }
        }
      },

      register: async (email: string, password: string) => {
        const normalizedEmail = email.toLowerCase().trim();

        if (IS_OFFLINE_MODE) {
           // Simulación de registro local (idéntico al login)
           if (password.length < 4) {
             set({ error: "La contraseña es muy corta (min 4)." });
             return;
          }
          const role: UserRole = normalizedEmail === ADMIN_EMAIL ? 'admin' : 'student';
          set({
            user: { email: normalizedEmail, role },
            isAuthenticated: true,
            error: null
          });
          return;
        }

        if (!get().checkWhitelist(normalizedEmail)) {
          set({ error: "Este correo no está en la lista de autorizados." });
          return;
        }

        try {
          await createUserWithEmailAndPassword(auth, normalizedEmail, password);
          await get().logActivity(normalizedEmail, 'register');
          set({ error: null });
        } catch (error: unknown) {
          if (isFirebaseAuthError(error)) {
            switch (error.code) {
              case 'auth/email-already-in-use':
                set({ error: "El correo ya está registrado. Por favor, inicia sesión." });
                break;
              case 'auth/weak-password':
                set({ error: "La contraseña es demasiado débil. Usa al menos 6 caracteres." });
                break;
              case 'auth/invalid-email':
                set({ error: "Correo electrónico inválido." });
                break;
              default:
                set({ error: "Error al registrarse: " + error.message });
            }
          } else {
            set({ error: "Error al registrarse: " + getErrorMessage(error) });
          }
        }
      },

      logout: async () => {
        if (IS_OFFLINE_MODE) {
          set({ user: null, isAuthenticated: false, error: null });
          return;
        }
        try {
          await signOut(auth);
          set({ user: null, isAuthenticated: false, error: null });
        } catch (error: unknown) {
          console.error('Logout error:', error);
          set({ error: "Error al cerrar sesión: " + getErrorMessage(error) });
        }
      },
    }),
    {
      name: 'upnassist-auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
