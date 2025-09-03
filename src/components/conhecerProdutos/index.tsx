"use client";

import React from "react";
import styles from "./styles.module.scss";
import ButtonAlt from "../buttonAlt";
import { MdFileDownload, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const ConhecendoProdutos = () => {
  const handleDownload = () => {
    window.open("catalogo.pdf", "_blank");
  };

  return (
    <div className={styles.conhecerProdutos}>
      <h1>Ainda não conhece nossos produtos?</h1>
      <div className={styles.buttons}>
        <ButtonAlt onClick={handleDownload} gradient={true}>
          <MdFileDownload color="white" className={styles.icon} />
          Baixe nosso catálogo completo
        </ButtonAlt>
        <Link href={"https://grupodu.com.br"} className={styles.link}>
          <ButtonAlt gradient={false}>
            Conheça o <strong>Grupo Du</strong>{" "}
            <MdKeyboardArrowRight color="black" className={styles.icon} />
          </ButtonAlt>
        </Link>
      </div>
    </div>
  );
};

export default ConhecendoProdutos;
