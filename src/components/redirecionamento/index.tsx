"use client";

import React from "react";
import styles from "./styles.module.scss";
import { LuArrowBigRight } from "react-icons/lu";
import Link from "next/link";

const Redirecionamento = () => {
  return (
    <Link href={"https://grupodu.com.br"} className={styles.redirecionamento}>
      <span>Conheça o Grupo Du</span>
      <div className={styles.iconContainer}>
        <LuArrowBigRight color="white" className={styles.icon} />
      </div>
    </Link>
  );
};

export default Redirecionamento;
