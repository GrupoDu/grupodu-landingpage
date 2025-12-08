import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { statesList } from "@/constants/statesList";

//Imagem
import MapaEstados from "../../../public/mapa-estados.png";

export const StatesContainer = () => {
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
          {statesList.map((estado, index) => (
            <li key={index}>{estado}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
