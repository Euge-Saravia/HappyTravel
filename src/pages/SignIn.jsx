import Buttons from "../components/buttons/Buttons";
import EnterName from "../components/labels/EnterName";
import Title from "../components/labels/Title";
import "../pages/form.scss";

const SignIn = () => {
  return (
    <div className="form">
      <Title title="Registro de Usuario"></Title>
      <EnterName name="Nombre" placeholder={"Escribe tu nombre ..."} />
      <p>Nombre requerido</p>
      <EnterName name="E-mail" placeholder={"Escribe tu e-mail ..."} />
      <EnterName name="Contraseña" placeholder={"Escribe tu contraseña ..."} />
      <br />
      <Buttons />
      <h3>¿Ya tienes cuenta? Accede aqui</h3>
    </div>
  );
};

export default SignIn;
