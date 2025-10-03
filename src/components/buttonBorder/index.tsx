"use client";

import styles from "./styles.module.scss";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
  borderRadius?: string;
};

const ButtonBorder = ({
  children,
  theme,
  borda,
  color,
  borderRadius,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.button}
      style={{
        backgroundColor: isHovered ? theme : "white",
        border: borda ? `1px solid ${borda}` : "none",
        color: isHovered ? color : "black",
        borderRadius: borderRadius ? borderRadius : "0px",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;
