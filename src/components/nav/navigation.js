import React, { useState, useContext } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { RefsContext } from "../../context/refsContext";
import useLocation from "../../hooks/useLocation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const namesEs = ["Acerca", "Habilidades", "Trayecto", "Proyectos"];
  const namesEn = ["About", "Skills", "Journey", "Projects"];
  const links = ["about", "skills", "journey", "projects"];
  const refs = useContext(RefsContext);
  let refsArray = [];
  for (let key in refs) {
    refsArray.push(refs[key]);
  }
  const { visibleLocation } = useLocation(refsArray);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        namesEs={namesEs}
        namesEn={namesEn}
        links={links}
        visibleLocation={visibleLocation}
      />
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        namesEs={namesEs}
        namesEn={namesEn}
        links={links}
        visibleLocation={visibleLocation}
      />
    </>
  );
};

export default Navigation;
