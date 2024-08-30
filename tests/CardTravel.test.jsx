import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CardTravel from "../src/components/cards/CardTravel";

vi.mock("../src/components/buttons/InfoButton", () => ({
  __esModule: true,
  default: (props) => (
    <button onClick={() => props.onClick()}>{props.id}</button>
  ),
}));

vi.mock("../src/components/buttons/EditButton", () => ({
  __esModule: true,
  default: (props) => <button onClick={props.onEdit}>Edit</button>,
}));

vi.mock("../src/components/buttons/DeleteButton", () => ({
  __esModule: true,
  default: (props) => <button onClick={props.onDelete}>Delete</button>,
}));

describe("CardTravel Component", () => {
  const defaultProps = {
    title: "Test Title",
    location: "Test Location",
    img: "https://via.placeholder.com/150",
    onDelete: vi.fn(),
    onEdit: vi.fn(),
    id: "1",
    showButtons: true,
  };

  const renderComponent = (props = {}) => {
    return render(
      <MemoryRouter>
        <CardTravel {...{ ...defaultProps, ...props }} />
      </MemoryRouter>
    );
  };

  it("should render the card with title, location, and image", () => {
    renderComponent();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Location")).toBeInTheDocument();
    expect(screen.getByAltText("Test Title")).toBeInTheDocument();
  });

  it("should render buttons when showButtons is true", () => {
    renderComponent();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("should not render buttons when showButtons is false", () => {
    renderComponent({ showButtons: false });
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });

  it("should call onDelete when DeleteButton is clicked", () => {
    renderComponent();
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(defaultProps.onDelete).toHaveBeenCalledTimes(1);
  });
});
