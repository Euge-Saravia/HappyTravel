import InfoButton from "../buttons/InfoButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

import "./cardTravel.scss";

const CardTravel = ({title, location, img, onDelete, onEdit }) => {
  return (
    <div className="card-container">
        <div  className="card">
          <img
            src={img}
            className="photo"
            alt={title}
          />
          <InfoButton />
          <div className="infoCard">
            <h4>{title}</h4>
            <h6>{location}</h6>
            <EditButton onEdit={onEdit} />
            <DeleteButton onDelete={onDelete} />
          </div>
        </div>
    </div>
  );
};

export default CardTravel;
