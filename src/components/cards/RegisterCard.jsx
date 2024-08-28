import { useState } from "react";
import { API_POST_USER } from "../../config/url";
import Buttons from "../../components/buttons/Buttons";
import Field from "../../components/labels/Field";
import Title from "../../components/labels/Title";
import "./registerCard.scss";
import { useMutation } from "react-query";
import axios from "axios";
import Modal from "../alert/Modal";
import AcceptButton from "../buttons/AcceptButton";
import { Link, useNavigate } from "react-router-dom";

const RegisterCard = () => {
  const navigator = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const mutation = useMutation((data) => {
    return axios.post(API_POST_USER, data);
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
    if (validateForm()) {
      mutation.mutate(form);
      if (mutation.isSuccess) {
        setOpenModal(true);
      }
    }
  };

  const handleCancel = () => {
    setForm({ name: "", email: "", password: "" });
    navigator("/");
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "El nombre es requerido";
      valid = false;
    }

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
      <Title title="Registro de Usuario"></Title>
      <Field
        field="Nombre"
        type="text"
        placeholder={"Escribe tu nombre ..."}
        name="name"
        value={form.name}
        onchange={handleChange}
        error={errors.name}
      />
      <Field
        field="E-mail"
        type="email"
        required={true}
        placeholder={"Escribe tu e-mail ..."}
        name="email"
        value={form.email}
        onchange={handleChange}
        error={errors.email}
      />
      <Field
        field="Contraseña"
        type="password"
        required={true}
        placeholder={"Escribe tu contraseña ..."}
        name="password"
        value={form.password}
        onchange={handleChange}
        error={errors.password}
      />
      <br />
      <Buttons onAccept={handleSubmit} onCancel={handleCancel} />
      <h3 className="logInText">
        ¿Ya tienes cuenta? Accede &nbsp;
        <span>
          <Link to={"/login"}>aquí</Link>
        </span>
      </h3>
      {axiosErrorResponse?.status === 409 && (
        <p className="invalidInputText">Correo electrónico ya en uso.</p>
      )}
      {mutation.isSuccess ? (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <h2 className="message">Usuario registrado exitosamente!</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={() => setOpenModal(false)} />
          </div>
        </Modal>
      ) : null}
    </form>
  );
};
export default RegisterCard;
