import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

interface Props extends baseButton {
  width: string;
  className: string;
  desativado: boolean;
};

const Button = (props: Props) => {
  const href = props.href || "#"; 
  const border = props.borda ? `1px solid ${props.borda}` : "none";
  const width = props.width ? props.width : "100%";

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
          backgroundColor: "#040826f",
          border: props.borda ? `1px solid ${props.borda}` : "none",
          width: props.width ? props.width : "100%",
          cursor: props.desativado ? "not-allowed" : "pointer",
          opacity: props.desativado ? 0.6 : 1,
        }}
        disabled={props.desativado}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
