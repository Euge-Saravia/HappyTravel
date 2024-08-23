import Title from "../components/labels/Title";
import DescriptionTravel from "../components/labels/DescriptionTravel";
import EnterName from "../components/labels/EnterName";
import InputFile from "../components/labels/InputFile";

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
