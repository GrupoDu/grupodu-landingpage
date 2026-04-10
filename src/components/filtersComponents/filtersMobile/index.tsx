import { FaFilter } from "react-icons/fa";
import styles from "./styles.module.scss";

/**
 * Componente que renderiza o botão de filtros para dispositivos móveis
 *
 * @param props
 * @param {() => void} props.openFilterClickEvent - Evento de clique para abrir os filtros
 */
export const FiltersMobile = ({
  openFilterClickEvent,
}: {
  openFilterClickEvent: () => void;
}) => {
  return (
    <div className={styles.filtersMobileContainer}>
      <div
        onClick={() => openFilterClickEvent()}
        className={styles.filterButton}
      >
        <FaFilter color="white" />
        <span>Filtros</span>
      </div>
    </div>
  );
};
