import "./buttons.scss";
import "../../../styles.scss";
import { Link } from "react-router-dom";

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
