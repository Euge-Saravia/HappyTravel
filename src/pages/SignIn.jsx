import { useState } from "react";
import useApi from "../service/useApi.js";
import { API_POST_USER } from "../config/url";
import Buttons from "../components/buttons/Buttons";
import Field from "../components/labels/Field";
import Title from "../components/labels/Title";
import "../pages/form.scss";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await useApi(API_POST_USER, "POST", form);

      if (response.ok) {
        console.log("Usuario registrado con éxito");
      } else {
        console.log("Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleCancel = () => {
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title title="Registro de Usuario"></Title>
      <Field
        field="Nombre"
        type="text"
        placeholder={"Escribe tu nombre ..."}
        name="name"
        value={form.name}
        onchange={handleChange}
      />
      <p>Nombre requerido</p>
      <Field
        field="E-mail"
        type="email"
        placeholder={"Escribe tu e-mail ..."}
        name="email"
        value={form.email}
        onchange={handleChange}
      />
      <Field
        field="Contraseña"
        type="password"
        placeholder={"Escribe tu contraseña ..."}
        name="password"
        value={form.password}
        onchange={handleChange}
      />
      <br />
      <Buttons onAccept={handleSubmit} onCancel={handleCancel} />
      <h3>¿Ya tienes cuenta? Accede aqui</h3>
    </form>
  );
};

export default SignIn;
