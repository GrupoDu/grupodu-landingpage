import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
  width?: string;
  href: string;
  className?: string;
  type: "button" | "link";
};

const Button = ({
  children,
  theme,
  borda,
  color,
  width,
  href,
  className,
  type,
}: Props) => {
  if (type === "link") {
    return (
      <Link
        href={href}
        className={`${styles.button} ${className}`}
        style={{
          backgroundColor: theme || "white",
          border: borda ? `1px solid ${borda}` : "none",
          color: color || "black",
          width: width ? width : "100%",
        }}
      >
        {children}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <button
        className={`${styles.button} ${className}`}
        style={{
          backgroundColor: theme || "white",
          border: borda ? `1px solid ${borda}` : "none",
          color: color || "black",
          width: width ? width : "100%",
        }}
      >
        {children}
      </button>
    );
  }
};

export default Button;
