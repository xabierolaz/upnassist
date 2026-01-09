import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModularLayoutSystem, ModuleItem } from './ModularLayoutSystem';

// Mock RGL
vi.mock('react-grid-layout', () => {
  const FakeResponsive = ({ children, className }: any) => (
    <div data-testid="mock-rgl" className={className}>
      {children}
    </div>
  );
  return {
    Responsive: FakeResponsive,
    WidthProvider: (c: any) => c
  };
});

// Mock Icons
vi.mock('@heroicons/react/24/outline', () => ({
  XMarkIcon: () => <span data-testid="close-icon">X</span>
}));

const mockModules: ModuleItem[] = [
  {
    id: 'mod1',
    type: 'test',
    title: 'Modulo 1',
    content: <div>Contenido 1</div>,
    enabled: true,
    priority: 1,
    preferredSize: 'medium',
    closable: true
  },
  {
    id: 'mod2',
    type: 'test',
    title: 'Modulo 2',
    content: <div>Contenido 2</div>,
    enabled: false, // Disabled
    priority: 2,
    preferredSize: 'medium'
  }
];

describe('ModularLayoutSystem', () => {
  it('debe renderizar solo módulos habilitados', () => {
    render(
      <ModularLayoutSystem 
        modules={mockModules} 
        asignaturaId="1" 
        temaId="1" 
      />
    );

    expect(screen.getByText('Modulo 1')).toBeInTheDocument();
    expect(screen.getByText('Contenido 1')).toBeInTheDocument();
    
    // Disabled module should not be present
    expect(screen.queryByText('Modulo 2')).not.toBeInTheDocument();
  });

  it('debe permitir cerrar módulos si son closable', () => {
    const onToggle = vi.fn();
    render(
      <ModularLayoutSystem 
        modules={mockModules} 
        asignaturaId="1" 
        temaId="1"
        onModuleToggle={onToggle}
      />
    );

    const closeBtn = screen.getByTitle('Cerrar módulo');
    fireEvent.click(closeBtn);

    expect(onToggle).toHaveBeenCalledWith('mod1', false);
  });

  it('no debe mostrar botón de cerrar en modo readOnly', () => {
    render(
      <ModularLayoutSystem 
        modules={mockModules} 
        asignaturaId="1" 
        temaId="1"
        readOnly={true}
      />
    );

    expect(screen.queryByTitle('Cerrar módulo')).not.toBeInTheDocument();
  });
});
