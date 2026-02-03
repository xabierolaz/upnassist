import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock Firebase modules before importing authStore
vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn((auth, callback) => {
    // Store callback for test manipulation
    (globalThis as any).__authCallback = callback;
    return vi.fn(); // unsubscribe function
  }),
}));

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn(() => Promise.resolve()),
  serverTimestamp: vi.fn(() => new Date()),
}));

vi.mock('../core/firebase', () => ({
  auth: {},
  db: {},
}));

vi.mock('../config/authWhitelist', () => ({
  AUTH_WHITELIST: ['test@example.com', 'admin@upna.es', 'student@example.com'],
  ADMIN_EMAIL: 'admin@upna.es',
}));

// Import after mocks are set up
import { useAuthStore } from './authStore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

describe('authStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isInitialized: false,
      error: null,
    });
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('checkWhitelist', () => {
    it('should return true for whitelisted emails', () => {
      const { checkWhitelist } = useAuthStore.getState();
      expect(checkWhitelist('test@example.com')).toBe(true);
      expect(checkWhitelist('TEST@EXAMPLE.COM')).toBe(true);
      expect(checkWhitelist('  test@example.com  ')).toBe(true);
    });

    it('should return false for non-whitelisted emails', () => {
      const { checkWhitelist } = useAuthStore.getState();
      expect(checkWhitelist('notinlist@example.com')).toBe(false);
      expect(checkWhitelist('random@gmail.com')).toBe(false);
    });
  });

  describe('login', () => {
    it('should reject non-whitelisted emails without calling Firebase', async () => {
      const { login } = useAuthStore.getState();

      await login('notinlist@example.com', 'password123');

      expect(signInWithEmailAndPassword).not.toHaveBeenCalled();
      expect(useAuthStore.getState().error).toBe('Este correo no está en la lista de autorizados.');
    });

    it('should call Firebase for whitelisted emails', async () => {
      vi.mocked(signInWithEmailAndPassword).mockResolvedValueOnce({} as any);

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'password123');

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'test@example.com',
        'password123'
      );
      expect(useAuthStore.getState().error).toBeNull();
    });

    it('should set error for user not found', async () => {
      vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/user-not-found',
        message: 'User not found',
      });

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'password123');

      expect(useAuthStore.getState().error).toBe(
        'El usuario no existe. Si es tu primera vez, por favor regístrate.'
      );
    });

    it('should set error for wrong password', async () => {
      vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/wrong-password',
        message: 'Wrong password',
      });

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'wrongpassword');

      expect(useAuthStore.getState().error).toBe('Contraseña incorrecta.');
    });

    it('should set error for invalid credentials', async () => {
      vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/invalid-credential',
        message: 'Invalid credential',
      });

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'wrongpassword');

      expect(useAuthStore.getState().error).toBe('Contraseña incorrecta.');
    });

    it('should set error for too many requests', async () => {
      vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/too-many-requests',
        message: 'Too many requests',
      });

      const { login } = useAuthStore.getState();
      await login('test@example.com', 'password');

      expect(useAuthStore.getState().error).toBe(
        'Demasiados intentos. Intenta de nuevo más tarde.'
      );
    });
  });

  describe('register', () => {
    it('should reject non-whitelisted emails', async () => {
      const { register } = useAuthStore.getState();

      await register('notinlist@example.com', 'password123');

      expect(createUserWithEmailAndPassword).not.toHaveBeenCalled();
      expect(useAuthStore.getState().error).toBe('Este correo no está en la lista de autorizados.');
    });

    it('should call Firebase for whitelisted emails', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockResolvedValueOnce({} as any);

      const { register } = useAuthStore.getState();
      await register('test@example.com', 'password123');

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'test@example.com',
        'password123'
      );
      expect(useAuthStore.getState().error).toBeNull();
    });

    it('should set error for email already in use', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/email-already-in-use',
        message: 'Email already in use',
      });

      const { register } = useAuthStore.getState();
      await register('test@example.com', 'password123');

      expect(useAuthStore.getState().error).toBe(
        'El correo ya está registrado. Por favor, inicia sesión.'
      );
    });

    it('should set error for weak password', async () => {
      vi.mocked(createUserWithEmailAndPassword).mockRejectedValueOnce({
        code: 'auth/weak-password',
        message: 'Weak password',
      });

      const { register } = useAuthStore.getState();
      await register('test@example.com', '123');

      expect(useAuthStore.getState().error).toBe(
        'La contraseña es demasiado débil. Usa al menos 6 caracteres.'
      );
    });
  });

  describe('logout', () => {
    it('should call Firebase signOut and clear user state', async () => {
      vi.mocked(signOut).mockResolvedValueOnce();

      // Set initial authenticated state
      useAuthStore.setState({
        user: { email: 'test@example.com', role: 'student' },
        isAuthenticated: true,
      });

      const { logout } = useAuthStore.getState();
      await logout();

      expect(signOut).toHaveBeenCalled();
      expect(useAuthStore.getState().user).toBeNull();
      expect(useAuthStore.getState().isAuthenticated).toBe(false);
    });

    it('should handle logout errors', async () => {
      vi.mocked(signOut).mockRejectedValueOnce(new Error('Network error'));

      const { logout } = useAuthStore.getState();
      await logout();

      expect(useAuthStore.getState().error).toContain('Error al cerrar sesión');
    });
  });

  describe('initialize', () => {
    it('should set admin role for admin email', async () => {
      const { initialize } = useAuthStore.getState();
      initialize();

      // Simulate Firebase auth callback with admin user
      const authCallback = (globalThis as any).__authCallback;
      authCallback({ email: 'admin@upna.es' });

      expect(useAuthStore.getState().user).toEqual({
        email: 'admin@upna.es',
        role: 'admin',
      });
      expect(useAuthStore.getState().isAuthenticated).toBe(true);
      expect(useAuthStore.getState().isInitialized).toBe(true);
    });

    it('should set student role for non-admin email', async () => {
      const { initialize } = useAuthStore.getState();
      initialize();

      // Simulate Firebase auth callback with regular user
      const authCallback = (globalThis as any).__authCallback;
      authCallback({ email: 'student@example.com' });

      expect(useAuthStore.getState().user).toEqual({
        email: 'student@example.com',
        role: 'student',
      });
    });

    it('should clear user state when no user is authenticated', async () => {
      const { initialize } = useAuthStore.getState();
      initialize();

      // Simulate Firebase auth callback with null user
      const authCallback = (globalThis as any).__authCallback;
      authCallback(null);

      expect(useAuthStore.getState().user).toBeNull();
      expect(useAuthStore.getState().isAuthenticated).toBe(false);
      expect(useAuthStore.getState().isInitialized).toBe(true);
    });
  });

  describe('clearError', () => {
    it('should clear the error state', () => {
      useAuthStore.setState({ error: 'Some error' });

      const { clearError } = useAuthStore.getState();
      clearError();

      expect(useAuthStore.getState().error).toBeNull();
    });
  });
});
