import { IconType } from "react-icons";
import styles from "./styles.module.scss";

const Contato = ({
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

export default Contato;