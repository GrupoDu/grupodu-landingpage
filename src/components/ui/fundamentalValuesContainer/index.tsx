"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FundamentalValueBullet } from "../fundamentalValueBullet";

type FundamentalValues = {
  title: string;
  text: string;
};

/**
 * Componente que exibe os valores fundamentais do grupo.
 */
export const FundamentalValuesContainer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef(null);
  const fundamentalValues: FundamentalValues[] = [
    {
      title: "Excelência Operacional",
      text: "Busca constante pela perfeição em cada processo, projeto e entrega.",
    },
    {
      title: "Inovação Contínua",
      text: "Investimento em tecnologia e metodologias para superar expectativas.",
    },
    {
      title: "Relacionamentos Duradouros",
      text: "Construção de parcerias baseadas em confiança e transparência.",
    },
    {
      title: "Responsabilidade Social",
      text: "Compromisso com impacto positivo na sociedade e meio ambiente.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => entry.isIntersecting && setIsVisible(true))
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  /** Exibe os valores fundamentais */
  const DisplayValues = () => {
    return fundamentalValues.map((value) => (
      <li>
        <FundamentalValueBullet isVisible={isVisible} title={value.title}>
          {value.text}
        </FundamentalValueBullet>
      </li>
    ));
  };

  return (
    <div className={styles.valoresContainer}>
      <h3>Nossos valores fundamentais</h3>
      <ul className={styles.fundamentalValuesList} ref={ref}>
        <DisplayValues />
      </ul>
    </div>
  );
};
