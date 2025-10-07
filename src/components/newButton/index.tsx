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
};

const Button = ({ children, theme, borda, color, width, href }: Props) => {
  return (
    <Link
      href={href}
      className={styles.button}
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
};

export default Button;
