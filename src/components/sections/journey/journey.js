import React, { useContext, useState } from "react";
import "../../../App.css";
import "../../../stylesheets/journey.css";
import "../../../stylesheets/spacers.css";
import useAnimation from "../../../hooks/useAnimation";
import { RefsContext } from "../../../context/refsContext";
import { LanguageContext } from "../../../context/languageContext";
import JourneyHeader from "./journeyHeader";
import JourneySections from "./journeySections";

const Journey = () => {
  const { journeyRef } = useContext(RefsContext);
  const { language } = useContext(LanguageContext);
  const { elementIsVisible, animationHappened } = useAnimation(journeyRef);
  const [activeSection, setActiveSection] = useState("studies");
  return (
    <>
      <div className="small-spacer layer2"></div>
      <div className="small-spacer layer3"></div>
      <section className="journey" id="journey" ref={journeyRef}>
        <h2
          className={`numbered-heading ${
            elementIsVisible && !animationHappened ? "heading-animation" : ""
          }`}
          style={{ "--text": "'03.'" }}
        >
          {language ? "My Journey" : "Mi Trayecto"}
        </h2>
        <div
          className={`journey-container ${
            elementIsVisible && !animationHappened ? "journey-animation" : ""
          }`}
        >
          <JourneyHeader
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language}
          />
          <JourneySections
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language}
          />
        </div>
      </section>
    </>
  );
};

export default Journey;
