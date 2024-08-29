import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../src/components/navbar/Navbar';
import { useAuth } from '../src/context/auth/authContext';
import { MemoryRouter } from 'react-router-dom';

// Mock del hook useAuth
vi.mock('../src/context/auth/authContext', () => ({
  useAuth: vi.fn(),
}));

describe('Navbar Component', () => {
  it('should render logo and search bar', () => {
    // Configura el mock para que el usuario no esté autenticado
    useAuth.mockReturnValue({ isAuthenticated: false });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que la imagen del logo esté en el documento
    expect(screen.getByAltText('logo')).toBeInTheDocument();

    // Verifica que el componente de búsqueda esté en el documento
    expect(screen.getByRole('textbox')).toBeInTheDocument(); // Asumiendo que Search renderiza un <input> o similar
  });

  it('should render all buttons when user is authenticated', () => {
    // Configura el mock para que el usuario esté autenticado
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que los botones se rendericen
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create icon/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout icon/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /avatar/i })).not.toBeInTheDocument();
  });

  it('should render SignInButton when user is not authenticated', () => {
    // Configura el mock para que el usuario no esté autenticado
    useAuth.mockReturnValue({ isAuthenticated: false });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que el botón de inicio de sesión esté presente
    expect(screen.getByRole('button', { name: /avatar/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /create icon/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /logout icon/i })).not.toBeInTheDocument();
  });
});
