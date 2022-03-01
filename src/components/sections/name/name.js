import React, { useContext } from "react";
import "../../../stylesheets/name.css";
import ConstName from "./constName";
import Role from "./role";
import Status from "./status";
import Html from "./html";
import { RefsContext } from "../../../context/refsContext";

const Name = () => {
  const { nameRef } = useContext(RefsContext);
  return (
    <section className="name" ref={nameRef}>
      <div className="text-container">
        <ConstName />
        <Role />
        <Status />
        <Html />
      </div>
    </section>
  );
};

export default Name;
