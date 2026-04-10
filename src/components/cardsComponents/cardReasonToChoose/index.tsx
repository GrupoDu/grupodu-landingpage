import React from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";

type ReasonToChooseProps = {
  title: string;
  description: string;
  icon: IconType;
};

/**
 * Componente que renderiza um card de motivo de escolha
 *
 * @param {ReasonToChooseProps} props - Props do componente
 * @see {ReasonToChooseProps}
 */
export const CardReasonToChoose = (props: ReasonToChooseProps) => {
  const { icon: Icon, description, title } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleCard}>
        <div className={styles.iconContainer}>
          <Icon color="white" />
        </div>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};
