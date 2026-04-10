import Link from "next/link";
import styles from "./styles.module.scss";
import React, { CSSProperties } from "react";
import { BaseButton } from "../types";

/**
 * Props do botão
 *
 * @see {BaseButton}
 */
interface ButtonProps extends BaseButton {
  width?: string;
  className?: string;
  desativado?: boolean;
}

/**
 * Componente de botão
 *
 * @param {ButtonProps} props - Configurações do botão
 * @see {ButtonProps}
 */
export const Button = (props: ButtonProps) => {
  const { children, type, click, href, border, width, className, desativado } =
    props;

  const hrefValue = href ? href : "#";
  const borderValue = border ? `1px solid ${border}` : "none";
  const widthValue = width ? width : "100%";
  const cursorPointer = desativado ? "not-allowed" : "pointer";
  const opacity = desativado ? 0.6 : 1;
  const isLinkButton = type === "link";
  const isButton = type === "button" || type === "submit";

  const linkButtonDynamicStyles: CSSProperties = {
    border: borderValue,
    width: widthValue,
  };
  const buttonDynamicStyles: CSSProperties = {
    ...linkButtonDynamicStyles,
    cursor: cursorPointer,
    opacity: opacity,
  };

  const linkButton = (
    <Link
      href={hrefValue}
      className={`${styles.button} ${className}`}
      style={linkButtonDynamicStyles}
    >
      {children}
    </Link>
  );
  const normalButton = (
    <button
      onClick={click}
      type={type as "button" | "submit"}
      className={`${styles.button} ${className}`}
      style={buttonDynamicStyles}
      disabled={desativado}
    >
      {children}
    </button>
  );

  if (isLinkButton) return linkButton;

  if (isButton) return normalButton;
};
