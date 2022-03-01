import React, { createContext, useRef } from "react";

export const RefsContext = createContext();

export const RefsProvider = (props) => {
  const nameRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const journeyRef = useRef();
  const projectsRef = useRef();
  return (
    <RefsContext.Provider
      value={{
        nameRef,
        aboutRef,
        skillsRef,
        journeyRef,
        projectsRef,
      }}
    >
      {props.children}
    </RefsContext.Provider>
  );
};

export default RefsProvider;
