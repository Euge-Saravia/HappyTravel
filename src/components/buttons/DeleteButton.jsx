import "./buttons.scss";
import Modal from "../alert/Modal";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";
import { useState } from "react";
import { API_GET_TRAVEL } from "../../config/url";
import axios from "axios";
import { toAnimated } from "@cloudinary/url-gen/actions/transcode";
import { useAuth } from "../../context/auth/authContext";
import { useMutation, useQueries, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ id }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleDelete = () => {
    mutation.mutate();
    setIsOpen(true);
  };

  const handleAccept = () => {
    setIsOpen(false);
    navigate("/");
  };
  const mutation = useMutation(
    () => {
      return axios.delete(API_GET_TRAVEL(id), {
        headers: { Authorization: "Bearer " + token },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("travels");
      },
    }
  );

  return (
    <>
      <button className="deleteButton" onClick={() => setIsOpen(true)}>
        <img src="/assets/icons/Delete-icon.svg" />
      </button>
      <Modal
        open={isOpen && !mutation.isSuccess}
        onClose={() => setIsOpen(false)}
      >
        <h2 className="message">¿Quieres eliminar este destino?</h2>
        <div className="buttonsContainer">
          <AcceptButton onAccept={handleDelete} />
          <CancelButton onCancel={() => setIsOpen(false)} />
        </div>
      </Modal>
      {mutation.isSuccess && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="message">Travel eliminado existomente!</h2>
          <div className="buttonsContainer">
            <AcceptButton onAccept={handleAccept} />
            <CancelButton onCancel={() => setIsOpen(false)} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;
