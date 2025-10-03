"use client";

import styles from "./styles.module.scss";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
};

const Button = ({ children, theme, borda, color }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: isHovered ? theme : "white",
        border: borda ? `1px solid ${borda}` : "none",
        color: isHovered ? color : "black",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
