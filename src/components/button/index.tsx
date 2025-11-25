import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  borda?: string;
  width?: string;
  href?: string;
  className?: string;
  type: "button" | "link" | "submit";
  click?: () => void;
  desativado?: boolean;
};

const Button = (props: Props) => {
  if (props.type === "link") {
    return (
      <Link
        href={props.href || "#"}
        className={`${styles.button} ${props.className}`}
        style={{
          border: props.borda ? `1px solid ${props.borda}` : "none",
          width: props.width ? props.width : "100%",
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
