import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../src/context/auth/authContext';
import HomePage from '../src/components/views/HomePage'; 
import { vi } from "vitest"

vi.mock('react-query', async () => {
    const actual = await vi.importActual('react-query');
    return {
      ...actual,
      useQuery: () => ({
        data: null,
        isLoading: false,
        isError: true,
      }),
    };
  });

  const queryClient = new QueryClient();
  
  describe('HomePage Tests', () => {
    const renderWithRouter = (initialEntries) => {
      const testRouter = createMemoryRouter(
        [{ path: '/', element: <HomePage /> }],
        { initialEntries }
      );
      render(
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={testRouter} />
          </QueryClientProvider>
        </AuthProvider>
      );
    };
  
    it('should display an error message if the request fails', async () => {
      renderWithRouter(['/']);
  
      await waitFor(() => {
        expect(screen.getByText(/Error fetching travels data./i)).toBeInTheDocument();
      });
    });
  });