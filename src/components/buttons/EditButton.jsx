import { useNavigate } from "react-router-dom";
import "./buttons.scss";

const EditButton = ({ id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/");
    navigate(`travel/edit/${id}`);
  };

  return (
    <button className="editButton" onClick={handleEdit}>
      <img src="/assets/icons/Edit-icon.svg" alt="Edit" />
    </button>
  );
};
export default EditButton;
