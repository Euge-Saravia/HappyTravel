import CardTravel from "../cards/CardTravel";
import "./homepage.scss";
import { API_GET_TRAVELS } from "../../config/url";
import axios from "axios";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

const deleteTravel = async (id) => {
  await axios.delete(`${API_GET_TRAVELS}/${id}`);
};

const HomePage = ({ travels }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { userId } = useAuth();

  const mutation = useMutation(deleteTravel, {
    onSuccess: () => {
      queryClient.invalidateQueries("travels");
    },
  });

  const handleEdit = (id) => {
    navigate(`travel/edit/${id}`);
  };

  return (
    <div className="homePage">
      {travels.length === 0 ? (
        <p>No travels available</p>
      ) : (
        travels.map((travel) => (
          <CardTravel
            key={travel.id}
            id={travel.id}
            title={travel.title}
            location={travel.location}
            img={travel.image}
            onDelete={() => mutation.mutate(travel.id)}
            onEdit={() => handleEdit(travel.id)}
            showButtons={travel.userById == userId}
          />
        ))
      )}
    </div>
  );
};

export default HomePage;
