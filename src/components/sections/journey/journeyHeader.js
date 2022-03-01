import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IconContext } from "react-icons";

const JourneyHeader = (props) => {
  const { activeSection, setActiveSection, language } = props;

  const handleClick = (e) => {
    e.preventDefault();
    setActiveSection(e.target.value);
  };
  return (
    <IconContext.Provider value={{ size: "28px" }}>
      <div className="journey-tabs">
        <button
          className={`journey-btn ${
            activeSection == "studies" ? "journey-btn-active" : ""
          }`}
          type="submit"
          value="studies"
          onClick={handleClick}
        >
          <i className="journey-icon">
            <FaGraduationCap />
          </i>
          {language ? "Studies" : "Estudios"}
        </button>
        <button
          className={`journey-btn ${
            activeSection == "work" ? "journey-btn-active" : ""
          }`}
          type="submit"
          value="work"
          onClick={handleClick}
        >
          <i className="journey-icon">
            <MdWork />
          </i>
          {language ? "Work" : "Trabajo"}
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default JourneyHeader;
