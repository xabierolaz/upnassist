import type { ExecutionResult } from '../types';

export interface LintError {
  line: number;
  column: number;
  message: string;
  code: string;
  type: 'error' | 'warning';
}

class PythonRunner {
  private worker: Worker | null = null;
  private sharedBuffer: SharedArrayBuffer | null = null;
  private sharedArray: Int32Array | null = null;
  private isReady = false;
  private outputBuffer = "";
  
  private resolveExecution: ((value: ExecutionResult) => void) | null = null;
  private onStdout: ((text: string) => void) | null = null;
  private onInputRequest: ((prompt: string) => void) | null = null;

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    if (typeof window === 'undefined') return;

    this.worker = new Worker(new URL('../../../workers/pyodide.worker.ts', import.meta.url), {
      type: "module"
    });

    this.sharedBuffer = new SharedArrayBuffer(1024);
    this.sharedArray = new Int32Array(this.sharedBuffer);

    this.worker.postMessage({ 
      type: "INIT", 
      buffer: this.sharedBuffer 
    });

    this.worker.onmessage = (e) => {
      const { type, output, error, prompt } = e.data;

      switch (type) {
        case "READY":
          this.isReady = true;
          break;
        case "STDOUT":
          this.outputBuffer += output;
          if (this.onStdout) this.onStdout(output);
          break;
        case "INPUT_REQUEST":
          if (this.onInputRequest) {
            this.onInputRequest(prompt || "");
          } else {
            this.sendInput("Input no disponible");
          }
          break;
        case "DONE":
          if (this.resolveExecution) {
            this.resolveExecution({ success: true, output: this.outputBuffer });
            this.cleanupExecution();
          }
          break;
        case "ERROR":
          if (this.resolveExecution) {
            this.resolveExecution({ success: false, output: this.outputBuffer, error: error });
            this.cleanupExecution();
          }
          break;
      }
    };
  }

  private cleanupExecution() {
    this.resolveExecution = null;
    this.onStdout = null;
  }

  // NUEVO: Método para matar el proceso
  public terminate() {
      if (this.worker) {
          this.worker.terminate();
          this.worker = null;
      }
      
      // Si había alguien esperando promesa, rechazarla o resolver con error
      if (this.resolveExecution) {
          this.resolveExecution({ success: false, output: this.outputBuffer, error: "Ejecución interrumpida por el usuario." });
          this.cleanupExecution();
      }

      this.isReady = false;
      this.initWorker(); // Reiniciar para estar listos para la próxima
  }

  public sendInput(text: string) {
    if (!this.sharedBuffer || !this.sharedArray) return;
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    if (bytes.length > 1000) return;
    this.sharedArray[1] = bytes.length;
    const uint8View = new Uint8Array(this.sharedBuffer);
    uint8View.set(bytes, 8);
    Atomics.store(this.sharedArray, 0, 1);
    Atomics.notify(this.sharedArray, 0, 1);
  }

  public setInputHandler(handler: (prompt: string) => void) {
    this.onInputRequest = handler;
  }

  public async execute(code: string, onStdout?: (text: string) => void): Promise<ExecutionResult> {
    if (!this.worker) this.initWorker();
    
    if (!this.isReady) {
        // Espera simple con timeout
        let attempts = 0;
        while (!this.isReady && attempts < 50) { // 5 segundos max
            await new Promise(r => setTimeout(r, 100));
            attempts++;
        }
        if (!this.isReady) return { success: false, output: "", error: "El entorno Python no está respondiendo." };
    }

    return new Promise((resolve) => {
      this.resolveExecution = resolve;
      this.onStdout = onStdout || null;
      this.outputBuffer = "";
      this.worker!.postMessage({ type: "RUN", code });
    });
  }

  static instance: PythonRunner;
  
  static async execute(code: string, onStdout?: (text: string) => void): Promise<ExecutionResult> {
    if (!this.instance) this.instance = new PythonRunner();
    return this.instance.execute(code, onStdout);
  }
  
  static getInstance(): PythonRunner {
      if (!this.instance) this.instance = new PythonRunner();
      return this.instance;
  }
  
  // Exponer método estático para la UI
  static interrupt() {
      if (this.instance) {
          this.instance.terminate();
      }
  }
}

export default PythonRunner;
