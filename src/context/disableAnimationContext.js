import React, { useState, createContext, useEffect } from "react";

export const DisableAnimationContext = createContext();

export const DisableAnimationProvider = (props) => {
  const [disableAnimation, setdisableAnimation] = useState(false);
  return (
    <DisableAnimationContext.Provider
      value={{
        disableAnimation,
        setdisableAnimation,
      }}
    >
      {props.children}
    </DisableAnimationContext.Provider>
  );
};

export default DisableAnimationProvider;
