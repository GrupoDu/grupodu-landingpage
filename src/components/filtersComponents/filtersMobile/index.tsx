"use client";

import { FaFilter } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useState } from "react";

const FiltersMobile = ({
  openFilterClickEvent,
}: {
  openFilterClickEvent: () => void;
}) => {
  return (
    <div className={styles.filtersMobileContainer}>
      <div
        onClick={() => openFilterClickEvent()}
        className={styles.filterButton}
      >
        <FaFilter color="white" />
        <span>Filtros</span>
      </div>
    </div>
  );
};

export default FiltersMobile;
