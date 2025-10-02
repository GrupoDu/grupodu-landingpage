import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import React from "react";

type Props = {
  titulo: string;
  bullets: string[];
  imagem: StaticImageData;
  buttonScheme: string;
};

const CardTipoProduto = ({ titulo, bullets, imagem, buttonScheme }: Props) => {
  return <div className={styles.container}></div>;
};

export default CardTipoProduto;
