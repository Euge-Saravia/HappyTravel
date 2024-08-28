import "./buttons.scss";

const EditButton = ({onEdit}) => {
  return (
    <button className="editButton" onClick={onEdit}>
      <img src="/assets/icons/Edit-icon.svg" alt="Edit"/>
    </button>
  );
};
export default EditButton;
