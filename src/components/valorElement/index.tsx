import React from "react";
import styles from "./styles.module.scss";
import { CircleCheck } from "lucide-react";

type Props = {
  title: string;
  description: string;
  variant: keyof typeof styles;
};

const ValorElement = ({ title, description, variant }: Props) => {
  return (
    <div className={`${styles.valorContainer} ${styles[variant]}`}>
      <CircleCheck color="white" />
      <div className={styles.texts}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ValorElement;
