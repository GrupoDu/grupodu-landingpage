import { SearchIcon } from "lucide-react";
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} />
        <input type="search" name="inputSearch" placeholder="Procure no site" />
    </div>
  )
}

export default Search