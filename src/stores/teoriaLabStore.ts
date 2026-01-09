// Minimal stub for teoriaLabStore - to be migrated to Firebase
interface TeoriaLabStore {
  labProgress: any;
  setLabProgress: (progress: any) => void;
  currentExercise: any;
  setCurrentExercise: (exercise: any) => void;
  completedActivities: any[];
  totalTimeSpent: number;
}

const mockStore: TeoriaLabStore = {
  labProgress: {},
  setLabProgress: () => {},
  currentExercise: null,
  setCurrentExercise: () => {},
  completedActivities: [],
  totalTimeSpent: 0
};

export const useTeoriaLabStore = () => mockStore;