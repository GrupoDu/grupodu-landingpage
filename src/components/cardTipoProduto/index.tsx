import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import React from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  titulo: string;
  bullets: string[];
  imagem: StaticImageData;
  buttonScheme: string;
};

const ImageTemplate = () => {
  return (
    <div className={styles.imageTemplate}>
      <ImageIcon opacity={0.4} />
    </div>
  );
};

const CardTipoProduto = ({ titulo, bullets, imagem, buttonScheme }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagemContainer}>
        <ImageTemplate />
      </div>
    </div>
  );
};

export default CardTipoProduto;
