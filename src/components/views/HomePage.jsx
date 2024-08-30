import CardTravel from "../cards/CardTravel";
import "./homepage.scss";
import { useAuth } from "../../context/auth/authContext";

const HomePage = ({ travels }) => {
  const { userId } = useAuth();
  return (
    <div className="homePage">
      {travels.map((travel) => (
        <CardTravel
          key={travel.id}
          id={travel.id}
          title={travel.title}
          location={travel.location}
          img={travel.image}
          showButtons={travel.userById === userId}
        />
      ))}
    </div>
  );
};

export default HomePage;
