import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { PyXomEnvironment } from './PyXomEnvironment';
import PythonRunner from './core/PythonRunner';

// Mockear scrollIntoView que no existe en JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mockear PythonRunner para evitar WebWorkers reales
vi.mock('./core/PythonRunner', () => {
  const mockExecute = vi.fn();
  const mockSetInput = vi.fn();
  const mockInterrupt = vi.fn();
  
  return {
    default: {
      getInstance: () => ({
        setInputHandler: mockSetInput,
        sendInput: vi.fn(),
      }),
      execute: mockExecute,
      interrupt: mockInterrupt
    }
  };
});

describe('PyXomEnvironment UI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

    it('renders initial buttons correctly', () => {
      render(<PyXomEnvironment initialCode="print('hi')" />);
  
      // Debe haber un botón Ejecutar y un botón Enviar
      expect(screen.getByText(/Ejecutar/i)).toBeInTheDocument();
      expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
      expect(screen.getByText('Reiniciar')).toBeInTheDocument();
    });
  it('handles Run button click', async () => {
    render(<PyXomEnvironment initialCode="print('hi')" />);

    const runButton = screen.getByText(/Ejecutar/i);

    // Mockear la ejecución
    (PythonRunner.execute as any).mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

    await act(async () => {
      fireEvent.click(runButton);
    });

    // Debería intentar ejecutar
    expect(PythonRunner.execute).toHaveBeenCalledWith("print('hi')", expect.any(Function));
  });

    it('shows Reset confirmation', () => {
      render(<PyXomEnvironment initialCode="print('original')" />);
  
      const confirmSpy = vi.spyOn(window, 'confirm');
      confirmSpy.mockImplementation(() => true);
  
      const resetButton = screen.getByText('Reiniciar');
      fireEvent.click(resetButton);
  
      expect(confirmSpy).toHaveBeenCalled();
    });});