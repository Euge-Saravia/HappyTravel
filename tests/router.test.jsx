import { render, screen,} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from '../src/router/router'; 
import { AuthProvider } from '../src/context/auth/authContext';

const queryClient = new QueryClient();

describe('Router Tests', () => {

  const renderWithRouter = (initialEntries) => {
    const testRouter = createMemoryRouter(router.routes, { initialEntries });
    render(
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={testRouter} />
        </QueryClientProvider>
      </AuthProvider>
    );
  };

  it('should render Home component on root path', () => {
    renderWithRouter(['/']);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument(); 
  });

  it('should render SignIn component on /signin path', () => {
    renderWithRouter(['/signin']);
    expect(screen.getByText(/Registro de Usuario/i)).toBeInTheDocument();
  });

  it('should render LogIn component on /login path', () => {
    renderWithRouter(['/login']);
    expect(screen.getByText(/Acceso de Usuario/i)).toBeInTheDocument(); 
  });

  it('should render TravelForm component on /travel/edit/:id path', () => {
    renderWithRouter(['/travel/edit/1']); 
    expect(screen.getByText(/¿Por qué quieres viajar allí?/i)).toBeInTheDocument(); 
  });

  it('should render TravelForm component on /travel/create path', () => {
    renderWithRouter(['/travel/create']);
    expect(screen.getByText(/Crear destino/i)).toBeInTheDocument(); 
  });

});
