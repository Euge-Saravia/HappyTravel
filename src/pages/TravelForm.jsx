import Title from "../components/labels/Title";
import DescriptionTravel from "../components/labels/DescriptionTravel";
import InputFile from "../components/labels/InputFile";
import Field from "../components/labels/Field";
import Buttons from "../components/buttons/Buttons";
/* import AcceptButton from "../components/buttons/AcceptButton"; */
/* import CancelButton from "../components/buttons/CancelButton"; */
import "./form.scss"

const TravelForm = () => {
  return (
    < div className="form newTravel">
        <Title title={"Crear destino"} width="88%" />
        <div className="content">
          <div className="column">
            <Field field="Título" placeholder={"Escribe un título ..."} />
            <p>Título requerido</p>
            <Field
              field="Ubicación"
              placeholder={"Escribe una ubicación ..."}
            />
            <InputFile />
            <Buttons className="buttonsContainer"/>
          </div>
          <DescriptionTravel className="description" />
        </div>
    </div>
  );
};

export default TravelForm;
