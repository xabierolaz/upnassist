import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { PyXomEnvironment } from '../components/pyxom/PyXomEnvironment';
import { useLanguageStore } from '../stores/languageStore';

// Mockear scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mockear PythonRunner para evitar WebWorkers
vi.mock('../components/pyxom/core/PythonRunner', () => {
  return {
    default: {
      getInstance: () => ({
        setInputHandler: vi.fn(),
        sendInput: vi.fn(),
      }),
      execute: vi.fn(),
      interrupt: vi.fn()
    }
  };
});

// Componente Helper para manipular el store dentro del contexto de React
const LanguageTestWrapper = () => {
    return (
        <div>
            <PyXomEnvironment />
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

describe('Language Switching', () => {
  // afterEach(() => {
  //     // Store reset handled by tests if needed
  // });

  it('should switch interface language dynamically', async () => {
    render(<LanguageTestWrapper />);

    // 1. Verificar Castellano (Default)
    expect(screen.getByText(/Ejecutar/i)).toBeInTheDocument();
    expect(screen.queryByText(/Run/i)).not.toBeInTheDocument();

    // 2. Cambiar a Inglés
    const btnEng = screen.getByText('SetENG');
    await act(async () => {
        btnEng.click();
    });

    // Verificar Inglés
    expect(screen.getByText(/Run/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ejecutar/i)).not.toBeInTheDocument();

    // 3. Cambiar a Euskera
    const btnEus = screen.getByText('SetEUS');
    await act(async () => {
        btnEus.click();
    });

    // Verificar Euskera
    expect(screen.getByText(/Exekutatu/i)).toBeInTheDocument();
  });
});
