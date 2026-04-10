import { IconType } from "react-icons";
import styles from "./styles.module.scss";

/**
 * Componente que renderiza um item de contato
 *
 * @param props
 * @param {IconType} props.Icon
 * @param {string} props.contato
 */
export const ContactInformationItem = ({
  Icon,
  contato,
}: {
  Icon: IconType;
  contato: string;
}) => {
  return (
    <div className={styles.contatosContainer}>
      <Icon className={styles.icon} />
      <span>{contato}</span>
    </div>
  );
};
