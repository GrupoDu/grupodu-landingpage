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

const ButtonDecoration = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (props.type === "link") {
    return (
      <Link
        href={props.href}
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
