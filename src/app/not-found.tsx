import Link from "next/link";
import styles from "./not-found.module.scss";
import React from "react";

const Page = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>Desculpe, não foi possível encontrar essa página</h1>
      <span>
        Voltar para tela{" "}
        <Link href={"/"}>
          <strong>Inicial</strong>
        </Link>
      </span>
    </div>
  );
};

export default Page;
