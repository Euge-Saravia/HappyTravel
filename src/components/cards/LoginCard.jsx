import Title from "../labels/Title";
import Field from "../labels/Field";
import Buttons from "../buttons/Buttons";
import { useState } from "react";
import { API_POST_LOG_USER } from "../../config/url";
import "./registerCard.scss";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginCard.scss";
import { useAuth } from "../../context/auth/authContext";

const LoginCard = () => {
  const navigator = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const mutation = useMutation((data) => axios.post(API_POST_LOG_USER, data), {
    onSuccess: (response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      navigator("/");
    },
    onError: (error) => {
      console.error("Error al iniciar sesión:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  const handleCancel = () => {
    setForm({ email: "", password: "" });
    navigator("/");
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "El correo eletrónico es requerido";
      valid = false;
    }

    if (form.password.trim()) {
      errorsCopy.password = "";
    } else {
      errorsCopy.password = "La contraseña es requerida";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };
  const axiosErrorResponse = mutation.error?.response;

  return (
    <form className="form">
      <Title title="Acceso de Usuario"></Title>
      <Field
        field="E-mail"
        type="email"
        placeholder={"Escribe tu e-mail ..."}
        name="email"
        value={form.email}
        onchange={handleChange}
        error={errors.email}
      />
      <Field
        field="Contraseña"
        type="password"
        placeholder={"Escribe tu contraseña ..."}
        name="password"
        value={form.password}
        onchange={handleChange}
        error={errors.password}
      />
      <br />
      <Buttons onAccept={handleLogin} onCancel={handleCancel} />
      {axiosErrorResponse?.status === 401 && (
        <p className="invalidInputText">Contraseña incorrecta.</p>
      )}
      {axiosErrorResponse?.status === 404 && (
        <p className="invalidInputText">
          La dirección de correo electrónico no esta registrada.
        </p>
      )}
    </form>
  );
};

export default LoginCard;
