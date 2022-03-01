import React, { useContext } from "react";
import "../../../stylesheets/name.css";
import { LanguageContext } from "../../../context/languageContext";

const ConstName = () => {
  const { language } = useContext(LanguageContext);
  const purple = "#7246b8";
  const lBlue = "#66CCFF";
  const yellow = "#FFE162";
  const arrow = "=>";
  const openBrace = "{";
  return (
    <div className="name-declaration">
      <h1 style={{ color: purple }}>const </h1>
      <h1 style={{ color: lBlue }}>Matías Waisman</h1>
      <h1 style={{ color: "white" }}> = </h1>
      <h1 style={{ color: yellow }}> () </h1>
      <h1 style={{ color: purple }}> {arrow} </h1>
      <h1 style={{ color: yellow }}> {openBrace} </h1>
    </div>
  );
};

export default ConstName;
