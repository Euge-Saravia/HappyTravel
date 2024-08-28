import React from "react";

const Search = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="Search..." />
      <img
        className="searchImage"
        src="/assets/icons/Glass-icon.svg"
        alt="search"
      />
    </div>
  );
};

export default Search;
