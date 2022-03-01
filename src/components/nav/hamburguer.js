import React from "react";
import "../../stylesheets/hamburguer.scss";

const Hamburguer = (props) => {
  const { isOpen, toggle } = props;
  var nameOfClass = "toggle-menu";
  if (isOpen) {
    nameOfClass = "toggle-menu active";
  }

  return (
    <>
      <a className={nameOfClass} onClick={toggle}>
        <i></i>
        <i></i>
        <i></i>
      </a>
    </>
  );
};

export default Hamburguer;
