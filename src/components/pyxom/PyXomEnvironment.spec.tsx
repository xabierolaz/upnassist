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
    
    // Debe haber un botón Run y un botón Submit
    expect(screen.getByText(/Run/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    expect(screen.getByTitle('Reset')).toBeInTheDocument();
  });

  it('handles Run button click', async () => {
    render(<PyXomEnvironment initialCode="print('hi')" />);
    
    const runButton = screen.getByText(/Run/i);
    
    // Simular que el Runner tarda un poco
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

    const resetButton = screen.getByTitle('Reset');
    fireEvent.click(resetButton);

    expect(confirmSpy).toHaveBeenCalled();
  });
});