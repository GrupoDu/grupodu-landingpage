"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Segmento from "../segmento";
import { carbuilt, domMetal, duFerro } from "@/constants/textos";
import DomMetal from "../../../public/Logo dom metal.png";
import DuFerro from "../../../public/DuFerro.png";
import Carbuilt from "../../../public/Carbuilt.png";

const Segmentos = () => {
  useEffect(() => {
    const elements = [
      ...document.getElementsByClassName("dom-metal"),
      ...document.getElementsByClassName("duferro"),
      ...document.getElementsByClassName("carbuilt"),
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = elements.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add(styles.visible);
          }, index * 400);
        }
      });
    });

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <div className={styles.segmentosContainer}>
      <Segmento
        src={DomMetal}
        title={domMetal.nome}
        subtitle={domMetal.subtitulo}
        description={domMetal.descricao}
        especialidades={domMetal.especialidades}
        variantClass="dom-metal"
      />
      <Segmento
        src={DuFerro}
        title={duFerro.nome}
        subtitle={duFerro.subtitulo}
        description={duFerro.descricao}
        especialidades={duFerro.especialidades}
        variantClass="duferro"
      />
      <Segmento
        src={Carbuilt}
        title={carbuilt.nome}
        subtitle={carbuilt.subtitulo}
        description={carbuilt.descricao}
        especialidades={carbuilt.especialidades}
        variantClass="carbuilt"
      />
    </div>
  );
};

export default Segmentos;
