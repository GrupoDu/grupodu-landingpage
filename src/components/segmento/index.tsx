import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import ButtonDecoration from "../ui/buttons/buttonDecoration";

type Props = {
  src: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  especialidades: string[];
  variantClass: string;
  corButton: string;
};

const Segmento = (props: Props) => {
  return (
    <div className={`${styles.segmentoContainer} ${props.variantClass}`}>
      <Image
        loading="lazy"
        src={props.src}
        alt="segmento-imagem"
        className={styles.logoImage}
      />
      <h1>{props.title}</h1>
      <h4 className={styles.subtitle}>{props.subtitle}</h4>
      <p>{props.description}</p>
      <div className={styles.especialidadeContainer}>
        <div className={styles.especialidadeTitle}>
          <div className={styles.circle} />
          <h4>Especialidades</h4>
        </div>
        <ul>
          {props.especialidades.map((espec, index) => (
            <li key={index}>
              <div className={styles.circle} />
              <span>{espec}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonDecoration
          type="link"
          href={`/${props.variantClass}`}
          border={props.corButton}
          color="white"
          theme={props.corButton}
          borderRadius="14px"
        >
          {props.title}
        </ButtonDecoration>
      </div>
    </div>
  );
};

export default Segmento;
