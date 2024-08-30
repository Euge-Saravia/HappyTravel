import "./navbar.scss";
import CreateButton from "../buttons/CreateButton";
import LogOutButton from "../buttons/LogOutButton";
import HomeButton from "../buttons/HomeButton";
import SignInButton from "../buttons/SignInButton";
import { useAuth } from "../../context/auth/authContext";
import Search from "../labels/Search";

const Navbar = () => {
  const { userId } = useAuth();

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img className="logoImage" src="/assets/icons/Logo.svg" alt="logo" />
      </div>

      <div className="userNavContainer">
        <Search />
        <div className="fixedButton">
          <HomeButton />
          {userId && <CreateButton />}
          {userId && <LogOutButton />}
          {!userId && <SignInButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
