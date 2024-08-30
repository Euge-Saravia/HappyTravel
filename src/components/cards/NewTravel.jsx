import Title from "../labels/Title";
import DescriptionTravel from "../labels/DescriptionTravel";
import InputFile from "../labels/InputFile";
import Field from "../labels/Field";
import Buttons from "../buttons/Buttons";
import { API_POST_TRAVEL } from "../../config/url";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import "./travel.scss";
import { useNavigate } from "react-router-dom";
import Modal from "../alert/Modal";
import AcceptButton from "../buttons/AcceptButton";
import { useAuth } from "../../context/auth/authContext";

const NewTravel = () => {
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { token } = useAuth();
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      image: image,
    });
  };

  const mutation = useMutation(
    (newTravelData) => {
      return axios.post(API_POST_TRAVEL, newTravelData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    },
    {
      onSuccess: () => {
        setOpenModal(true);
        queryClient.invalidateQueries("travels");
      },
      onError: (error) => {
        console.error("Error al agregar un nuevo destino: ", error);
      },
    }
  );

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (form.title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "El título es requerido.";
      valid = false;
    }

    if (form.location.trim()) {
      errorsCopy.location = "";
    } else {
      errorsCopy.location = "La locación es requerida.";
      valid = false;
    }

    if (form.description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "La descripción es requerida";
      valid = false;
    }

    if (form.image != null) {
      errorsCopy.image = "";
    } else {
      errorsCopy.image = "La imagen es requerida";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  const handleCancel = () => {
    setForm({ title: "", location: "", description: "", image: null });
  };

  const handleAccept = () => {
    setOpenModal(false);
    navigator("/");
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="border-form">
            <Title title={"Crear destino"} className="title" width="99.5%" />
            <div className="content">
              <div className="column">
                <Field
                  field="Título"
                  name="title"
                  type="text"
                  value={form.name}
                  placeholder={"Escribe un título ..."}
                  onchange={handleChange}
                  error={errors.title}
                />
                <Field
                  field="Ubicación"
                  name="location"
                  type="text"
                  value={form.location}
                  placeholder={"Escribe una ubicación ..."}
                  onchange={handleChange}
                  error={errors.location}
                />
                <InputFile
                  onChange={(imgUrl) => setImage(imgUrl)}
                  error={errors.image}
                />
                <Buttons
                  onAccept={handleSubmit}
                  onCancel={handleCancel}
                  className="buttons"
                />
              </div>
              <DescriptionTravel
                name="description"
                value={form.description}
                onchange={handleChange}
                className="description"
                error={errors.description}
              />
            </div>
          </div>
        </div>
      </form>
      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <h2 className="message">
            Se ha creado un nuevo destino exitosamente!
          </h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleAccept} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewTravel;
