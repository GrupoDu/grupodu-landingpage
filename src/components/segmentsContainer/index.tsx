"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { CardSegmento } from "../cardsComponents/cardSegmento";
import { infoSegmentos } from "@/constants/segmentos";

/** Componente que renderiza os cards de segmentos */
export const SegmentsContainer = () => {
  useEffect(() => {
    const elements = [
      ...document.getElementsByClassName("dom-metal"),
      ...document.getElementsByClassName("duferro"),
      ...document.getElementsByClassName("carbuilt"),
    ];

    /**
     * Timeout para adicionar a classe de visibilidade aos elementos
     *
     * @param {IntersectionObserver} entry - Instancia do IntersectionObserverEntry
     */
    const timeoutToShow = (entry: IntersectionObserverEntry) => {
      const index = elements.indexOf(entry.target);
      const ms = 400;

      setTimeout(() => {
        entry.target.classList.add(styles.visible);
      }, index * ms);
    };

    const observer = new IntersectionObserver((entries) =>
      entries.forEach((entry) => timeoutToShow(entry))
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <div className={styles.segmentosContainer}>
      {infoSegmentos.map((info, index) => (
        <CardSegmento
          key={index}
          src={info.img.src}
          title={info.title}
          subtitle={info.subtitle}
          description={info.description}
          especialidades={info.especialidades}
          variantClass={info.variantClass}
          corButton={info.corButton}
        />
      ))}
    </div>
  );
};
