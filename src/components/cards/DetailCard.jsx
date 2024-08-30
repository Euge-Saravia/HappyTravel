import "./detailCard.scss";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import { useMutation } from "react-query";
import { API_GET_TRAVEL } from "../../config/url";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/auth/authContext";

const DetailCard = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();
  const { id } = useParams();
  const mutation = useMutation(
    () =>
      axios.get(API_GET_TRAVEL(id), {
        headers: { Authorization: "Bearer " + token },
      }),
    {
      onSuccess: (response) => {
        setData(response?.data);
      },
      onError: (error) => {
        console.error("Error al obtener el destino", error);
      },
    }
  );

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <div className="detailCard">
      <div className="imageContainer">
        <img className="image" src={data?.image} alt={data?.title} />
      </div>

      <div className="detailInfo">
        <div className="titleHeader">
          <h2>{data?.title}</h2>
          <h4>{data?.location}</h4>
        </div>

        <p>{data?.description}</p>
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default DetailCard;
