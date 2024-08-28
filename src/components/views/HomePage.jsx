import CardTravel from "../cards/CardTravel";
import "./homepage.scss";
import { API_GET_TRAVELS } from "../../config/url";
import axios from "axios";
import { useQuery } from "react-query";


const dataTravels = async () => {
  const { data } = await axios.get(API_GET_TRAVELS);
  return data;
};

const HomePage = () => {
  const { data: travels, isLoading, isError } = useQuery("travels", dataTravels);


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
          title={travel.title}
          location={travel.location}
          img="https://cdn.yate.co/img/blog/2023/25/palma-de-mallorca-6kk.jpg"
        />
      ))}
    </div>
  );
};

export default HomePage;
