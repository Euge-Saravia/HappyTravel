import "./modal.scss"; // Importa los estilos del modal

const Modal = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="modal isopen">
      <section className="modal-container">
        {children}
      </section>
    </div>
  );
};

export default Modal;
