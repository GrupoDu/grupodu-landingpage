import styles from "./styles.module.scss";

interface IFilter {
  company: string;
  products: string[];
}

export const FilterBlock = ({ filters }: { filters: IFilter }) => {
  return (
    <div className={styles.filterBlock}>
      <h4>{filters.company}</h4>
      <ul>
        {filters.products.map((product, index) => (
          <li key={index}>
            <input type="checkbox" value={product} />
            <span>{product}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
