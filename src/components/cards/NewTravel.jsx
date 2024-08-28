import Title from "../labels/Title";
import DescriptionTravel from "../labels/DescriptionTravel";
import InputFile from "../labels/InputFile";
import Field from "../labels/Field";
import AcceptButton from "../buttons/AcceptButton";
import CancelButton from "../buttons/CancelButton";
import "./travel.scss";

const NewTravel = () => {
  return (
    <div className="form newTravel">
      <Title title={"Crear destino"} width="88%" />
      <div className="content">
        <div className="column">
          <Field field="Título" placeholder={"Escribe un título ..."} />
          <p>Título requerido</p>
          <Field field="Ubicación" placeholder={"Escribe una ubicación ..."} />
          <InputFile />
          <div className="buttonsContainer" />
          <AcceptButton />
          <CancelButton />
        </div>
      </div>
      <DescriptionTravel className="description" />
    </div>
  );
};

export default NewTravel;
