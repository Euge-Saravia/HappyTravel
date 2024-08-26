import "./buttons.scss";
import "../../../styles.scss";

const Buttons = ({ onAccept, onCancel }) => {
  return (
    <div className="buttonsContainer">
      <button className="btn acept" onClick={onAccept}>
        Aceptar
      </button>
      <button className="btn cancel" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
};

export default Buttons;
