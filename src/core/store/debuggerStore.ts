import { create } from 'zustand';
import PythonRunner from '../engine/python/core/PythonRunner';

// Definición de tipos basada en TraceEngine.py
export interface TraceValue {
    type: string;
    value: string | number | boolean | null;
    isRef?: boolean;
}

export interface TraceFrame {
    line: number;
    event: 'line' | 'call' | 'return' | 'exception';
    func: string;
    locals: Record<string, any>; // Raw from python
    error?: string;
}

interface DebuggerState {
    // State
    isActive: boolean;
    isLoading: boolean;
    frames: TraceFrame[];
    currentStep: number;
    isPlaying: boolean;
    speed: number;
    error: string | null;

    // Derived (Computed manually in getters or hooks usually, but kept in state for simplicity here)
    currentLine: number | null;
    currentLocals: Record<string, TraceValue>;

    // Actions
    startSession: (code: string) => Promise<void>;
    stopSession: () => void;
    stepForward: () => void;
    stepBack: () => void;
    seekTo: (step: number) => void;
    setSpeed: (ms: number) => void;
    togglePlay: () => void;
}

// Helper para parsear los valores crudos de Python ['type', val]
const parseTraceValue = (raw: any): TraceValue => {
    if (!Array.isArray(raw) || raw.length < 1) {
        return { type: 'unknown', value: JSON.stringify(raw) };
    }
    const type = raw[0];
    const val = raw[1];
    
    if (type === 'ref') {
        return { type: 'object', value: val, isRef: true };
    }
    
    // Recursive containers
    if (['list', 'tuple', 'set'].includes(type) && Array.isArray(val)) {
        // Value is array of raw values, map them
        return { 
            type: type, 
            value: val.map((item: any) => parseTraceValue(item)) as any 
        };
    }
    
    if (type === 'dict' && typeof val === 'object') {
        const parsedDict: Record<string, TraceValue> = {};
        Object.entries(val).forEach(([k, v]) => {
            parsedDict[k] = parseTraceValue(v);
        });
        return { type: 'dict', value: parsedDict as any };
    }

    return { type, value: val };
};

export const useDebuggerStore = create<DebuggerState>((set, get) => ({
    isActive: false,
    isLoading: false,
    frames: [],
    currentStep: 0,
    isPlaying: false,
    speed: 1000,
    error: null,
    currentLine: null,
    currentLocals: {},

    startSession: async (code: string) => {
        set({ isLoading: true, error: null, isActive: true, frames: [], currentStep: 0 });
        try {
            const runner = PythonRunner.getInstance();
            const rawFrames = await runner.trace(code);
            
            if (!rawFrames || rawFrames.length === 0) {
                set({ 
                    isLoading: false, 
                    error: "No se generaron pasos de ejecución.", 
                    isActive: false 
                });
                return;
            }

            // Detectar error en el trace
            const lastFrame = rawFrames[rawFrames.length - 1];
            if (lastFrame.event === 'exception') {
                // Aceptamos el trace pero marcamos el error
            }

            set({ 
                isLoading: false, 
                frames: rawFrames, 
                currentStep: 0,
                currentLine: rawFrames[0].line,
                currentLocals: {} // Primer paso usualmente setup
            });

            // Avanzar automáticamente al primer paso real si el 0 es setup
            if (rawFrames.length > 0) {
                 get().seekTo(0);
            }

        } catch (e: any) {
            set({ isLoading: false, error: e.message || "Error iniciando debugger", isActive: false });
        }
    },

    stopSession: () => {
        set({ isActive: false, isPlaying: false, frames: [], currentStep: 0, currentLine: null });
    },

    stepForward: () => {
        const { frames, currentStep } = get();
        if (currentStep < frames.length - 1) {
            get().seekTo(currentStep + 1);
        } else {
            set({ isPlaying: false }); // Stop at end
        }
    },

    stepBack: () => {
        const { currentStep } = get();
        if (currentStep > 0) {
            get().seekTo(currentStep - 1);
        }
    },

    seekTo: (step: number) => {
        const { frames } = get();
        if (!frames[step]) return;

        const frame = frames[step];
        
        // Procesar locals
        const processedLocals: Record<string, TraceValue> = {};
        if (frame.locals) {
            Object.entries(frame.locals).forEach(([k, v]) => {
                processedLocals[k] = parseTraceValue(v);
            });
        }

        set({ 
            currentStep: step, 
            currentLine: frame.line,
            currentLocals: processedLocals
        });
    },

    setSpeed: (ms: number) => set({ speed: ms }),
    
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
