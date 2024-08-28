import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";
import "./modal.scss"; // Importa los estilos del modal

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="modal isopen">
      <section className="modal-container">
        {children}
        <div className="buttonsContainer">
          <AcceptButton />
          <CancelButton onCancel={onClose} />
        </div>
      </section>
    </div>
  );
};

export default Modal;
