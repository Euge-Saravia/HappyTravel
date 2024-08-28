import "./buttons.scss";
import "../../../styles.scss";
import { Link } from "react-router-dom";

const CancelButton = ({ onCancel }) => {
  return (
    <div className="buttonsContainer">
      <Link to="/">
        <button className="btn cancel" onClick={onCancel}>
          Cancelar
        </button>
      </Link>
    </div>
  );
};

export default CancelButton;
