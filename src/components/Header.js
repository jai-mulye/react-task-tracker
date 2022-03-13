import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showF }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showF ? '#ca2d2d' : 'green'} text={showF ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

// Default Props for Components
Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
