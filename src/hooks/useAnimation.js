import React, { useEffect, useState } from "react";

const useAnimation = (ref) => {
  const [elementIsVisible, setElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);
  const [animationHappened, setAnimationHappened] = useState(false);
  const [animationCounter, setAnimationCounter] = useState({
    counter: 0,
  });

  useEffect(() => {
    if (elementIsVisible) {
      var currentState = animationCounter.counter;
      setAnimationCounter({
        ...animationCounter,
        counter: (currentState += 1),
      });
    }
    if (animationCounter.counter > 0) {
      setAnimationHappened(true);
    }
  }, [elementIsVisible]);
  return { elementIsVisible, animationHappened };
};

export default useAnimation;
