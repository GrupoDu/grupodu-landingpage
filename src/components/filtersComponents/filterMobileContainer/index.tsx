"use client";

import styles from "./styles.module.scss";
import { productsFiltersList } from "@/constants/productsFiltersList";
import FilterBlock from "../../filtersComponents/filterBlock";
import FiltersMobile from "../../filtersComponents/filtersMobile";
import { useHandleOpenFilterMobile } from "@/hooks/useHandleOpenFilterMobile";
import Button from "../../ui/buttons/button";
import { clearProductsFilter } from "@/utils/clearProductsFilter";
import { usePathname } from "next/navigation";

const FilterMobileContainer = () => {
  const { filterIsOpen, openFilterMobile, closeFilterMobile } =
    useHandleOpenFilterMobile();
  const pathname = usePathname();

  return (
    <>
      <FiltersMobile openFilterClickEvent={openFilterMobile} />
      <div
        className={`${styles.filterBlockMobile} ${filterIsOpen && styles.filterMobileOpen}`}
      >
        <FilterBlock filters={productsFiltersList[0]} />
        <Button type="button" click={() => clearProductsFilter(pathname)}>
          Limpar Filtros
        </Button>
        <Button type="button" click={() => closeFilterMobile()}>
          Fechar filtros
        </Button>
      </div>
    </>
  );
};

export default FilterMobileContainer;
