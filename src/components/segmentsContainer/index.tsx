"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { CardSegmento } from "../cardsComponents/cardSegmento";
import { infoSegmentos } from "@/constants/segmentos";

export const SegmentsContainer = () => {
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
