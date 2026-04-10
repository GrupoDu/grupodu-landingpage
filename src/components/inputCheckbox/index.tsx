"use client";

import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ChangeEvent } from "react";

/**
 * Componente de input checkbox
 *
 * @param props
 * @param {string} props.value - valor do checkbox
 */
export const InputCheckbox = ({ value }: { value: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const encodedValue = encodeURIComponent(value);

  function handleCheckValue(e: ChangeEvent<HTMLInputElement>) {
    const filterParams = new URLSearchParams();

    if (e.target.checked) {
      filterParams.set("filter", encodedValue);
      router.push(`${pathname}?${filterParams}`);
      toast.success("Filtro aplicado.");
    }
  }

  return (
    <input
      type="radio"
      value={value}
      name="product-filter"
      className="checkbox-product-type"
      onChange={handleCheckValue}
    />
  );
};
