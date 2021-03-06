import React from "react";
import "../../../stylesheets/card.css";

const Card = (props) => {
  const { projectName, tags, image, gitLink, link } = props;
  return (
    <>
      <article className="module-project">
        <div className="img-wrapper">
          <div className="img-container"></div>
          <img className="image" src={image}></img>
        </div>
        <div className="project-module">
          <a href={link} className="link">
            <svg
              strokeWidth="0"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
            >
              <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path>
            </svg>
          </a>
          <div className="module-project-info">
            <h4>{projectName}</h4>
            <div className="module-project-tabs">
              {tags.map((tag) => (
                <p className="tab" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="module-project-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="github-icon"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <a href={gitLink}>source code</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
