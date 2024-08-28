import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import "./buttons.scss";

const LogOutButton = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Link to="/">
        <button className="logOutButton" onClick={logout}>
          <img src="/assets/icons/Logout-icon.svg" alt="logout icon" />
        </button>
      </Link>
    </div>
  );
};

export default LogOutButton;
