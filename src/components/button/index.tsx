import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  type: "button" | "submit";
  bgColor?: "--blue-dark" | "--blue-light";
  disabled?: boolean;
  width?: "--sm" | "--m" | "--l";
  align?: "left" | "center" | "right";
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={styles.button}
      style={{
        backgroundColor: `var(${props.bgColor})`,
        width: `var(${props.width ?? "--sm"})`,
        textAlign: props.align || "center",
      }}
      disabled={props.disabled ?? false}
    >
      {props.children}
    </button>
  );
};

export default Button;
