"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React, { CSSProperties, useState } from "react";
import { BaseButton } from "../types";

/**
 * Props do botão decorado
 *
 * @see {BaseButton}
 */
interface ButtonDecorationProps extends BaseButton {
  theme: string;
  color: string;
  borderRadius?: string;
}

/**
 * Componente de botão decorado
 *
 * @param {ButtonDecorationProps} props
 * @see {ButtonDecorationProps}
 */
export const ButtonDecoration = (props: ButtonDecorationProps) => {
  const { theme, borderRadius, color, href, border, children, type, click } =
    props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const hrefValue = href ? href : "#";
  const borderValue = border ? `1px solid ${border}` : "none";
  const borderRadiusValue = borderRadius ? borderRadius : "0px";

  const buttonDynamicStyles: CSSProperties = {
    backgroundColor: isHovered ? theme : "white",
    border: borderValue,
    color: isHovered ? color : "black",
    borderRadius: borderRadiusValue,
  };

  const linkButton = (
    <Link
      href={hrefValue}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.button}
      style={buttonDynamicStyles}
    >
      {children}
    </Link>
  );

  const normalButton = (
    <button
      onClick={click}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.button}
      style={buttonDynamicStyles}
    >
      {children}
    </button>
  );

  if (type === "link") return linkButton;

  if (type === "button") return normalButton;
};
