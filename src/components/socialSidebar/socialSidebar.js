import React, { useContext } from "react";
import "../../stylesheets/socialSidebar.css";
import { DisableAnimationContext } from "../../context/disableAnimationContext";
import useWindowDimensions from "../../hooks/useWindowDimension";
import VerticalSidebar from "./verticalSidebar";

const SocialSidebar = () => {
  const { disableAnimation } = useContext(DisableAnimationContext);

  return (
    <>
      <VerticalSidebar disableAnimation={disableAnimation} />
    </>
  );
};

export default SocialSidebar;
