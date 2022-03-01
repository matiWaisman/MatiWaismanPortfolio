import React, { useContext } from "react";
import { Link } from "react-scroll";
import "../../stylesheets/sidebar.css";
import Hamburguer from "./hamburguer";
import Toggle from "./toggle";
import { LanguageContext } from "../../context/languageContext";

const Sidebar = (props) => {
  const { language } = useContext(LanguageContext);
  const { isOpen, toggle, namesEs, namesEn, links, visibleLocation } = props;
  return (
    <>
      <aside
        className="sidebar-container"
        style={{ opacity: isOpen ? "100%" : "0%", top: isOpen ? "0" : "-100%" }}
      >
        <div className="icon-container">
          <Hamburguer isOpen={isOpen} toggle={toggle} />
        </div>
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            {links.map((link, i) => (
              <Link
                className={`sidebar-link ${
                  visibleLocation == namesEn[i].toLowerCase()
                    ? "sidebar-link-where"
                    : ""
                }`}
                to={link}
                spy={true}
                smooth={true}
                isDynamic={true}
                onClick={toggle}
                key={link}
              >
                <span> {language ? namesEn[i] : namesEs[i]} </span>
              </Link>
            ))}
          </div>
          <div className="side-btn-wrapper">
            <Toggle className="sidebar-btn" toggle={toggle} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
