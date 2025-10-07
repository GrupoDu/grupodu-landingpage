import styles from "./styles.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  theme?: string;
  borda?: string;
  color?: string;
  width?: string;
};

const Button = ({ children, theme, borda, color, width }: Props) => {
  return (
    <button
      className={styles.button}
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
};

export default Button;
