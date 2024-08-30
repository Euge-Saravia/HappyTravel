import "./field.scss";

const Field = ({ field, name, placeholder, value, onchange, type, error }) => {
  return (
    <div className="name-container">
      <label htmlFor="Name">{field}</label>
      <input
        type={type}
        name={name}
        className="name inner-shadow-top"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
      {error && <p className="invalidInputText">{error}</p>}
    </div>
  );
};

export default Field;
