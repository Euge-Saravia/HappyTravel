import React from "react";
feature/nav-responsive
import "./buttons.scss";
import { Link } from "react-router-dom";
develop

const CreateButton = () => {
  return (
    <div>
      <Link to="/travel/create">
        <button className="createButton">
          <img src="/assets/icons/Create-icon.svg" alt="create icon" />
        </button>
      </Link>
    </div>
  );
};

export default CreateButton;
