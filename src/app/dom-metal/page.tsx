// libs
import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

// Import de imagens
import Logo from "../../../public/Logo dom metal.png";
import { ImageIcon } from "lucide-react";
import Button from "@/components/newButton";

const ImageTemplate = () => {
  return (
    <div className={styles.imageTemplate}>
      <ImageIcon opacity={0.4} />
    </div>
  );
};

const ProofPoints = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.proofPoints}>
      <p>{children}</p>
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
        <div className={styles.bottomContent}>
          <div className={styles.leftContent}>
            <div className={styles.proofs}>
              <ProofPoints>+800 Obras atendidas</ProofPoints>
              <ProofPoints>+10 anos de experiência</ProofPoints>
            </div>
            <div className={styles.construtorasList}>
              <span>Construtoras que já colaboramos</span>
              <ul>
                <li>
                  <ImageTemplate />
                </li>
                <li>
                  <ImageTemplate />
                </li>
                <li>
                  <ImageTemplate />
                </li>
                <li>
                  <ImageTemplate />
                </li>
                <li>
                  <ImageTemplate />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightContent}>
            <Button theme="#040826" borda="#fff" color="#fff">
              Solicitar Orçamento
            </Button>
            <Button>Ver Linha Completa de Produtos</Button>
          </div>
        </div>
      </div>
      <div className={styles.catalogo}>
        <h2>Nosso Catálogo Disponível</h2>
        <ul></ul>
      </div>
    </div>
  );
};

export default DomMetalPage;
