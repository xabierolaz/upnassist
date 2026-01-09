import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserMode = 'student' | 'professor';

interface UserState {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  // Preferencias visuales
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      mode: 'student', // Default
      setMode: (mode) => set({ mode }),
      theme: 'light',
      setTheme: (theme) => set({ theme })
    }),
    {
      name: 'pyxom-user-storage',
    }
  )
);