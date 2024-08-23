import InfoButton from "../buttons/InfoButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

import "./CardTravel.scss";
const CardTravel = () => {
  return (
    <div className="card">
      <img
        src="https://cdn.yate.co/img/blog/2023/25/palma-de-mallorca-6kk.jpg"
        className="photo"
      />
      <InfoButton />
      <div className="infoCard">
        <h4>Isla Azores</h4>
        <h6>Portugal</h6>
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default CardTravel;
