import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestRunner } from './TestRunner';
import PythonRunner from './PythonRunner';

// Mockeamos PythonRunner para no depender de cargar Pyodide (WASM) en el entorno de test de Node
vi.mock('./PythonRunner', () => {
  return {
    default: {
      execute: vi.fn()
    }
  };
});

describe('TestRunner Logic', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should parse a successful test run correctly', async () => {
    // Simulamos que Python devuelve este JSON string al final
    const mockPythonOutput = JSON.stringify({
      passed: 2,
      total: 2,
      results: [
        { name: 'test_1', status: 'pass', message: 'Correcto' },
        { name: 'test_2', status: 'pass', message: 'Correcto' }
      ],
      score: 100
    });

    // Configuramos el mock para devolver éxito y el output esperado
    (PythonRunner.execute as any).mockResolvedValue({
      success: true,
      output: `some logs...\n${mockPythonOutput}` // Simulamos logs previos al JSON
    });

    const result = await TestRunner.runTests('print("hello")', 'import unittest...');

    expect(result.passed).toBe(2);
    expect(result.total).toBe(2);
    expect(result.score).toBe(100);
    expect(result.results[0].status).toBe('pass');
  });

  it('should parse a failing test run correctly', async () => {
    const mockPythonOutput = JSON.stringify({
      passed: 1,
      total: 2,
      results: [
        { name: 'test_1', status: 'pass', message: 'Correcto' },
        { name: 'test_2', status: 'fail', message: 'Expected 10 got 5' }
      ],
      score: 50
    });

    (PythonRunner.execute as any).mockResolvedValue({
      success: true,
      output: mockPythonOutput
    });

    const result = await TestRunner.runTests('bad code', 'import unittest...');

    expect(result.passed).toBe(1);
    expect(result.score).toBe(50);
    expect(result.results[1].status).toBe('fail');
    expect(result.results[1].message).toContain('Expected 10');
  });

  it('should handle Python syntax errors (Critical Errors)', async () => {
    // Si hay error de sintaxis en el código del alumno, el driver devuelve un JSON de error controlado
    const mockPythonOutput = JSON.stringify({
      passed: 0,
      total: 0,
      results: [{
        name: 'Error de Ejecución',
        status: 'error',
        message: 'SyntaxError: invalid syntax'
      }],
      score: 0
    });

    (PythonRunner.execute as any).mockResolvedValue({
      success: true,
      output: mockPythonOutput
    });

    const result = await TestRunner.runTests('print(', 'import unittest...');

    expect(result.passed).toBe(0);
    expect(result.results[0].status).toBe('error');
    expect(result.results[0].message).toContain('SyntaxError');
  });

  it('should handle system crashes gracefully', async () => {
    // Si PythonRunner falla a nivel de sistema (ej: no cargó Pyodide)
    (PythonRunner.execute as any).mockResolvedValue({
      success: false,
      error: 'Pyodide failed to load'
    });

    const result = await TestRunner.runTests('code', 'test');

    expect(result.passed).toBe(0);
    expect(result.results[0].name).toBe('System Error');
  });
});