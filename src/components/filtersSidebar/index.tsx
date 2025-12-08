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
      "Carro de mão",
      "Plataforma de trabalho",
      "Masseira",
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
