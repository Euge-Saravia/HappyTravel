import "./descriptionTravel.scss";

const DescriptionTravel = ({ name, value, onchange, error }) => {
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
      {error && <p className="invalidInputText">{error}</p>}
    </div>
  );
};

export default DescriptionTravel;
