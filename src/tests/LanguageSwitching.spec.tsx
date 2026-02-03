import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import { PyXomEnvironment } from '../core/engine/python/PyXomEnvironment';
import { useLanguageStore } from '../core/store/languageStore';

// Mockear scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mockear PythonRunner para simular ejecución y error de sintaxis en TERMINAL
vi.mock('../core/engine/python/core/PythonRunner', () => {
  return {
    default: {
      getInstance: () => ({
        setInputHandler: vi.fn(),
        sendInput: vi.fn(),
      }),
      execute: vi.fn((code) => {
          return Promise.resolve({
              success: false,
              // Este error triggerea el regex de RUNTIME_SYNTAX_PRINT
              error: "SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?"
          });
      }),
      interrupt: vi.fn()
    }
  };
});

const LanguageTestWrapper = () => {
    return (
        <div>
            <PyXomEnvironment initialCode="print 'hola'" />
            <TestControls />
        </div>
    );
};

const TestControls = () => {
    const setLanguage = useLanguageStore(s => s.setLanguage);
    return (
        <div>
            <button onClick={() => setLanguage('ENG')}>SetENG</button>
            <button onClick={() => setLanguage('CAS')}>SetCAS</button>
            <button onClick={() => setLanguage('EUS')}>SetEUS</button>
        </div>
    );
}

describe('Language Switching & Reactive Terminal', () => {
  it('should translate terminal error history dynamically', async () => {
    render(<LanguageTestWrapper />);

    // 1. Ejecutar código (Run) -> Esto va a la terminal
    const runBtn = screen.getByText(/Ejecutar|Run|Exekutatu/i);
    await act(async () => {
        runBtn.click();
    });

    // Verificar que estamos en la pestaña Terminal (por defecto)
    // El error debe aparecer en CAS (default)
    // RUNTIME_SYNTAX_PRINT: "Faltan paréntesis en la llamada a 'print'..."
    await waitFor(() => {
        expect(screen.getByText(/Faltan paréntesis/i)).toBeInTheDocument();
    });

    // 2. Cambiar a Inglés
    const btnEng = screen.getByText('SetENG');
    await act(async () => {
        btnEng.click();
    });

    // Verificar que el mensaje en la terminal cambió a Inglés
    // RUNTIME_SYNTAX_PRINT: "Missing parentheses in call to 'print'..."
    await waitFor(() => {
        expect(screen.getByText(/Missing parentheses/i)).toBeInTheDocument();
        // El mensaje en español ya no debería estar
        expect(screen.queryByText(/Faltan paréntesis/i)).not.toBeInTheDocument();
    });

    // 3. Cambiar a Euskera
    const btnEus = screen.getByText('SetEUS');
    await act(async () => {
        btnEus.click();
    });

    // Verificar Euskera
    // RUNTIME_SYNTAX_PRINT: "Parentesiak falta dira 'print' deian..."
    await waitFor(() => {
        expect(screen.getByText(/Parentesiak falta/i)).toBeInTheDocument();
    });
  });
});