import CardTravel from "../cards/CardTravel";
import "./homepage.scss";

const HomePage = () => {
  const travels = Array(8).fill(null);

  return (
    <div className="homePage">
      {travels.map((_, index) => (
        <CardTravel key={index} />
      ))}
    </div>
  );
};

export default HomePage;
