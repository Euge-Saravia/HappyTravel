import "./buttons.scss";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <button>
        <img
          className="homeImage"
          src="/assets/icons/Home-icon.svg"
          alt="home"
        />
      </button>
    </Link>
  );
};

export default HomeButton;
