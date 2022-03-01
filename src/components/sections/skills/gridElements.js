import React, { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import "../../../stylesheets/skills.css";
import { IconContext } from "react-icons";
import { DiJavascript1, DiReact, DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const GridElements = (props) => {
  const { animationHappened, elementIsVisible } = props;
  const { language } = useContext(LanguageContext);
  return (
    <>
      <IconContext.Provider value={{ color: "#7246b8", size: "25px" }}>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeLeft" : ""
          }`}
        >
          <DiJavascript1 className="icon" />
          <h1 className="skill-name">Javascript</h1>
        </div>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeRight" : ""
          }`}
        >
          <DiReact className="icon" />
          <h1 className="skill-name">React</h1>
        </div>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeLeft" : ""
          }`}
        >
          <SiExpress className="icon" />
          <h1 className="skill-name">Express</h1>
        </div>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeRight" : ""
          }`}
        >
          <DiMongodb className="icon" />
          <h1 className="skill-name">MongoDB</h1>
        </div>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeLeft" : ""
          }`}
        >
          <BsServer className="icon" />
          <h1 className="skill-name">C#/Java</h1>
        </div>
        <div
          className={`flex-skill ${
            elementIsVisible && !animationHappened ? "fadeRight" : ""
          }`}
        >
          <BiWorld className="icon" />
          <h1 className="skill-name">{language ? "Spanish" : "Inglés"}</h1>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default GridElements;
