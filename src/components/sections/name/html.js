import React, { useContext } from "react";
import "../../../stylesheets/name.css";
import { LanguageContext } from "../../../context/languageContext";

const Html = () => {
  const { language } = useContext(LanguageContext);
  const purple = "#7246b8";
  const lBlue = "#66CCFF";
  const yellow = "#FFE162";
  const red = "#EF6D6D";
  const orange = "#FF9F45";
  const openTag = "<div>";
  const closingTag = "</div>";
  const openH1 = "<h1";
  const closedH1 = "</h1>";
  const closeArrow = ">";
  const openBrace = "{";
  const closedBrace = "}";
  return (
    <>
      <div className="return">
        <h1 style={{ color: purple }}>return ( </h1>
      </div>
      <div className="open-div">
        <h1 style={{ color: red }}> {openTag} </h1>
      </div>
      <div className="html">
        <h1 style={{ color: red }}> {openH1} </h1>
        <h1 style={{ color: orange }}>
          className="{language ? "title" : "titulo"}"{closeArrow}
        </h1>
        <h1 style={{ color: "white" }}>
          {language ? "Hi i'm Matías a" : "Hola soy Matías un"}
        </h1>
        <h1 style={{ color: lBlue }}> {openBrace}</h1>
        <h1 style={{ color: red }}>{language ? "role" : "rol"}</h1>
        <h1 style={{ color: lBlue }}>{closedBrace} </h1>
        <h1 style={{ color: lBlue }}> {openBrace}</h1>
        <h1 style={{ color: red }}>{language ? "status" : "estatus"}</h1>
        <h1 style={{ color: lBlue }}>{closedBrace}</h1>
        <h1 style={{ color: red }}> {closedH1} </h1>
      </div>
      <div className="close-div">
        <h1 style={{ color: red }}> {closingTag} </h1>
      </div>
      <div className="close-return">
        <h1 style={{ color: purple }}>)</h1>
        <h1 style={{ color: "white" }}>;</h1>
      </div>
      <div className="closing-bracket">
        <h1 style={{ color: yellow }}>{closedBrace}</h1>
        <h1 style={{ color: "white" }}></h1>
      </div>
    </>
  );
};

export default Html;
