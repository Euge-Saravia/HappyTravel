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

const EditTravel = () => {
  const userId = localStorage.getItem("token");
  const [image, setImage] = useState("");

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      image: image,
    });
  };

  const url = API_POST_TRAVEL(userId);
  const mutation = useMutation((editTravelData) => {
    return axios.post(url, editTravelData);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.location && form.description) {
      mutation.mutate(form);
      alert("El destino se cargo correctamente");
    } else {
      console.log("Por favor complete todos los campos requeridos.");
    }
  };

  const handleCancel = () => {
    setForm({ title: "", location: "", description: "", image: null });
  };

  return (
    <>
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
                  value={form.name}
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
      </form>
    </>
  );
};

export default EditTravel;
