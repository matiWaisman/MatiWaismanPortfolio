import React, { useContext } from "react";
import "../../../stylesheets/name.css";
import { LanguageContext } from "../../../context/languageContext";

const Role = () => {
  const { language } = useContext(LanguageContext);
  const purple = "#7246b8";
  const red = "#EF6D6D";
  const orange = "#FF9F45";
  return (
    <div className="role-declaration">
      <h1 style={{ color: purple }}>const </h1>
      <h1 style={{ color: red }}>{language ? "role" : "rol"}</h1>
      <h1 style={{ color: "white" }}> = </h1>
      <h1 style={{ color: orange }}>
        "{language ? "Mern Web Developer" : "Desarrollador Web Mern"}"
      </h1>
      <h1 style={{ color: "white" }}>;</h1>
    </div>
  );
};

export default Role;
