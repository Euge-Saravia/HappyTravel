import "./detailCard.scss";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const Detail = () => {
  return (
    <div className="detailCard">
      <div className="imageContainer">
        <img
          className="image"
          src="https://cdn.yate.co/img/blog/2023/25/palma-de-mallorca-6kk.jpg"
        />
      </div>

      <div className="detailInfo">
        <div className="titleHeader">
          <h2>Islas Azores</h2>
          <h4>Portugal</h4>
        </div>

        <p>
          Aquí estará la explicación del porque quieres viajar allí y no debe
          pasarse de más de 500 caracteres. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae.
        </p>
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default Detail;
