import React, { ForwardRefExoticComponent } from "react";
import styles from "./styles.module.scss";
import { LucideProps } from "lucide-react";

type Props = {
  titulo: string;
  descricao: string;
  Icon: ForwardRefExoticComponent<LucideProps>;
};

const CardGarantia = ({ titulo, descricao, Icon }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Icon />
        <h4>{titulo}</h4>
      </div>
      <p>{descricao}</p>
    </div>
  );
};

export default CardGarantia;
