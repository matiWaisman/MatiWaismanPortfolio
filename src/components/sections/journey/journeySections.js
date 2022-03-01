import React from "react";
import Studies from "./studies";
import Work from "./work";

const JourneySections = (props) => {
  const { activeSection, setActiveSection, language } = props;
  if (activeSection == "work") {
    return (
      <div className="journey-sections">
        <Work language={language} />
      </div>
    );
  }

  return (
    <div className="journey-sections">
      <Studies language={language} />
    </div>
  );
};

export default JourneySections;
