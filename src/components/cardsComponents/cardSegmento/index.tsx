import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { ButtonDecoration } from "../../ui/buttons/buttonDecoration";

type CardProps = {
  src: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  especialidades: string[];
  variantClass: string;
  corButton: string;
};

/**
 * Componente de card de segmento
 *
 * @param {CardProps} props
 * @see {CardProps}
 */
export const CardSegmento = (props: CardProps) => {
  const {
    src,
    description,
    especialidades,
    corButton,
    title,
    variantClass,
    subtitle,
  } = props;

  /** Renderiza as especialidades do segmento */
  const displaySpecialties = especialidades.map((espec, index) => (
    <li key={index}>
      <div className={styles.circle} />
      <span>{espec}</span>
    </li>
  ));

  return (
    <div className={`${styles.segmentoContainer} ${variantClass}`}>
      <Image
        loading="lazy"
        src={src}
        alt="segmento-imagem"
        className={styles.logoImage}
      />
      <h1>{title}</h1>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p>{description}</p>
      <div className={styles.especialidadeContainer}>
        <div className={styles.especialidadeTitle}>
          <div className={styles.circle} />
          <h4>Especialidades</h4>
        </div>
        <ul className={styles.specialtiesList}>{displaySpecialties}</ul>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonDecoration
          type="link"
          href={`/${variantClass}`}
          border={corButton}
          color="white"
          theme={corButton}
          borderRadius="14px"
        >
          {title}
        </ButtonDecoration>
      </div>
    </div>
  );
};
