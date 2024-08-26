import "./navbar.scss"
import CreateButton from '../buttons/CreateButton';
import LogOutButton from '../buttons/LogOutButton';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <img className="logoImage" src="/assets/icons/Logo.svg" alt="logo" />
      </div>

      <div className="userNavContainer">
        <div className="searchContainer">
          <input type="text" placeholder="Search..." />
          <img
            className="searchImage"
            src="/assets/icons/Glass-icon.svg"
            alt="search"
          />
        </div>
        <div className='fixedButton'>
        <Link to="/">
        <button>
          <img
            className="homeImage"
            src="/assets/icons/Home-icon.svg"
            alt="home"
          />
        </button>
        </Link>
        <CreateButton />
        <LogOutButton />
        <Link to="/signin">
        <button>
          <img
            className="avatarImage"
            src="/assets/icons/Avatar-icon.svg"
            alt="avatar"
          />
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

