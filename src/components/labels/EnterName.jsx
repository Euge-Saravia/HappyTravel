import "./entername.scss";

const EnterName = () => {
  return (
    <div className="name-container ">
      <label  htmlFor="Name">Nombre </label>
      <input
        type="text"
        name="Name"
        className="name inner-shadow-top"
        placeholder="Escribe tu nombre ..."
      />
    </div>
  );
};

export default EnterName;
