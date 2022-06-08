import React from "react";


function Header({ onDarkModeClick, darkModeOn }) {

  return (
  <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
      {darkModeOn ? "Dark" : "Light"} Mode
    </button>
  </header>
  );
}

export default Header;