"use client";

import { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import React from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { Check } from "lucide-react";
import ButtonBorder from "../buttonBorder";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  titulo: string;
  bullets: string[];
  imagem?: StaticImageData;
  buttonScheme: string;
  href: string;
};

const ImageTemplate = () => {
  return (
    <div className={styles.imageTemplate}>
      <ImageIcon opacity={0.4} width={80} height={80} />
    </div>
  );
};

const CardTipoProduto = ({
  titulo,
  bullets,
  imagem,
  buttonScheme,
  href,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagemContainer}>
        {imagem ? <Image src={imagem} alt={titulo} /> : <ImageTemplate />}
      </div>
      <div className={styles.content}>
        <h4>{titulo}</h4>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index}>
              <Check color="#515151" />
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
        <ButtonBorder
          href={href}
          borda={buttonScheme}
          color="white"
          theme={buttonScheme}
          borderRadius="6px"
        >
          Ver Linha Completa de {titulo} <MdKeyboardArrowRight />
        </ButtonBorder>
      </div>
    </div>
  );
};

export default CardTipoProduto;
