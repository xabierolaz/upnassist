import { TRACE_ENGINE_PY } from '../debug/TraceEngine';

// Type definitions for Pyodide
interface PyodideInterface {
  loadPackage: (name: string) => Promise<void>;
  globals: {
    set: (name: string, value: unknown) => void;
  };
  runPython: (code: string) => any;
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (msg: string) => void }) => void;
  setStderr: (options: { batched: (msg: string) => void }) => void;
}

interface LoadPyodideModule {
  loadPyodide: () => Promise<PyodideInterface>;
}

// Worker message types
interface InitMessage {
  type: 'INIT';
  buffer: SharedArrayBuffer;
}

interface RunMessage {
  type: 'RUN';
  code: string;
}

interface TraceMessage {
  type: 'TRACE';
  code: string;
}

type WorkerMessage = InitMessage | RunMessage | TraceMessage;

interface WorkerResponse {
  type: 'READY' | 'STDOUT' | 'INPUT_REQUEST' | 'DONE' | 'ERROR' | 'TRACE_RESULT';
  output?: string;
  error?: string;
  prompt?: string;
  frames?: any[];
}

// Worker state
let sharedBuffer: SharedArrayBuffer | null = null;
let sharedArray: Int32Array | null = null;
let pyodide: PyodideInterface | null = null;

async function loadPyodideAndPackages(): Promise<void> {
  try {
    // Use dynamic import to avoid Vite bundling issues with remote URLs
    const { loadPyodide } = await import(
      // @ts-ignore - Dynamic import from CDN URL cannot be resolved at compile time
      /* @vite-ignore */ "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.mjs"
    ) as LoadPyodideModule;

    pyodide = await loadPyodide();
    await pyodide.loadPackage("micropip");

    // Define custom input function in Python
    // This function calls JS to wait for input
    pyodide.globals.set("js_input_request", (promptText: string): string => {
      if (!sharedArray || !sharedBuffer) {
        throw new Error("SharedArrayBuffer not initialized");
      }

      // 1. Notify Main Thread that we want input
      self.postMessage({ type: "INPUT_REQUEST", prompt: promptText } as WorkerResponse);

      // 2. Wait (blocking) using Atomics
      // Index 0: State (0 = waiting, 1 = ready)
      Atomics.wait(sharedArray, 0, 0);

      // 3. On wake, read input from buffer
      // Length is stored at index 1
      const length = sharedArray[1];

      // Decode bytes to string
      const textBytes = new Uint8Array(sharedBuffer).slice(8, 8 + length);
      const decoder = new TextDecoder();
      const text = decoder.decode(textBytes);

      // Reset flag for next input
      Atomics.store(sharedArray, 0, 0);

      return text;
    });

    // Override input() in Python to use our hook
    pyodide.runPython(`
import builtins
def input(prompt=""):
    return js_input_request(prompt)
builtins.input = input
    `);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error loading Pyodide';
    self.postMessage({ type: "ERROR", error: `Failed to initialize Pyodide: ${errorMessage}` } as WorkerResponse);
    throw error;
  }
}

function formatPythonError(error: unknown): string {
  let formattedError = String(error);

  try {
    const lines = formattedError.split('\n');
    // Find where user code starts
    const startIndex = lines.findIndex(line =>
      line.includes('File "<exec>"') || line.includes('File "<console>"')
    );

    if (startIndex !== -1) {
      // Keep only from user line onwards
      formattedError = lines.slice(startIndex).join('\n');
    } else {
      // Fallback: filter out internal paths
      formattedError = lines.filter(l =>
        !l.includes("/lib/python") &&
        !l.includes("_pyodide") &&
        !l.includes("CodeRunner") &&
        !l.trim().startsWith("await") &&
        !l.trim().startsWith("^")
      ).join('\n');
    }

    // Clean common prefix
    formattedError = formattedError.replace("PythonError: ", "").trim();
  } catch {
    // If formatting fails, return original
  }

  return formattedError;
}

self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const { type } = event.data;

  if (type === "INIT") {
    const { buffer } = event.data as InitMessage;
    sharedBuffer = buffer;
    sharedArray = new Int32Array(sharedBuffer);
    await loadPyodideAndPackages();
    self.postMessage({ type: "READY" } as WorkerResponse);
  } else if (type === "RUN") {
    const { code } = event.data as RunMessage;

    if (!pyodide) {
      self.postMessage({ type: "ERROR", error: "Pyodide not loaded" } as WorkerResponse);
      return;
    }

    try {
      // Redirect stdout
      pyodide.setStdout({
        batched: (msg: string) => {
          self.postMessage({ type: "STDOUT", output: msg + "\n" } as WorkerResponse);
        }
      });

      // Redirect stderr
      pyodide.setStderr({
        batched: (msg: string) => {
          self.postMessage({ type: "STDOUT", output: msg + "\n" } as WorkerResponse);
        }
      });

      // Execute
      await pyodide.runPythonAsync(code);
      self.postMessage({ type: "DONE" } as WorkerResponse);
    } catch (error) {
      const formattedError = formatPythonError(error);
      self.postMessage({ type: "ERROR", error: formattedError } as WorkerResponse);
    }
  } else if (type === "TRACE") {
    const { code } = event.data as TraceMessage;

    if (!pyodide) {
      self.postMessage({ type: "ERROR", error: "Pyodide not loaded" } as WorkerResponse);
      return;
    }

    try {
      // Inject Trace Engine
      pyodide.runPython(TRACE_ENGINE_PY);

      // Execute Trace
      pyodide.globals.set("CODE_TO_TRACE", code);
      // Use json.dumps to ensure safe serialization across worker boundary
      const jsonResult = pyodide.runPython("import json; json.dumps(trace_execution(CODE_TO_TRACE))");
      
      self.postMessage({ type: "TRACE_RESULT", frames: JSON.parse(jsonResult) } as WorkerResponse);
    } catch (error) {
      const formattedError = formatPythonError(error);
      self.postMessage({ type: "ERROR", error: formattedError } as WorkerResponse);
    }
  }
};
