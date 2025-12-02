"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { baseButton } from "../types";

interface Props extends baseButton {
  theme: string;
  color: string;
  borderRadius?: string;
};

const ButtonDecoration = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const href = props.href ? props.href : "#"; 
  const border = props.border ? `1px solid ${props.border}` : "none";
  const borderRadius = props.borderRadius ? props.borderRadius : "0px";

  if (props.type === "link") {
    return (
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.button}
        style={{
          backgroundColor: isHovered ? props.theme : "white",
          border: border,
          color: isHovered ? props.color : "black",
          borderRadius: borderRadius,
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
          border: border,
          color: isHovered ? props.color : "black",
          borderRadius: borderRadius, 
        }}
      >
        {props.children}
      </button>
    );
  }
};

export default ButtonDecoration;
