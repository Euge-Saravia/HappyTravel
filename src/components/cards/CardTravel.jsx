import InfoButton from "../buttons/InfoButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

import "./cardTravel.scss";

const CardTravel = ({
  title,
  location,
  img,
  onDelete,
  onEdit,
  id,
  showButtons,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} className="photo" alt={title} />
        {showButtons && <InfoButton id={id} />}
        <div className="infoCard">
          <h4>{title}</h4>
          <h6>{location}</h6>
          {showButtons && <EditButton id={id} />}
          {showButtons && <DeleteButton onDelete={onDelete} />}
        </div>
      </div>
    </div>
  );
};

export default CardTravel;
