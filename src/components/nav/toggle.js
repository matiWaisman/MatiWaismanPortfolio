import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../context/languageContext";
import "../../stylesheets/toggle.scss";
import useWindowDimensions from "../../hooks/useWindowDimension";

const Toggle = (props) => {
  const { toggle } = props;
  const { language, setLanguage } = useContext(LanguageContext);
  const { height, width } = useWindowDimensions();
  const changeLanguage = () => {
    setLanguage(!language);
  };
  const handleClick = () => {
    if (width < 769) {
      toggle();
    }
  };
  return (
    <>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggle"
          id="toggle"
          checked={language}
          onChange={changeLanguage}
          onClick={handleClick}
        />
        <label className="toggle-switch-label" htmlFor="toggle">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </>
  );
};

export default Toggle;
