import React, { useContext } from "react";
import "../../../stylesheets/name.css";
import { LanguageContext } from "../../../context/languageContext";

const Status = () => {
  const { language } = useContext(LanguageContext);
  const purple = "#7246b8";
  const red = "#EF6D6D";
  const orange = "#FF9F45";
  return (
    <div className="status-declaration">
      <h1 style={{ color: purple }}>const </h1>
      <h1 style={{ color: red }}>{language ? "status" : "estatus"} </h1>
      <h1 style={{ color: "white" }}> = </h1>
      <h1 style={{ color: orange }}>
        {" "}
        "
        {language ? "Looking for oportunities" : "En Búsqueda de Oportunidades"}
        "
      </h1>
      <h1 style={{ color: "white" }}>;</h1>
    </div>
  );
};

export default Status;
