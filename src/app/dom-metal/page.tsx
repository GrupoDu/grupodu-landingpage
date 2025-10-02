// libs
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

// Import de imagens
import Logo from "../../../public/Logo dom metal.png";

const ProofPoints = ({ proof }: { proof: string }) => {
  return (
    <div className={styles.proofPoints}>
      <p>{proof}</p>
    </div>
  );
};

const DomMetalPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <div className={styles.topContent}>
          <Image src={Logo} alt={"logo dom metal"} className={styles.logo} />
          <h1>
            Fabricante de Carros de mão, Plataformas de Trabalho e Estruturas
            Metálicas para Construção Civil
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DomMetalPage;
