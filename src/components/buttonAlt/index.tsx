import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  gradient: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, gradient, onClick, type }: Props) => {
  return (
    <button
      style={{
        background: gradient ? "var(--gradient-blue)" : "white",
        color: gradient ? "white" : "black",
      }}
      className={styles.button}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
