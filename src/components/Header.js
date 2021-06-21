import React from "react";

const Header = ({ changeStyles }) => {
  return (
    <header>
      <h2>Where in the world?</h2>
      <p onClick={changeStyles}>
        <i className="far fa-moon"></i> Dark mode
      </p>
    </header>
  );
};

export default Header;
