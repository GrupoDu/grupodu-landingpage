"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import ValorElement from "../valorElement";

const Valores = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div className={styles.valoresContainer}>
      <h2>Nossos valores fundamentais</h2>
      <ul ref={ref}>
        <li>
          <ValorElement
            variant={visible ? "visible" : ""}
            title="Excelência Operacional"
            description="Busca constante pela perfeição em cada processo, projeto e entrega."
          />
        </li>
        <li>
          <ValorElement
            variant={visible ? "visible" : ""}
            title="Inovação Contínua"
            description="Investimento em tecnologia e metodologias para superar expectativas."
          />
        </li>
        <li>
          <ValorElement
            variant={visible ? "visible" : ""}
            title="Relacionamentos Duradouros"
            description="Construção de parcerias baseadas em confiança e transparência."
          />
        </li>
        <li>
          <ValorElement
            variant={visible ? "visible" : ""}
            title="Responsabilidade Social"
            description="Compromisso com impacto positivo na sociedade e meio ambiente."
          />
        </li>
      </ul>
    </div>
  );
};

export default Valores;
