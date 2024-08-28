import CardTravel from "../cards/CardTravel";
import "./homepage.scss";
import { API_GET_TRAVELS } from "../../config/url";
import axios from "axios";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const dataTravels = async () => {
  const { data } = await axios.get(API_GET_TRAVELS);
  return data;
};

const deleteTravel = async (id) => {
  await axios.delete(`${API_GET_TRAVELS}/${id}`);
};

const HomePage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: travels,
    isLoading,
    isError,
  } = useQuery("travels", dataTravels);

  const mutation = useMutation(deleteTravel, {
    onSuccess: () => {
      queryClient.invalidateQueries("travels");
    },
  });

  const handleEdit = (id) => {
    navigate(`travel/edit/${id}`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching travels data.</div>;
  }

  return (
    <div className="homePage">
      {travels.map((travel) => (
        <CardTravel
          key={travel.id}
          id={travel.id}
          title={travel.title}
          location={travel.location}
          img="https://cdn.yate.co/img/blog/2023/25/palma-de-mallorca-6kk.jpg"
          onDelete={() => mutation.mutate(travel.id)}
          onEdit={() => handleEdit(travel.id)}
        />
      ))}
    </div>
  );
};

export default HomePage;
