import type { ExecutionResult } from '../types';

/**
 * Handler called when Python requests input from stdin
 */
export type InputHandler = (prompt: string) => void;

/**
 * Handler called when Python writes to stdout
 */
export type StdoutHandler = (text: string) => void;

/**
 * Interface for Python execution engines.
 * Allows for different implementations (Pyodide, server-side, mock, etc.)
 */
export interface IPythonRunner {
  /**
   * Execute Python code and return the result
   * @param code - The Python code to execute
   * @param onStdout - Optional callback for stdout output
   * @returns Promise resolving to the execution result
   */
  execute(code: string, onStdout?: StdoutHandler): Promise<ExecutionResult>;

  /**
   * Send input to a running Python program waiting for stdin
   * @param text - The input text to send
   */
  sendInput(text: string): void;

  /**
   * Set the handler for input requests from Python
   * @param handler - Callback invoked when Python calls input()
   */
  setInputHandler(handler: InputHandler): void;

  /**
   * Terminate the current execution
   */
  terminate(): void;

  /**
   * Trace Python code execution and return step-by-step frames
   * @param code - The Python code to trace
   */
  trace(code: string): Promise<any[]>;
}

/**
 * Interface for the static methods of PythonRunner
 */
export interface IPythonRunnerStatic {
  /**
   * Get the singleton instance
   */
  getInstance(): IPythonRunner;

  /**
   * Static convenience method for execution
   */
  execute(code: string, onStdout?: StdoutHandler): Promise<ExecutionResult>;

  /**
   * Static convenience method for tracing
   */
  trace(code: string): Promise<any[]>;

  /**
   * Interrupt the current execution
   */
  interrupt(): void;
}
