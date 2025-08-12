import React from "react";
import styles from "./styles.module.scss";
import { CircleCheck } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

const ValorElement = (props: Props) => {
  return (
    <div className={styles.valorContainer}>
      <CircleCheck color="white"/>
      <div className={styles.texts}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ValorElement;
