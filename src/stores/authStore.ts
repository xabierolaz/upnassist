import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from 'firebase/auth';
import { auth } from '../core/firebase';
import { AUTH_WHITELIST, ADMIN_EMAIL } from '../config/authWhitelist';

interface User {
  email: string;
  role: 'admin' | 'student';
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
  initialize: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isInitialized: false,
      error: null,

      checkWhitelist: (email: string) => {
        return AUTH_WHITELIST.includes(email.toLowerCase().trim());
      },

      clearError: () => set({ error: null }),

      initialize: () => {
        onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
          if (firebaseUser && firebaseUser.email) {
            const role = firebaseUser.email.toLowerCase() === ADMIN_EMAIL ? 'admin' : 'student';
            set({ 
              user: { email: firebaseUser.email, role }, 
              isAuthenticated: true,
              isInitialized: true 
            });
          } else {
            set({ user: null, isAuthenticated: false, isInitialized: true });
          }
        });
      },

      login: async (email: string, password: string) => {
        const normalizedEmail = email.toLowerCase().trim();
        if (!get().checkWhitelist(normalizedEmail)) {
          set({ error: "Este correo no está en la lista de autorizados." });
          return;
        }

        try {
          await signInWithEmailAndPassword(auth, normalizedEmail, password);
          set({ error: null });
        } catch (err: any) {
          if (err.code === 'auth/user-not-found') {
            set({ error: "El usuario no existe. Si es tu primera vez, por favor regístrate." });
          } else if (err.code === 'auth/wrong-password') {
            set({ error: "Contraseña incorrecta." });
          } else {
            set({ error: "Error al iniciar sesión: " + err.message });
          }
        }
      },

      register: async (email: string, password: string) => {
        const normalizedEmail = email.toLowerCase().trim();
        if (!get().checkWhitelist(normalizedEmail)) {
          set({ error: "Este correo no está en la lista de autorizados." });
          return;
        }

        try {
          await createUserWithEmailAndPassword(auth, normalizedEmail, password);
          set({ error: null });
        } catch (err: any) {
          if (err.code === 'auth/email-already-in-use') {
            set({ error: "El correo ya está registrado. Por favor, inicia sesión." });
          } else {
            set({ error: "Error al registrarse: " + err.message });
          }
        }
      },

      logout: async () => {
        await signOut(auth);
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'upnassist-auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);