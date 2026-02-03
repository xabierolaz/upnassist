import type { ExecutionResult } from '../../types';
import type { IPythonRunner, InputHandler, StdoutHandler } from '../IPythonRunner';

/**
 * Mock implementation of PythonRunner for testing purposes.
 * Allows simulating Python execution without loading Pyodide.
 */
export class MockPythonRunner implements IPythonRunner {
  private inputHandler: InputHandler | null = null;
  private pendingInputResolve: ((value: string) => void) | null = null;
  private executionResults: Map<string, ExecutionResult> = new Map();
  private outputCallback: StdoutHandler | null = null;

  /**
   * Set a predefined result for specific code
   */
  setExecutionResult(code: string, result: ExecutionResult): void {
    this.executionResults.set(code.trim(), result);
  }

  /**
   * Set a default result for any code
   */
  setDefaultResult(result: ExecutionResult): void {
    this.executionResults.set('__default__', result);
  }

  async execute(code: string, onStdout?: StdoutHandler): Promise<ExecutionResult> {
    this.outputCallback = onStdout || null;

    const trimmedCode = code.trim();

    // Check for predefined result
    if (this.executionResults.has(trimmedCode)) {
      const result = this.executionResults.get(trimmedCode)!;
      if (onStdout && result.output) {
        onStdout(result.output);
      }
      return result;
    }

    // Check for default result
    if (this.executionResults.has('__default__')) {
      const result = this.executionResults.get('__default__')!;
      if (onStdout && result.output) {
        onStdout(result.output);
      }
      return result;
    }

    // Default behavior: simulate successful execution
    const defaultResult: ExecutionResult = {
      success: true,
      output: `[Mock] Executed: ${trimmedCode.substring(0, 50)}...`
    };

    if (onStdout) {
      onStdout(defaultResult.output);
    }

    return defaultResult;
  }

  sendInput(text: string): void {
    if (this.pendingInputResolve) {
      this.pendingInputResolve(text);
      this.pendingInputResolve = null;
    }
  }

  setInputHandler(handler: InputHandler): void {
    this.inputHandler = handler;
  }

  terminate(): void {
    this.pendingInputResolve = null;
    this.outputCallback = null;
  }

  async trace(code: string): Promise<any[]> {
    return [{ line: 1, event: 'line', func: '<module>', locals: {} }];
  }

  /**
   * Simulate an input request from Python
   */
  simulateInputRequest(prompt: string): Promise<string> {
    if (this.inputHandler) {
      this.inputHandler(prompt);
    }
    return new Promise((resolve) => {
      this.pendingInputResolve = resolve;
    });
  }

  /**
   * Simulate stdout output
   */
  simulateStdout(text: string): void {
    if (this.outputCallback) {
      this.outputCallback(text);
    }
  }

  /**
   * Clear all predefined results
   */
  clearResults(): void {
    this.executionResults.clear();
  }

  // Static interface
  private static _instance: MockPythonRunner;

  static getInstance(): MockPythonRunner {
    if (!MockPythonRunner._instance) {
      MockPythonRunner._instance = new MockPythonRunner();
    }
    return MockPythonRunner._instance;
  }

  static async execute(code: string, onStdout?: StdoutHandler): Promise<ExecutionResult> {
    return MockPythonRunner.getInstance().execute(code, onStdout);
  }

  static async trace(code: string): Promise<any[]> {
    return MockPythonRunner.getInstance().trace(code);
  }

  static interrupt(): void {
    if (MockPythonRunner._instance) {
      MockPythonRunner._instance.terminate();
    }
  }

  /**
   * Reset the singleton instance (useful between tests)
   */
  static reset(): void {
    if (MockPythonRunner._instance) {
      MockPythonRunner._instance.clearResults();
      MockPythonRunner._instance.terminate();
    }
    MockPythonRunner._instance = new MockPythonRunner();
  }
}

export default MockPythonRunner;
