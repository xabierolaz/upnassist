import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VirtualList } from './VirtualList';

// Mock AutoSizer to render children with fixed dimensions
vi.mock('react-virtualized-auto-sizer', () => ({
  default: ({ children }: any) => children({ height: 500, width: 500 })
}));

describe('VirtualList', () => {
  const mockItems = Array.from({ length: 100 }, (_, i) => `Item ${i}`);
  const renderItem = (item: string) => <div>{item}</div>;

  it('debe mostrar mensaje de carga cuando loading es true', () => {
    render(
      <VirtualList
        items={[]}
        renderItem={renderItem}
        loading={true}
      />
    );
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('debe mostrar mensaje vacío cuando no hay items', () => {
    render(
      <VirtualList
        items={[]}
        renderItem={renderItem}
        emptyMessage="Nada por aquí"
      />
    );
    expect(screen.getByText('Nada por aquí')).toBeInTheDocument();
  });

  it('debe renderizar items usando VirtualList', () => {
    render(
      <VirtualList
        items={mockItems}
        renderItem={renderItem}
        itemHeight={50}
      />
    );
    
    // VirtualList solo renderiza los visibles. 
    // Con altura 500 y items de 50, debería mostrar unos 10 + overscan.
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 5')).toBeInTheDocument();
    
    // El item 99 probablemente no se renderice inicialmente
    // Pero con overscan y jsdom a veces es tricky verificar "no está en el documento"
    // si el componente lo maneja distinto.
    // Vamos a verificar que ALGUNOS items existen.
  });
});
