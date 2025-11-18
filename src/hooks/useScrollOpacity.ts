import { useState, useEffect } from "react";

export const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);
  const [opacityUp, setOpacityUp] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setResult(scrollPosition.toString());
      if (scrollPosition > 700) {
        setOpacity(0.5);
        setOpacityUp(0.9);
      } else {
        setOpacity(1);
        setOpacityUp(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [opacity, opacityUp];
};
