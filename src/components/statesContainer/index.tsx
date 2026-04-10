import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { statesList } from "@/constants/statesList";
import MapaEstados from "../../../public/mapa-estados.png";

/**
 * Componente que exibe o mapa de estados e a lista de estados.
 */
export const StatesContainer = () => {
  const displayStatesList = statesList.map((estado, index) => (
    <li key={index}>{estado}</li>
  ));

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
        <ul className={styles.statesList}>{displayStatesList}</ul>
      </div>
    </div>
  );
};
