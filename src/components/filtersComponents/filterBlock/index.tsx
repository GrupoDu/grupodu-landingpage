"use client";

import styles from "./styles.module.scss";
import React from "react";
import { InputCheckbox } from "../../inputCheckbox";

interface IFilter {
  company: string;
  products: string[];
}

/**
 * Componente que renderiza um bloco de filtros
 *
 * @param {{filters: IFilter}} props
 * @param {IFilter} props.filters - Filtros de pesquisa
 * @see IFilter
 */
export const FilterBlock = ({ filters }: { filters: IFilter }) => {
  return (
    <div className={styles.filterBlock}>
      <h4>{filters.company}</h4>
      <ul>
        {filters.products.map((product, index) => (
          <li key={index}>
            <InputCheckbox value={product} />
            <span>{product}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
