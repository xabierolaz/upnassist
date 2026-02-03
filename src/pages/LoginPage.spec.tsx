import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import LoginPage from './LoginPage';
import { MemoryRouter } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

// Mock authStore
vi.mock('../stores/authStore', () => ({
  useAuthStore: vi.fn(),
}));

describe('LoginPage Component', () => {
  const mockLogin = vi.fn();
  const mockRegister = vi.fn();
  const mockClearError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useAuthStore as any).mockReturnValue({
      login: mockLogin,
      register: mockRegister,
      clearError: mockClearError,
      isAuthenticated: false,
      error: null,
    });
  });

  it('should render login form by default', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/correo institucional/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
  });

  it('should switch to registration form', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/no tengo cuenta/i));
    expect(screen.getByRole('button', { name: /registrarse y entrar/i })).toBeInTheDocument();
    expect(screen.getByText(/ya tengo cuenta/i)).toBeInTheDocument();
  });

  it('should call login on submit', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/correo institucional/i), { target: { value: 'test@e.unavarra.es' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'password123' } });
    fireEvent.submit(screen.getByRole('button', { name: /iniciar sesión/i }));

    expect(mockLogin).toHaveBeenCalledWith('test@e.unavarra.es', 'password123');
  });

  it('should call register on submit when in registering mode', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/no tengo cuenta/i));
    fireEvent.change(screen.getByLabelText(/correo institucional/i), { target: { value: 'new@e.unavarra.es' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'newpassword' } });
    fireEvent.submit(screen.getByRole('button', { name: /registrarse y entrar/i }));

    expect(mockRegister).toHaveBeenCalledWith('new@e.unavarra.es', 'newpassword');
  });

  it('should display error message if present', () => {
    (useAuthStore as any).mockReturnValue({
      login: mockLogin,
      register: mockRegister,
      clearError: mockClearError,
      isAuthenticated: false,
      error: 'Invalid credentials',
    });

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('should redirect to home if already authenticated', () => {
    (useAuthStore as any).mockReturnValue({
      isAuthenticated: true,
    });

    render(
      <MemoryRouter initialEntries={['/login']}>
        <LoginPage />
      </MemoryRouter>
    );

    // In a real app it would navigate, here we can check if it rendered nothing or Navigate was called
    // Since Navigate is a component that returns null and does a side effect, 
    // we can check if the form is NOT there.
    expect(screen.queryByLabelText(/correo institucional/i)).not.toBeInTheDocument();
  });
});
