import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AdminDashboard } from './AdminDashboard';
import { getDocs } from 'firebase/firestore';

// Mock firebase/firestore
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  query: vi.fn(),
  orderBy: vi.fn(),
  getDocs: vi.fn(),
  Timestamp: {
    now: () => ({ toDate: () => new Date() })
  }
}));

vi.mock('../core/firebase', () => ({
  db: {}
}));

describe('AdminDashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state', () => {
    (getDocs as any).mockReturnValue(new Promise(() => {}));
    render(<AdminDashboard />);
    expect(screen.getByText(/Consultando registros/i)).toBeInTheDocument();
  });

  it('should render error state', async () => {
    (getDocs as any).mockRejectedValue(new Error('Firestore error'));
    render(<AdminDashboard />);
    await waitFor(() => {
      expect(screen.getByText(/Error: Firestore error/i)).toBeInTheDocument();
    });
  });

  it('should render stats when loaded', async () => {
    const mockLogs = [
      {
        data: () => ({
          email: 'student@e.unavarra.es',
          timestamp: { toDate: () => new Date('2026-02-01T10:00:00Z') },
          type: 'login'
        })
      }
    ];
    (getDocs as any).mockResolvedValue({
      forEach: (cb: any) => mockLogs.forEach(cb)
    });

    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.getByText('student')).toBeInTheDocument();
    });
    expect(screen.getByText('student@e.unavarra.es')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument(); // loginCount
  });

  it('should handle empty logs', async () => {
    (getDocs as any).mockResolvedValue({
      forEach: (cb: any) => {}
    });

    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.getByText(/No hay registros/i)).toBeInTheDocument();
    });
  });

  it('should refresh logs when clicking the button', async () => {
    (getDocs as any).mockResolvedValue({
      forEach: (cb: any) => {}
    });

    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.getByText(/Refrescar/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Refrescar/i));
    expect(getDocs).toHaveBeenCalledTimes(2);
  });
});
