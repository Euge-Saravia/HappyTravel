import { Link } from "react-router-dom";
import "./buttons.scss";

const LogOutButton = () => {
  return (
    <div>
      <Link to="/">
        <button className="logOutButton">
          <img src="/assets/icons/Logout-icon.svg" alt="logout icon" />
        </button>
      </Link>
    </div>
  );
};

export default LogOutButton;
