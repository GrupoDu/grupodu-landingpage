import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
  width?: string;
  href?: string;
  className?: string;
  type: "button" | "link" | "submit";
  click?: () => void;
  handleForm?: (e: React.FormEvent<HTMLButtonElement>) => void;
  desativado?: boolean;
};

const Button = (props: Props) => {
  if (props.type === "link") {
    return (
      <Link
        href={props.href || "#"}
        className={`${styles.button} ${props.className}`}
        style={{
          backgroundColor: props.theme || "white",
          border: props.borda ? `1px solid ${props.borda}` : "none",
          color: props.color || "black",
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
          backgroundColor: props.theme || "white",
          border: props.borda ? `1px solid ${props.borda}` : "none",
          color: props.color || "black",
          width: props.width ? props.width : "100%",
        }}
        disabled={props.desativado}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
