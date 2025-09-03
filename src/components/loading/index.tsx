import React from "react";
import { BarLoader } from "react-spinners";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BarLoader color="white" />
    </div>
  );
};

export default Loading;
