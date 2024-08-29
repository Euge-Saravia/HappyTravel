import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RegisterCard from "../src/components/cards/RegisterCard";
import { describe, it, expect, vi } from "vitest";
import axios from "axios";

vi.mock("axios");

const queryClient = new QueryClient();

describe("RegisterCard Integration Test", () => {
  it("should submit the form and display a success message", async () => {
    axios.post.mockResolvedValueOnce({
      data: { message: "Usuario registrado exitosamente!" },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <RegisterCard />
        </MemoryRouter>
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Escribe tu nombre ..."), {
      target: { value: "maria" },
    });
    fireEvent.change(screen.getByPlaceholderText("Escribe tu e-mail ..."), {
      target: { value: "maria0@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Escribe tu contraseña ..."), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByText("Aceptar"));

    await waitFor(() => {
      expect(
        screen.getByText("Usuario registrado exitosamente!")
      ).toBeInTheDocument();
    });

    const acceptButtons = await screen.findAllByText("Aceptar");
    fireEvent.click(acceptButtons[1]);

    await waitFor(() => {
      expect(
        screen.queryByText("Usuario registrado exitosamente!")
      ).not.toBeInTheDocument();
    });
  });

  it("should show an error if email is already in use", async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        status: 409,
        data: { message: "Correo electrónico ya en uso." },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <RegisterCard />
        </MemoryRouter>
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Escribe tu nombre ..."), {
      target: { value: "maria" },
    });
    fireEvent.change(screen.getByPlaceholderText("Escribe tu e-mail ..."), {
      target: { value: "maria0@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Escribe tu contraseña ..."), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByText("Aceptar"));

    await waitFor(() => {
      expect(
        screen.getByText("Correo electrónico ya en uso.")
      ).toBeInTheDocument();
    });
  });
});
