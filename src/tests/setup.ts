import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock Worker for tests
class MockWorker {
  url: string | URL;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: ErrorEvent) => void) | null = null;

  constructor(url: string | URL) {
    this.url = url;
  }

  postMessage(message: any) {
    // Mock implementation - do nothing
  }

  terminate() {
    // Mock implementation - do nothing
  }

  addEventListener(type: string, listener: EventListener) {
    // Mock implementation - do nothing
  }

  removeEventListener(type: string, listener: EventListener) {
    // Mock implementation - do nothing
  }

  dispatchEvent(event: Event): boolean {
    return true;
  }
}

// @ts-ignore
global.Worker = MockWorker;

// Mock SharedArrayBuffer and Atomics for tests
if (typeof global.SharedArrayBuffer === 'undefined') {
    // @ts-ignore
    global.SharedArrayBuffer = ArrayBuffer;
}

if (typeof global.Atomics === 'undefined') {
    // @ts-ignore
    global.Atomics = {
        store: vi.fn(),
        notify: vi.fn(),
        wait: vi.fn(),
        load: vi.fn(),
    };
}

// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
