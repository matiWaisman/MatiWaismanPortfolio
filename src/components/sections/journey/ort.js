import React from "react";
import { VscCalendar } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Ort = (props) => {
  const { language } = props;
  return (
    <div className="journey-content">
      <div>
        <div className="journey-data">
          <div className="div-spacer"></div>
          <div className="time-line">
            <span className="journey-rounder"></span>
            <span className="journey-line" style={{ height: "90%" }}></span>
          </div>
          <div className="journey-goal">
            <h3 className="journey-title">
              {language
                ? "High school with specialization in web and mobile development"
                : "Secundaria con especialización en desarrollo web y mobile"}
            </h3>
            <span className="journey-subtitle">Ort Argentina</span>
            <div className="journey-calendar">
              <IconContext.Provider value={{ size: "16px" }}>
                <VscCalendar />
              </IconContext.Provider>
              <span>2016 - 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ort;
