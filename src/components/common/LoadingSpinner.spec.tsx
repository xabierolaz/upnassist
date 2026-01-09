import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('debe renderizar el texto de carga', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('debe tener los elementos visuales del spinner', () => {
    const { container } = render(<LoadingSpinner />);
    // Verificar que existe el div con la clase animate-spin
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('rounded-full');
    expect(spinner).toHaveClass('border-blue-600');
  });
});
