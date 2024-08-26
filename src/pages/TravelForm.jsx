import Title from "../components/labels/Title";
import DescriptionTravel from "../components/labels/DescriptionTravel";
import InputFile from "../components/labels/InputFile";
import Field from "../components/labels/Field";
import Buttons from "../components/buttons/Buttons";

const TravelForm = () => {
  return (
    <div className="container">
      <div className="border-form">
        <Title title={"Crear destino"} className="title" width="99.5%" />
        <div className="content">
          <div className="column">
            <Field field="Título" placeholder={"Escribe un título ..."} />
            <p>título requerido</p>
            <Field
              field="Ubicación"
              placeholder={"Escribe una ubicación ..."}
            />
            <InputFile />
            <Buttons className="buttons" />
          </div>
          <DescriptionTravel className="description" />
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
