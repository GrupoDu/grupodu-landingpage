import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

interface Props extends baseButton {
  width?: string;
  className?: string;
  desativado?: boolean;
};

const Button = (props: Props) => {
  const href = props.href ? props.href : "#"; 
  const border = props.border ? `1px solid ${props.border}` : "none";
  const width = props.width ? props.width : "100%";
  const cursorPointer = props.desativado ? "not-allowed" : "pointer";
  const opacity = props.desativado ? 0.6 : 1;

  if (props.type === "link") {
    return (
      <Link
        href={href}
        className={`${styles.button} ${props.className}`}
        style={{
          border: border,
          width: width,
        }}
      >
        {props.children}
      </Link>
    );
  }

  if (props.type === "button" || "submit") {
    return (
      <button
        onClick={props.click}
        type={props.type}
        className={`${styles.button} ${props.className}`}
        style={{
          border: border,
          width: width,
          cursor: cursorPointer,
          opacity: opacity,
        }}
        disabled={props.desativado}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
