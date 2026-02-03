import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InteractiveListVisualizer } from './InteractiveListVisualizer';

// Mock del store
vi.mock('../../store/languageStore', () => ({
  useLanguageStore: () => ({
    currentLang: 'ENG',
    t: {
        visualizers: {
            list: {
                title: 'List Visualizer',
                instruction: 'Hover to see changes',
                method: 'Method',
                usage: 'Usage',
                description: 'Description'
            }
        }
    }
  })
}));

// Mock VisualizerCard to avoid complexity
vi.mock('./VisualizerCard', () => ({
    default: ({ children, title }: any) => (
        <div data-testid="viz-card">
            <h1>{title}</h1>
            {children}
        </div>
    )
}));

describe('InteractiveListVisualizer Component', () => {
    it('should render the list visualizer', () => {
        render(<InteractiveListVisualizer />);
        
        expect(screen.getByText('List Visualizer')).toBeInTheDocument();
        expect(screen.getByText('a_list =')).toBeInTheDocument();
        // Base list is [3, 1, 4, 1, 5]
        expect(screen.getAllByText('1').length).toBeGreaterThan(0);
        expect(screen.getAllByText('3').length).toBeGreaterThan(0);
        expect(screen.getAllByText('5').length).toBeGreaterThan(0);
    });

    it('should render the methods table', () => {
        render(<InteractiveListVisualizer />);
        
        expect(screen.getByText('Method')).toBeInTheDocument();
        expect(screen.getByText('Usage')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        
        // Check for specific methods
        expect(screen.getByText('append')).toBeInTheDocument();
        expect(screen.getByText('pop')).toBeInTheDocument();
        expect(screen.getByText('sort')).toBeInTheDocument();
    });

    it('should update visualization on hover', async () => {
        render(<InteractiveListVisualizer />);
        
        // Find the row for 'append'
        const appendRow = screen.getByText('append').closest('tr');
        expect(appendRow).toBeInTheDocument();

        // Hover over append
        fireEvent.mouseEnter(appendRow!);

        // Expect to see the new value '9' (logic from METHODS)
        await waitFor(() => {
            expect(screen.getByText('9')).toBeInTheDocument();
        });

        // Mouse leave
        fireEvent.mouseLeave(appendRow!);
        
        // Expect '9' to be gone (reset to base list)
        await waitFor(() => {
            expect(screen.queryByText('9')).not.toBeInTheDocument();
        });
    });

    it('should show return value bubble for pop', async () => {
        render(<InteractiveListVisualizer />);
        
        // Find pop() row (returns 5)
        const popRow = screen.getByText('a_list.pop()').closest('tr');
        fireEvent.mouseEnter(popRow!);

        await waitFor(() => {
            expect(screen.getByText(/Return: 5/)).toBeInTheDocument();
        });
    });
});
