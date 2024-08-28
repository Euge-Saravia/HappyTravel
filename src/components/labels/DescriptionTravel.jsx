import "./descriptionTravel.scss";

const DescriptionTravel = ({ name, value, onchange }) => {
  return (
    <div className="description-container">
      <label htmlFor="DescriptionTravel">¿Por qué quieres viajar allí? </label>
      <textarea
        maxLength={500}
        type="text"
        value={value}
        onChange={onchange}
        name={name}
        className="description inner-shadow-top"
      />
    </div>
  );
};

export default DescriptionTravel;
