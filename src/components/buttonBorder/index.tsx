"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
  borderRadius?: string;
  href: string;
  type: "button" | "link";
  click?: () => void;
};

const ButtonBorder = ({
  children,
  theme,
  borda,
  color,
  borderRadius,
  href,
  type,
  click,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (type === "link") {
    return (
      <Link
        href={href}
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
      </Link>
    );
  }

  if (type === "button") {
    return (
      <button
        onClick={click}
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
  }
};

export default ButtonBorder;
