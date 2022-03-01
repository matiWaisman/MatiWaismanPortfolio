import React from "react";
import Cs from "./cs";
import Ort from "./ort";

const Studies = (props) => {
  const { language } = props;
  return (
    <>
      <Cs language={language} />
      <Ort language={language} />
    </>
  );
};

export default Studies;
