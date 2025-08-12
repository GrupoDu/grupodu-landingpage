import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

//Imagem
import MapaEstados from "../../../public/mapa-estados.png";

const Estados = () => {
  const estados = [
    "Alagoas - Maceió (AL)",
    "Bahia - Salvador (BA)",
    "Ceará - Fortaleza (CE)",
    "Maranhão - São Luís (MA)",
    "Paraíba - João Pessoa (PB)",
    "Pernambuco - Recife (PE)",
    "Piauí - Teresina (PI)",
    "Rio Grande Do Norte - Natal (RN)",
    "Sergipe - Aracaju(SE)",
  ];

  return (
    <div className={styles.estadosContainer}>
      <Image
        loading="lazy"
        src={MapaEstados}
        alt="mapa-estados"
        className={styles.mapaEstados}
      />
      <div className={styles.listContainer}>
        <h1>Atendemos em todo o nordeste</h1>
        <ul>
          {estados.map((estado, index) => (
            <li key={index}>{estado}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estados;
