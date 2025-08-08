"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  type: "button" | "submit";
  bgColor?: "--blue-dark" | "--blue-light";
  disabled?: boolean;
  width: "--sm" | "--m" | "--l" | "--full-width";
  align?: "left" | "center" | "right";
};

const Button = (props: Props) => {
  const [width, setWidth] = useState(0);
  const computedWidth =
    width <= 480 ? "var(--full-width)" : `var(${props.width})`;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <button
      type={props.type}
      className={styles.button}
      style={{
        backgroundColor: `var(${props.bgColor})`,
        width: computedWidth,
        textAlign: props.align || "center",
      }}
      disabled={props.disabled ?? false}
    >
      {props.children}
    </button>
  );
};

export default Button;
