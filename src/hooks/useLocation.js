import React, { useState, useEffect } from "react";

const useLocation = (refs) => {
  const [visibleLocation, setVisibleLocation] = useState("");
  const options = {
    root: null,
    threshold: 0.4,
  };
  useEffect(() => {
    refs.forEach((ref) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleLocation(entry.target.className);
        }
      });
      observer.observe(ref.current, options);
    });
  }, []);

  return { visibleLocation };
};

export default useLocation;
