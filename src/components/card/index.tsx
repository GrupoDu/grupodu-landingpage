import React from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon: IconType;
};

const Card = ({ title, description, icon: Icon }: Props) => {
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

export default Card;
