import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../../stylesheets/navbar.css";
import Hamburguer from "./hamburguer";
import Toggle from "./toggle";
import { LanguageContext } from "../../context/languageContext";
import { DisableAnimationContext } from "../../context/disableAnimationContext";

const Navbar = (props) => {
  const { isOpen, toggle, namesEs, namesEn, links, visibleLocation } = props;
  const { language } = useContext(LanguageContext);
  const { disableAnimation } = useContext(DisableAnimationContext);
  var lastScrollTop = 0;
  const [navStyle, setNavStyle] = useState("nav");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setNavStyle("nav hide");
      } else {
        setNavStyle("nav");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  }, []);

  return (
    <>
      <nav className={navStyle}>
        <div className="navbar-container">
          <Link
            className={`navbar-logo ${
              disableAnimation ? "navbar-logo-animation-cancel" : ""
            }`}
            to="name"
            spy={true}
            smooth={true}
            isDynamic={true}
          >
            <img
              src={require("../../images/coding.png")}
              className="icon-logo"
            ></img>
            <span className="navbar-line"></span>
            <h4 className="navbar-title">MW</h4>
          </Link>
          <div className="mobile-logo">
            <Hamburguer toggle={toggle} isOpen={isOpen} />
          </div>
          <div className="mobile-menu">
            {links.map((link, i) => (
              <li
                key={link}
                className={`navbar-item ${
                  disableAnimation ? "navbar-item-animation-cancel" : ""
                } ${
                  visibleLocation == links[i] && navStyle != "nav hide"
                    ? "navbar-item-where"
                    : ""
                }`}
              >
                <Link
                  className="navbar-link"
                  to={link}
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  key={link}
                >
                  {language ? namesEn[i] : namesEs[i]}
                </Link>
              </li>
            ))}
          </div>
          <div
            className={`toggle-container ${
              disableAnimation ? "toggle-container-animation-cancel" : ""
            }`}
          >
            <Toggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
