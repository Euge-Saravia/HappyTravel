import React from "react";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/signin">
      <button>
        <img
          className="avatarImage"
          src="/assets/icons/Avatar-icon.svg"
          alt="avatar"
        />
      </button>
    </Link>
  );
};

export default SignInButton;
