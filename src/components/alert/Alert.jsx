import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Buttons from "../buttons/Buttons";
import "./alert.scss";
import PropTypes from "prop-types";

const MySwal = withReactContent(Swal);

const Alert = ({ title }) => {
  const handleClick = () => {
    MySwal.fire({
      title: title,
      showCancelButton: false, // se ocultan los botones predeterminados del alert
      showConfirmButton: false, // se ocultan los botones predeterminados del alert
      html: (
        <div className="buttonsWrapper">
          {/* Aca tambien el handleClick aplicado al componente Buttons es provisorio */}
          <Buttons onClick={() => handleConfirm()} />
        </div>
      ),
      customClass: {
        popup: "custom-alert",
        title: "custom-title",
      },
    });
  };

  //Esta lógica es para poder salir del alert
  const handleConfirm = () => {
    MySwal.fire("¡Aceptado!", "Has aceptado la acción.", "success");
  };

  return (
    <div>
      {/* PROVISORIO, ES PARA PODER VER EL ALERT - HAY QUE ARMAR LA LOGICA DEFINITIVA CUANDO LO USEMOS */}
      <button onClick={handleClick}>Mostrar Alerta</button>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
};

export default Alert;
