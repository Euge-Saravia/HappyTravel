import Title from "../components/labels/Title";
import DescriptionTravel from "../components/labels/DescriptionTravel";
import InputFile from "../components/labels/InputFile";

const TravelForm = () => {
  return (
    <div>
      <Title title={"Crear destino"} />
      <InputFile />
      <DescriptionTravel />
    </div>
  );
};

export default TravelForm;
