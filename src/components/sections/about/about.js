import React, { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import useAnimation from "../../../hooks/useAnimation";
import { DisableAnimationContext } from "../../../context/disableAnimationContext";
import { RefsContext } from "../../../context/refsContext";
import "../../../stylesheets/about.css";
import me from "../../../images/me.jpg";

const About = () => {
  const { setdisableAnimation } = useContext(DisableAnimationContext);
  const { aboutRef } = useContext(RefsContext);
  const { language } = useContext(LanguageContext);
  const { elementIsVisible, animationHappened } = useAnimation(aboutRef);

  if (elementIsVisible) {
    setdisableAnimation(true);
  }

  const getAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const myBirthDay = new Date(2004, 5, 19);
  const myAge = getAge(myBirthDay);

  return (
    <>
      <div className="small-spacer layer1Top"></div>
      <div className="small-spacer layer1Bot"></div>
      <section className="about" id="about" ref={aboutRef}>
        <h2
          className={`numbered-heading ${
            elementIsVisible && !animationHappened ? "heading-animation" : ""
          }`}
          style={{ "--text": "'01.'" }}
        >
          {language ? "About me" : "Acerca de mí"}
        </h2>
        <div className="inner">
          <div
            className={`styled-text ${
              elementIsVisible && !animationHappened
                ? "styled-text-animation"
                : ""
            }`}
          >
            <p>
              {language
                ? `Hi! My name is Matias and i am ${myAge} years old, graduated from Ort's High school with specialization in web and mobile development and student at BSc. in Computer Science at the education department of exact and natural sciences from the University of Buenos Aires.`
                : `¡Hola! Me llamo Matías y tengo ${myAge} años, egresado de la escuela Ort con Especialización en desarrollo web y Mobile y estudiante a Ciencias de la Computación en la FCEyN de la Universidad de Buenos Aires.`}
            </p>
            <p>
              {language ? "I enjoy" : "Disfruto"} {""}
              <span style={{ color: "#66CCFF" }}>
                {language
                  ? "thinking, designing and developing solutions to ideas and problems that may benefit as many people as posible"
                  : "idear, diseñar y desarrollar soluciones a ideas y problemas que puedan beneficiar a la mayor cantidad de gente posible"}
              </span>
              {""}.{" "}
              {language
                ? "I like to search and learn new things to always be the best version of myself."
                : "Me gusta investigar y aprender cosas nuevas para superarme a mí mismo."}
            </p>
            <p>
              <span style={{ color: "#66CCFF" }}>
                {language
                  ? "I'm a web developer looking for my first work experience"
                  : "Soy un desarrollador web en busca de mi primera experiencia laboral"}
              </span>
              {""}.{" "}
              {language
                ? "I seek to complement the academic formation from the career with practical experiences in the professional space."
                : "Busco complementar la formación académica de la carrera con experiencias prácticas del mundo laboral."}
            </p>
          </div>

          <div
            className={`styled-pic ${
              elementIsVisible && !animationHappened
                ? "styled-pic-animation"
                : ""
            }`}
          >
            <img className="about-image" src={me}></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
