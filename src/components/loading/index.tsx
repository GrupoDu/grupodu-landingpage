import React from "react";
import { PulseLoader } from "react-spinners";
import styles from "./styles.module.scss";

type Props = {
  size: number;
};

const Loading = ({ size }: Props) => {
  return (
    <div className={styles.loading}>
      <PulseLoader color="white" size={size} />
    </div>
  );
};

export default Loading;
