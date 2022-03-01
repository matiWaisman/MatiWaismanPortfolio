import React, { useRef, useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import { RefsContext } from "../../../context/refsContext";
import useAnimation from "../../../hooks/useAnimation";
import "../../../stylesheets/skills.css";
import "../../../stylesheets/spacers.css";
import "../../../stylesheets/numbered-heading.scss";
import GridElements from "./gridElements";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const { skillsRef } = useContext(RefsContext);
  const { elementIsVisible, animationHappened } = useAnimation(skillsRef);
  return (
    <>
      <section className="skills" id="skills" ref={skillsRef}>
        <h2
          className={`numbered-heading ${
            elementIsVisible && !animationHappened ? "heading-animation" : ""
          }`}
          style={{ "--text": "'02.'" }}
        >
          {language ? "Skills" : "Habilidades"}
        </h2>
        <div className="grid-container">
          <GridElements
            animationHappened={animationHappened}
            elementIsVisible={elementIsVisible}
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
