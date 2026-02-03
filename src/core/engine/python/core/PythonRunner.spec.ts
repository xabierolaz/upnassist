import { describe, it, expect, vi, beforeEach } from 'vitest';
import PythonRunner from './PythonRunner';

describe('PythonRunner', () => {
  let runner: PythonRunner;
  let mockWorkerInstance: any;

  beforeEach(() => {
    vi.clearAllMocks();
    
    mockWorkerInstance = {
      postMessage: vi.fn(),
      terminate: vi.fn(),
      onmessage: null
    };
    
    vi.stubGlobal('Worker', vi.fn().mockImplementation(() => mockWorkerInstance));
    
    // @ts-ignore
    runner = new PythonRunner();
  });

  it('should initialize worker on construction', () => {
    expect(global.Worker).toHaveBeenCalled();
  });

  it('should handle READY message from worker', () => {
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'READY' } });
    // @ts-ignore
    expect(runner.isReady).toBe(true);
  });

  it('should handle STDOUT message', async () => {
    const onStdout = vi.fn();
    // @ts-ignore
    runner.onStdout = onStdout;
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'STDOUT', output: 'hello' } });
    expect(onStdout).toHaveBeenCalledWith('hello');
    // @ts-ignore
    expect(runner.outputBuffer).toBe('hello');
  });

  it('should handle DONE message and resolve promise', async () => {
    // @ts-ignore
    runner.isReady = true;
    const executePromise = runner.execute('print(1)');
    
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'STDOUT', output: '1' } });
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'DONE' } });

    const result = await executePromise;
    expect(result.success).toBe(true);
    expect(result.output).toBe('1');
  });

  it('should handle ERROR message', async () => {
    // @ts-ignore
    runner.isReady = true;
    const executePromise = runner.execute('invalid code');
    
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'ERROR', error: 'SyntaxError' } });

    const result = await executePromise;
    expect(result.success).toBe(false);
    expect(result.error).toBe('SyntaxError');
  });

  it('should handle INPUT_REQUEST', () => {
    const onInputRequest = vi.fn();
    runner.setInputHandler(onInputRequest);
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'INPUT_REQUEST', prompt: 'Name: ' } });
    expect(onInputRequest).toHaveBeenCalledWith('Name: ');
  });

  it('should terminate and restart worker', () => {
    runner.terminate();
    expect(mockWorkerInstance.terminate).toHaveBeenCalled();
    // A new worker should have been created
    expect(global.Worker).toHaveBeenCalledTimes(2);
  });

  it('should timeout if worker never becomes ready', async () => {
    // We don't use fake timers for the loop because it has awaits
    // Instead we can mock isReady to stay false and wait for the natural timeout
    // but that takes 5 seconds.
    // Let's try to trigger it faster by decreasing the attempts or using fake timers correctly.
    
    vi.useFakeTimers();
    const executePromise = runner.execute('print(1)');
    
    // Need to advance timers multiple times to let the loop progress
    for (let i = 0; i < 60; i++) {
        await vi.advanceTimersByTimeAsync(100);
    }
    
    const result = await executePromise;
    expect(result.success).toBe(false);
    expect(result.error).toContain('no está respondiendo');
    vi.useRealTimers();
  });

  it('should use static instance for execute', async () => {
    // @ts-ignore
    PythonRunner.instance = runner;
    // @ts-ignore
    runner.isReady = true;
    
    const executePromise = PythonRunner.execute('print(1)');
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'DONE' } });
    await executePromise;
    
    expect(mockWorkerInstance.postMessage).toHaveBeenCalled();
  });

  it('should provide static getInstance', () => {
    const instance = PythonRunner.getInstance();
    expect(instance).toBeInstanceOf(PythonRunner);
  });

  it('should handle INPUT_REQUEST with fallback if no handler set', () => {
    runner.setInputHandler(null as any);
    const sendInputSpy = vi.spyOn(runner, 'sendInput');
    // @ts-ignore
    mockWorkerInstance.onmessage({ data: { type: 'INPUT_REQUEST', prompt: 'Name: ' } });
    expect(sendInputSpy).toHaveBeenCalledWith('Input no disponible');
  });

  it('should handle sendInput and reach encoder logic', () => {
    // @ts-ignore
    expect(runner.sharedBuffer).toBeDefined();
    // @ts-ignore
    runner.sendInput('test input');
  });

  it('should handle static interrupt', () => {
    // @ts-ignore
    PythonRunner.instance = runner;
    const terminateSpy = vi.spyOn(runner, 'terminate');
    PythonRunner.interrupt();
    expect(terminateSpy).toHaveBeenCalled();
  });
});
