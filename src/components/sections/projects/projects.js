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
import ownTrelloImage from "../../../images/ownTrello.jpg";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const { projectsRef } = useContext(RefsContext);
  const { elementIsVisible, animationHappened } = useAnimation(projectsRef);
  var taskManager = {
    name: language ? "Task Manager" : "Administrador de Tareas",
    tags: ["Express", "MongoDB", "React"],
    image: todoImage,
    gitLink: "https://github.com/matiWaisman/TaskManagerHeroku",
    link: "https://tm-matias-waisman.herokuapp.com/",
  };
  var store = {
    name: language ? "Store" : "Tienda",
    tags: ["Express", "MongoDB", "React"],
    image: storeImage,
    gitLink: "https://github.com/matiWaisman/StoreHeroku",
    link: "https://store-mern-matias-waisman.herokuapp.com/",
  };

  var portfolio = {
    name: language ? "Personal Page" : "Página Personal",
    tags: ["React"],
    image: portfolioImage,
    gitLink: "https://github.com/matiWaisman/MatiWaismanPortfolio",
    link: "https://matias-waisman.herokuapp.com/",
  };

  var ownTrello = {
    name: language ? "My own version of Trello" : "Mi propia version de Trello",
    tags: ["React"],
    image: ownTrelloImage,
    gitLink: "https://github.com/matiWaisman/OwnTrello",
    link: "https://own-trello-matias-waisman.herokuapp.com/",
  };

  var arrayProjects = [taskManager, store, portfolio, ownTrello];

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
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
