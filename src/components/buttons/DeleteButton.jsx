import "./buttons.scss";
import Modal from "../alert/Modal";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";
import { useState } from "react";

const DeleteButton = ({onDelete}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirmdelete = () => {
    onDelete();
    setIsOpen(false);
  }
  return (
    <>
      <button className="deleteButton" onClick={() => setIsOpen(true)}>
        <img src="/assets/icons/Delete-icon.svg" />
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="message">¿Quieres eliminar este destino?</h2>
        <div className="buttonsContainer">
          <AcceptButton onAccept={handleConfirmdelete} />
          <CancelButton onCancel={() => setIsOpen(false)} />
        </div>
      </Modal>
    </>
  );
};

export default DeleteButton;

/* const [show, setShow] = useState(false); */
/* const showModal = () => {setShow(true);}; */
/* const hideModal = () => {setShow(false);}; */
/*  */
