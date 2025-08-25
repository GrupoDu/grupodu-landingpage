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
  color?: "white" | "var(--blue-dark)";
};

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={styles.button}
      style={{
        backgroundColor: `var(${props.bgColor})`,
        width: props.width,
        textAlign: props.align || "center",
        color: props.color || "var(--blue-dark)",
      }}
      disabled={props.disabled ?? false}
    >
      {props.children}
    </button>
  );
};

export default Button;
