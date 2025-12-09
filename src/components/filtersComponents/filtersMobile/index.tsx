import { FaFilter } from "react-icons/fa";
import styles from "./styles.module.scss";

const FiltersMobile = () => {
  return (
    <div className={styles.filtersMobileContainer}>
      <div className={styles.filterButton}>
        <FaFilter color="white" />
        <span>Filtros</span>
      </div>
    </div>
  );
};

export default FiltersMobile;
