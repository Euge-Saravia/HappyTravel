import Title from "../labels/Title";
import DescriptionTravel from "../labels/DescriptionTravel";
import InputFile from "../labels/InputFile";
import Field from "../labels/Field";
import Buttons from "../buttons/Buttons";
import { API_GET_TRAVEL, API_PUT_TRAVEL } from "../../config/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import "./travel.scss";
import { useAuth } from "../../context/auth/authContext";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../alert/Modal";
import AcceptButton from "../buttons/AcceptButton";

const fetchTravel = async (token, id) => {
  const { data } = await axios.get(API_GET_TRAVEL(id), {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const EditTravel = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading, isError } = useQuery(["travel", id], () =>
    fetchTravel(token, id)
  );
  const [image, setImage] = useState("");
  const navigator = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (data) {
      setForm({
        title: data?.title || "",
        location: data?.location || "",
        description: data?.description || "",
        image: data?.image || "",
      });
      setImage(data.image || ""); // Opcionalmente, también actualiza el estado de la imagen
    }
  }, [data]);

  console.log(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      image: image,
    });
  };

  const mutation = useMutation(
    (form) => {
      return axios.put(API_PUT_TRAVEL(id), form, {
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
        console.error("Error al editar un destino: ", error);
      },
    }
  );

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
    navigator("/travel/details/" + id);
  };

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

  return (
    <form>
      <div className="container">
        <div className="border-form">
          <Title title={"Editar destino"} className="title" width="99.5%" />
          <div className="content">
            <div className="column">
              <Field
                field="Título"
                name="title"
                type="text"
                value={form.title}
                placeholder={"Escribe un título ..."}
                onchange={handleChange}
              />
              <p>título requerido</p>
              <Field
                field="Ubicación"
                name="location"
                type="text"
                value={form.location}
                placeholder={"Escribe una ubicación ..."}
                onchange={handleChange}
              />
              <InputFile onChange={(imgUrl) => setImage(imgUrl)} />
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
            />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <h2 className="message">Se ha editado el destino exitosamente!</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleAccept} />
          </div>
        </Modal>
      )}
    </form>
  );
};
export default EditTravel;
