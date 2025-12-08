import React from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";

type Props = {
  titulo: string;
  descricao: string;
  Icon: IconType;
  borderColor: string;
};

const CardGarantia = ({ titulo, descricao, Icon, borderColor }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div className={styles.title}>
        <Icon />
        <h4>{titulo}</h4>
      </div>
      <p>{descricao}</p>
    </div>
  );
};

export default CardGarantia;
