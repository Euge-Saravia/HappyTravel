import "./entername.scss";

const EnterName = ({name, placeholder}) => {
  return (
    <div className="name-container">
      <label  htmlFor="Name">{name}</label>
      <input
        type="text"
        name={name}
        className="name inner-shadow-top"
        placeholder={placeholder}
      />
    </div>
  );
};

export default EnterName;
