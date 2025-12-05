"use client";

import styles from "./styles.module.scss";
import { FilterBlock } from "../filterBlock";
import Button from "../ui/buttons/button";
import { clearProductsFilter } from "@/utils/clearProductsFilter";
import { usePathname } from "next/navigation";

const filters = [
  {
    company: "Dom Metal",
    products: [
      "Carros de mão",
      "Plataformas de trabalho",
      "Estruturas metálicas",
      "Carrinhos industriais",
    ],
  },
  {
    company: "DuFerro",
    products: [
      "Móveis planejados",
      "Estruturas metálicas",
      "Estruturas metálicas",
      "Estruturas metálicas",
    ],
  },
  {
    company: "CarBuilt",
    products: [
      "Estruturas metálicas",
      "Estruturas metálicas",
      "Estruturas metálicas",
      "Estruturas metálicas",
    ],
  },
];

export const FiltersSidebar = () => {
  const pathname = usePathname();
  
  return (
    <div className={styles.filtersContainer}>
      <h3>Filtros</h3>
      {filters.map((filter, index) => (
        <FilterBlock key={index} filters={filter} />
      ))}
      <Button type="button" click={() => clearProductsFilter(pathname)}>Limpar filtros</Button>
    </div>
  );
};
