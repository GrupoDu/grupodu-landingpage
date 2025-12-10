"use client";

import styles from "./styles.module.scss";
import { productsFiltersList } from "@/constants/productsFiltersList";
import FilterBlock from "../../filtersComponents/filterBlock";
import FiltersMobile from "../../filtersComponents/filtersMobile";
import { useHandleOpenFilterMobile } from "@/hooks/useHandleOpenFilterMobile";
import Button from "../../ui/buttons/button";
import { clearProductsFilter } from "@/utils/clearProductsFilter";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const FilterMobileContainer = () => {
  const { filterIsOpen, openFilterMobile, closeFilterMobile } =
    useHandleOpenFilterMobile();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const actualFilter = searchParams.get("filter") || "";

  useEffect(() => {
    closeFilterMobile();
  }, [actualFilter]);

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
