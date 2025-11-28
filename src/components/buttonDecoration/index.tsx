"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React, { useState } from "react";

interface Props extends baseButton {
  theme: string;
  color: string;
  borderRadius?: string;
};

const ButtonDecoration = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (props.type === "link") {
    return (
      <Link
        href={props.href ? props.href : "#"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.button}
        style={{
          backgroundColor: isHovered ? props.theme : "white",
          border: props.borda ? `1px solid ${props.borda}` : "none",
          color: isHovered ? props.color : "black",
          borderRadius: props.borderRadius ? props.borderRadius : "0px",
        }}
      >
        {props.children}
      </Link>
    );
  }

  if (props.type === "button") {
    return (
      <button
        onClick={props.click}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.button}
        style={{
          backgroundColor: isHovered ? props.theme : "white",
          border: props.borda ? `1px solid ${props.borda}` : "none",
          color: isHovered ? props.color : "black",
          borderRadius: props.borderRadius ? props.borderRadius : "0px",
        }}
      >
        {props.children}
      </button>
    );
  }
};

export default ButtonDecoration;
