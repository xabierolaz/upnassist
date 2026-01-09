import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProgressState {
  completedExercises: Record<string, boolean>;
  markAsCompleted: (exerciseId: string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedExercises: {},
      markAsCompleted: (id) => set((state) => ({
        completedExercises: { ...state.completedExercises, [id]: true }
      }))
    }),
    {
      name: 'pyxom-progress-storage', // Nombre único en localStorage
      storage: createJSONStorage(() => localStorage), // Usar almacenamiento local
    }
  )
);
