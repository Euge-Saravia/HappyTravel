import { useNavigate } from "react-router-dom";
import "./buttons.scss";

const InfoButton = ({ id }) => {
  const navigate = useNavigate();
  const handleInfo = () => {
    navigate(`travel/details/${id}`);
  };

  return (
    <button className="infoButton" onClick={handleInfo}>
      <img src="/assets/icons/Info-icon.svg" />
    </button>
  );
};
export default InfoButton;
