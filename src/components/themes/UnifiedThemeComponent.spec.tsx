import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UnifiedThemeComponent, { ThemeConfig } from './UnifiedThemeComponent';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  Link: ({ to, children, className }: any) => (
    <a href={to} className={className} data-testid="link">{children}</a>
  )
}));

// Mock HeroIcons
vi.mock('@heroicons/react/24/outline', () => ({
  BookOpenIcon: () => <span>Book</span>,
  BeakerIcon: () => <span>Beaker</span>,
  ClipboardDocumentCheckIcon: () => <span>Quiz</span>,
  ChevronLeftIcon: () => <span>Left</span>,
  ChevronRightIcon: () => <span>Right</span>,
  DocumentArrowDownIcon: () => <span>PDF</span>
}));

const mockConfig: ThemeConfig = {
  id: 'theme1',
  subjectId: 'sub1',
  title: 'Tema 1: Introducción',
  description: 'Descripción del tema',
  sections: [
    {
      id: 'sec1',
      title: 'Sección 1',
      type: 'teoria',
      content: <div>Contenido Sección 1</div>
    },
    {
      id: 'sec2',
      title: 'Sección 2',
      type: 'ejercicios',
      content: <div>Contenido Sección 2</div>
    }
  ],
  navigationPrev: { path: '/prev', label: 'Anterior' },
  navigationNext: { path: '/next', label: 'Siguiente' },
  pdfPath: '/docs/tema1.pdf'
};

describe('UnifiedThemeComponent', () => {
  it('debe renderizar título y descripción', () => {
    render(<UnifiedThemeComponent config={mockConfig} />);
    expect(screen.getByText('Tema 1: Introducción')).toBeInTheDocument();
    expect(screen.getByText('Descripción del tema')).toBeInTheDocument();
  });

  it('debe renderizar navegación anterior/siguiente', () => {
    render(<UnifiedThemeComponent config={mockConfig} />);
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
  });

  it('debe renderizar botón de PDF si existe path', () => {
    render(<UnifiedThemeComponent config={mockConfig} />);
    expect(screen.getByText('Descargar PDF')).toBeInTheDocument();
    expect(screen.getByText('Descargar PDF').closest('a')).toHaveAttribute('href', '/docs/tema1.pdf');
  });

  it('debe cambiar de sección al hacer click', () => {
    render(<UnifiedThemeComponent config={mockConfig} />);
    
    // Initial state: Section 1
    expect(screen.getByText('Contenido Sección 1')).toBeInTheDocument();
    expect(screen.queryByText('Contenido Sección 2')).not.toBeInTheDocument();

    // Click Section 2
    fireEvent.click(screen.getByText('Sección 2'));

    // New state: Section 2
    expect(screen.queryByText('Contenido Sección 1')).not.toBeInTheDocument();
    expect(screen.getByText('Contenido Sección 2')).toBeInTheDocument();
    expect(screen.getAllByText('Sección 2').length).toBeGreaterThan(0); // Sidebar + Header
  });

  it('debe renderizar mensaje por defecto si sección no existe o contenido vacío', () => {
    const emptyConfig = {
      ...mockConfig,
      sections: [{ id: 'empty', title: 'Vacío', content: null }]
    };
    render(<UnifiedThemeComponent config={emptyConfig} />);
    expect(screen.getByText('Contenido en desarrollo para esta sección')).toBeInTheDocument();
  });
});
