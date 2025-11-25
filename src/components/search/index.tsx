import { LuSearch } from "react-icons/lu";
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <LuSearch className={styles.searchIcon} />
      <input type="search" name="inputSearch" placeholder="Procure no site" />
    </div>
  );
};

export default Search;
