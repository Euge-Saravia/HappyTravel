// Modal.test.jsx
import { render, screen } from "@testing-library/react";
import Modal from "../src/components/alert/Modal.jsx";

// Test: renderiza el Modal cuando 'open' es verdadero
test("should render modal when open is true", () => {
  render(
    <Modal open={true}>
      <div>Modal Content</div>
    </Modal>
  );

  // Verifica que el contenido del modal esté presente en el documento
  expect(screen.getByText("Modal Content")).toBeInTheDocument();
});

// Test: no renderiza el Modal cuando 'open' es falso
test("should not render modal when open is false", () => {
  render(
    <Modal open={false}>
      <div>Modal Content</div>
    </Modal>
  );

  // Verifica que el contenido del modal NO esté presente en el documento
  expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
});
