import { render, screen } from "@testing-library/react";
import Modal from "../src/components/alert/Modal.jsx";

test("should render modal when open is true", () => {
  render(
    <Modal open={true}>
      <div>Modal Content</div>
    </Modal>
  );

  expect(screen.getByText("Modal Content")).toBeInTheDocument();
});

test("should not render modal when open is false", () => {
  render(
    <Modal open={false}>
      <div>Modal Content</div>
    </Modal>
  );

  expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
});
