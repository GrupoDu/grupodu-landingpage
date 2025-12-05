import styles from "./styles.module.scss";
import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: StaticImageData;
  alt: string;
  text: string;
  gradient: string;
  link: string;
}

const CardSegmentos = ({ src, alt, text, gradient, link }: Props) => {
  return (
    <Link
      href={link}
      className={styles.cardContainer}
      style={{
        background: gradient,
        color: text === "Dom Metal" ? "white" : "",
      }}
    >
      <Image loading="lazy" src={src} alt={alt} className={styles.logoImage} />
      <h4>Ir para produtos {text}</h4>
    </Link>
  );
};

export default CardSegmentos;
