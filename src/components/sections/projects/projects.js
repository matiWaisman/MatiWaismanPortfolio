import React, { useContext } from "react";
import useAnimation from "../../../hooks/useAnimation";
import "../../../App.css";
import "../../../stylesheets/projects.css";
import "../../../stylesheets/numbered-heading.scss";
import Card from "./card";
import { LanguageContext } from "../../../context/languageContext";
import { RefsContext } from "../../../context/refsContext";
import portfolioImage from "../../../images/portfolio.jpg";
import storeImage from "../../../images/store.jpg";
import todoImage from "../../../images/todo.jpg";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const { projectsRef } = useContext(RefsContext);
  const { elementIsVisible, animationHappened } = useAnimation(projectsRef);
  var taskManager = {
    name: language ? "Task Manager" : "Administrador de Tareas",
    tags: ["Express", "MongoDB", "React"],
    image: todoImage,
    gitLink: "https://github.com/matiWaisman/TaskManagerMern",
  };
  var store = {
    name: language ? "Store" : "Tienda",
    tags: ["Express", "MongoDB", "React"],
    image: storeImage,
    gitLink: "https://github.com/matiWaisman/StoreMern",
  };

  var portfolio = {
    name: language ? "Personal Page" : "Página Personal",
    tags: ["React"],
    image: portfolioImage,
    gitLink: "https://github.com/matiWaisman/MatiWaismanPortfolio",
  };
  var arrayProjects = [taskManager, store, portfolio];

  return (
    <section className="projects" ref={projectsRef}>
      <div className="card-container-title">
        <h2
          className={`numbered-heading ${
            elementIsVisible && !animationHappened ? "heading-animation" : ""
          }`}
          style={{ "--text": "'04.'" }}
        >
          {language ? "Projects" : "Proyectos"}
        </h2>
      </div>
      <div
        className={`card-container ${
          elementIsVisible && !animationHappened
            ? "card-container-animation"
            : ""
        }`}
      >
        {arrayProjects.map((project) => (
          <Card
            projectName={project.name}
            tags={project.tags}
            image={project.image}
            key={project.name}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
