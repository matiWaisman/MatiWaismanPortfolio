import React from "react";
import { VscCalendar } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Cs = (props) => {
  const { language } = props;
  return (
    <div className="journey-content">
      <div>
        <div className="journey-data">
          <div className="journey-goal">
            <h3 className="journey-title">
              {language
                ? "BSc. in Computer Science"
                : "Licenciatura en Ciencias de la Computación"}
            </h3>
            <span className="journey-subtitle">
              {language
                ? "Buenos Aires University"
                : "Universidad de Buenos Aires"}
            </span>
            <div className="journey-calendar">
              <IconContext.Provider value={{ size: "16px" }}>
                <VscCalendar />
              </IconContext.Provider>
              <span>2022 - 2028</span>
            </div>
          </div>
          <div>
            <span className="journey-rounder"></span>
            <span className="journey-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cs;
