import Buttons from "../components/buttons/Buttons";
import EnterName from "../components/labels/EnterName";
import Title from "../components/labels/Title";
import "../pages/form.scss";

const LogIn = () => {
  return (
    <div className="form oldUser">
      <Title title="Acceso de Usuario"></Title>
      <EnterName name="E-mail" placeholder={"Escribe tu e-mail ..."} />
      <p>Debes escribir un e-mail</p>
      <EnterName name="Contraseña" placeholder={"Escribe tu contraseña ..."} />
      <br />
      <Buttons />
    </div>
  );
};

export default LogIn;
