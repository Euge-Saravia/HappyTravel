import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import TravelDetails from '../src/pages/TravelDetails';
import axios from 'axios';
import { vi } from 'vitest';

// Configura el cliente de react-query
const queryClient = new QueryClient();

// Mock de axios
vi.mock('axios');
const mockedAxios = axios;

describe('Router Tests', () => {
  const renderWithRouter = (initialEntries) => {
    const testRouter = createMemoryRouter([
      {
        path: '/travel/details/:id',
        element: <TravelDetails />,
      },
    ], {
      initialEntries,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={testRouter} />
      </QueryClientProvider>
    );
  };

  beforeEach(() => {
    // Simula la respuesta de la API para el ID 1
    mockedAxios.get.mockResolvedValue({
      data: {
        id: '1',
        title: 'Islas Azores',
        location: 'Localización Ejemplo',
        description: 'Descripción del viaje.',
        image: '/path/to/image.jpg',
      },
    });
  });

  it('should render TravelDetails component on /travel/details/:id path', async () => {
    renderWithRouter(['/travel/details/1']);

    // Espera a que el contenido esperado esté en el documento
    await waitFor(() => {
      expect(screen.getByText(/Islas Azores/i)).toBeInTheDocument();
      expect(screen.getByText(/Localización Ejemplo/i)).toBeInTheDocument();
      expect(screen.getByText(/Descripción del viaje./i)).toBeInTheDocument();
    });
  });
});
