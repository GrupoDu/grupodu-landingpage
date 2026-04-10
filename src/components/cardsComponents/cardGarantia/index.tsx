import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";
import { IconType } from "react-icons";

type CardGarantiaProps = {
  titulo: string;
  descricao: string;
  Icon: IconType;
  borderColor: string;
};

/**
 * Componente de Card de Garantia
 *
 * @param {CardGarantiaProps} props
 * @param {string} props.titulo - Título do card
 * @param {string} props.descricao - Descrição do card
 * @param {IconType} props.Icon - Icone do card
 * @param {string} props.borderColor - Cor da borda do card
 * @see {CardGarantiaProps}
 */
export const CardGarantia = (props: CardGarantiaProps) => {
  const { titulo, descricao, Icon, borderColor } = props;
  const cardDynamicStyle: CSSProperties = {
    border: `1px solid ${borderColor}`,
  };

  return (
    <div className={styles.container} style={cardDynamicStyle}>
      <div className={styles.title}>
        <Icon />
        <h4>{titulo}</h4>
      </div>
      <p>{descricao}</p>
    </div>
  );
};
