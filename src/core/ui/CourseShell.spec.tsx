import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CourseShell } from './CourseShell';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import * as loader from '../loader';
import { Course } from '../types';

// Mock dependencies
vi.mock('../loader', () => ({
  loadUnit: vi.fn(),
}));

vi.mock('../store/languageStore', () => ({
  useLanguageStore: () => ({
    currentLang: 'ENG',
    t: { exercise: 'Exercise', points: 'Points', university: 'UPNA' },
  }),
}));

vi.mock('../store/progressStore', () => ({
  useProgressStore: vi.fn(() => ({})),
}));

vi.mock('./common/GlobalSidebar', () => ({
  GlobalSidebar: () => <div data-testid="sidebar">Sidebar</div>,
}));

vi.mock('./blocks/TopBar', () => ({
  TopBar: () => <div data-testid="topbar">TopBar</div>,
}));

vi.mock('../engine/python/PyXomEnvironment', () => ({
  PyXomEnvironment: () => <div data-testid="python-env">Python Env</div>,
}));

vi.mock('./visualizers/InteractiveListVisualizer', () => ({ InteractiveListVisualizer: () => <div>List Vis</div> }));
vi.mock('./visualizers/FStringVisualizer', () => ({ FStringVisualizer: () => <div>FString Vis</div> }));
vi.mock('./visualizers/MainGuardVisualizer', () => ({ MainGuardVisualizer: () => <div>MainGuard Vis</div> }));
vi.mock('./visualizers/SparseMatrixVisualizer', () => ({ SparseMatrixVisualizer: () => <div>Sparse Vis</div> }));
vi.mock('./visualizers/OOPVisualizer', () => ({ OOPVisualizer: () => <div>OOP Vis</div> }));

const mockCourse: Course = {
  id: 'mooc',
  title: { ENG: 'Python Course', CAS: 'Curso Python', EUS: 'Python Ikastaroa' },
  modules: [
    {
      id: 'part1',
      title: { ENG: 'Part 1', CAS: 'Parte 1', EUS: '1. Zatia' },
      units: [
        { id: 'part1-1', title: { ENG: 'Unit 1.1', CAS: 'Unidad 1.1', EUS: '1.1 Unitatea' } }
      ]
    }
  ]
};

describe('CourseShell Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state initially', async () => {
    (loader.loadUnit as any).mockReturnValue(new Promise(() => {})); // Never resolves
    
    render(
      <MemoryRouter initialEntries={['/course/mooc/part1-1']}>
        <Routes>
          <Route path="/course/:courseId/:unitId" element={<CourseShell courseManifest={mockCourse} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
    // Check for spinner - it has class animate-spin
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render content when loaded', async () => {
    const mockData = {
      id: 'part1-1',
      title: { ENG: 'Unit 1.1 Content' },
      blocks: [
        { type: 'markdown', content: { ENG: 'Hello World' } }
      ]
    };
    (loader.loadUnit as any).mockResolvedValue(mockData);

    render(
      <MemoryRouter initialEntries={['/course/mooc/part1-1']}>
        <Routes>
          <Route path="/course/:courseId/:unitId" element={<CourseShell courseManifest={mockCourse} />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Unit 1.1 Content')).toBeInTheDocument();
    });
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render all block types', async () => {
    const mockData = {
      id: 'part1-1',
      title: { ENG: 'Full Unit' },
      blocks: [
        { type: 'markdown', content: { ENG: 'Text' } },
        { type: 'quiz', questions: [] },
        { type: 'exercise', exerciseId: 'ex1', title: { ENG: 'Ex 1' } },
        { type: 'interactive-list' },
        { type: 'interactive-fstring' },
        { type: 'interactive-mainguard' },
        { type: 'interactive-sparse-matrix' },
        { type: 'interactive-oop' }
      ]
    };
    (loader.loadUnit as any).mockResolvedValue(mockData);

    render(
      <MemoryRouter initialEntries={['/course/mooc/part1-1']}>
        <Routes>
          <Route path="/course/:courseId/:unitId" element={<CourseShell courseManifest={mockCourse} />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Full Unit')).toBeInTheDocument();
    });
    
    // Check if various visualizers/blocks are rendered (mostly mocked)
    expect(screen.getByText('Ex 1')).toBeInTheDocument();
    expect(screen.getByTestId('python-env')).toBeInTheDocument();
  });

  it('should render markdown with special elements', async () => {
    const mockData = {
      id: 'part1-1',
      title: { ENG: 'Markdown Test' },
      blocks: [
        { type: 'markdown', content: { ENG: `
# H1
## H2
### H3
![Alt text](image.png)
\`\`\`text
Sample output
\`\`\`
<sample-output>Legacy</sample-output>
<text-box name="Box">Content</text-box>
<quiz id="q1"></quiz>
        ` } }
      ]
    };
    (loader.loadUnit as any).mockResolvedValue(mockData);

    render(
      <MemoryRouter initialEntries={['/course/mooc/part1-1']}>
        <Routes>
          <Route path="/course/:courseId/:unitId" element={<CourseShell courseManifest={mockCourse} />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Markdown Test')).toBeInTheDocument();
    });

    expect(screen.getByText('H1')).toBeInTheDocument();
    expect(screen.getByText('H2')).toBeInTheDocument();
    expect(screen.getByText('H3')).toBeInTheDocument();
    expect(screen.getByAltText('Alt text')).toBeInTheDocument();
    expect(screen.getAllByText('Sample output').length).toBeGreaterThan(0);
    expect(screen.getByText('Box')).toBeInTheDocument();
  });

  it('should redirect to first unit if none provided', async () => {
    render(
      <MemoryRouter initialEntries={['/course/mooc']}>
        <Routes>
          <Route path="/course/:courseId" element={<CourseShell courseManifest={mockCourse} />} />
          <Route path="/course/:courseId/:unitId" element={<div>Redirected to Unit</div>} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Redirected to Unit')).toBeInTheDocument();
    });
  });
});
