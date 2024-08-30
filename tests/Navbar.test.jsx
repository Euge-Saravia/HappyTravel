import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Navbar from "../src/components/navbar/Navbar";
import { useAuth } from "../src/context/auth/authContext";
import { MemoryRouter } from "react-router-dom";

vi.mock("../src/context/auth/authContext", () => ({
  useAuth: vi.fn(),
}));

describe("Navbar Component", () => {
  it("should render logo and search bar", () => {
    useAuth.mockReturnValue({ userId: null });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render all buttons when user is authenticated", () => {
    useAuth.mockReturnValue({ userId: "someUserId" });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create icon/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout icon/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /avatar/i })).not.toBeInTheDocument();
  });

  it("should render SignInButton when user is not authenticated", () => {
    useAuth.mockReturnValue({ userId: null });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /avatar/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /create icon/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /logout icon/i })).not.toBeInTheDocument();
  });
});
