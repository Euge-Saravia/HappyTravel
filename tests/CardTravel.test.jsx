import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para las aserciones adicionales
import { describe, it, expect, vi } from 'vitest';
import CardTravel from '../src/components/cards/CardTravel';


// Mock de los botones
vi.mock('../src/components/buttons/InfoButton', () => ({
  default: () => <button>Info</button>,
}));

vi.mock('../src/components/buttons/EditButton', () => ({
  default: ({ onEdit }) => <button onClick={onEdit}>Edit</button>,
}));

vi.mock('../src/components/buttons/DeleteButton', () => ({
  default: ({ onDelete }) => <button onClick={onDelete}>Delete</button>,
}));

describe('CardTravel Component', () => {
  it('should render the card with an image, title, and location', () => {
    const img = '/path/to/image.jpg';
    const title = 'Travel Title';
    const location = 'Travel Location';

    render(
      <CardTravel
        title={title}
        location={location}
        img={img}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    // Verifica que la imagen se renderiza con el alt correcto
    expect(screen.getByAltText(title)).toBeInTheDocument();

    // Verifica que el título y la ubicación se renderizan
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
  });

  it('should call onEdit when EditButton is clicked', () => {
    const onEdit = vi.fn(); // Mock de la función onEdit

    render(
      <CardTravel
        title="Title"
        location="Location"
        img="/path/to/image.jpg"
        onDelete={() => {}}
        onEdit={onEdit}
      />
    );

    // Simula el clic en el botón de edición
    fireEvent.click(screen.getByText('Edit'));

    // Verifica que la función onEdit haya sido llamada
    expect(onEdit).toHaveBeenCalled();
  });

  it('should call onDelete when DeleteButton is clicked', () => {
    const onDelete = vi.fn(); // Mock de la función onDelete

    render(
      <CardTravel
        title="Title"
        location="Location"
        img="/path/to/image.jpg"
        onDelete={onDelete}
        onEdit={() => {}}
      />
    );

    // Simula el clic en el botón de eliminación
    fireEvent.click(screen.getByText('Delete'));

    // Verifica que la función onDelete haya sido llamada
    expect(onDelete).toHaveBeenCalled();
  });
});
