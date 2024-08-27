import "./buttons.scss";
import Alert from "../alert/Alert";
import { useState } from "react";

const DeleteButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAccept = () => {
    console.log("elimnado");
    //usar la api para enviarlo
    //se hace la logica que se quiere hacer cuando se clicke en aceptar
    setShowAlert(false); 

    const handleAccept = async () => {
      try {
        const response = await axios.delete(`/api/travels/${travelId}`);

        if(response.status === 204) {
          MySwal.fire('Eliminado', 'El viaje ha sido eliminado.', 'success');
          onAccept();
        } else {
          MySwal.fire('Error', 'No se pudo eliminar el viaje.', 'error');
        } 
      } catch (error) {
        // Maneja errores de red o respuestas no exitosas
        const errorMessage = error.response?.data?.message || 'Hubo un problema al intentar eliminar el viaje.';
        MySwal.fire('Error', errorMessage, 'error');
      }
    };
  };

  const handleCancel = () => {
    console.log("cancelado");
    //se hace la logica que se quiere hacer cuando se clicke en cancelar
    setShowAlert(false); 
  };

  return (
    <div>
      <button className="deleteButton" onClick={() => setShowAlert(true)}>
        <img src="/assets/icons/Delete-icon.svg" alt="Delete" />
      </button>
      {showAlert && (
        <Alert
          title="¿Quieres eliminar este destino?"
/*           onAccept={handleAccept} 
          onCancel={handleCancel} */
        />
      )}
    </div>
  );
};
export default DeleteButton;
