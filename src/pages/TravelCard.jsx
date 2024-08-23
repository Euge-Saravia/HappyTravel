import DescriptionTravel from "../components/descriptionTravel/DescriptionTravel";
import EnterName from "../components/enterName/EnterName";
import InputFile from "../components/inputFile/InputFile";

const TravelCard = () => {
  return (
    <div>
      <EnterName />
      <InputFile/>
      <DescriptionTravel />
      <p>TravelCard</p>
    </div>
  );
};

export default TravelCard;
