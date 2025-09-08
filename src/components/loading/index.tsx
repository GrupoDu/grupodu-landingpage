"use client";

import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import styles from "./styles.module.scss";

const Loading = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Renderiza um placeholder durante a SSR
    return (
      <div className={styles.loading}>
        <div>Carregando...</div>
      </div>
    );
  }

  return (
    <div className={styles.loading}>
      <GridLoader color="#8fbcff" />
    </div>
  );
};

export default Loading;
