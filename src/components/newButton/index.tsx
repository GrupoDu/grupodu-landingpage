import styles from "./styles.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
};

const Button = ({ children, theme, borda, color }: Props) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: theme || "white",
        border: borda ? `1px solid ${borda}` : "none",
        color: color || "black"
      }}
    >
      {children}
    </button>
  );
};

export default Button;
