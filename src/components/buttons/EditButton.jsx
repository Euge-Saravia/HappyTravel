import "./buttons.scss";
import Modal from "../alert/Modal";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";
import { useState } from "react";

const EditButton = ({ onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmedit = () => {
    onEdit();
    setIsOpen(false);
  }
    return (
      <>
        <button className="editButton" onClick={() => setIsOpen(true)}>
          <img src="/assets/icons/Edit-icon.svg" />
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="message">¿Quieres editar este destino?</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleConfirmedit} />
            <CancelButton onCancel={() => setIsOpen(false)} />
          </div>
        </Modal>
      </>
    );
  };
  export default EditButton;
