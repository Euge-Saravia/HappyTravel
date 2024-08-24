import Title from "../components/labels/Title";
import DescriptionTravel from "../components/labels/DescriptionTravel";
import InputFile from "../components/labels/InputFile";
import EnterName from "../components/labels/EnterName";
import Buttons from "../components/buttons/Buttons";

const TravelForm = () => {
  return (
    <div className="container">
      <div className="border-form">
      <Title title={"Crear destino"} className="title" width="99.5%" />
      <div className="content">
        <div className="column">
          <EnterName name="Título" placeholder={"Escribe un título ..."} />
          <p>título requerido</p>
          <EnterName name="Ubicación" placeholder={"Escribe una ubicación ..."}/> 
          <InputFile />
          <Buttons className="buttons"/>
        </div>
        <DescriptionTravel className="description" />
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
