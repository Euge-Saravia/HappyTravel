import Title from "../components/labels/Title";
import DescriptionTravel from "../components/descriptionTravel/DescriptionTravel";
import EnterName from "../components/enterName/EnterName";
import InputFile from "../components/inputFile/InputFile";

const TravelForm = () => {
  return (
    <div>
      <Title title={"Crear destino"} />
      <EnterName />
      <InputFile />
      <DescriptionTravel />
    </div>
  );
};

export default TravelForm;
