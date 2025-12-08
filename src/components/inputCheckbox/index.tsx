"use client";

import { usePathname, useRouter } from "next/navigation";

const InputCheckbox = ({ value }: { value: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const encodedValue = encodeURIComponent(value);

  function handleCheckValue(e: React.ChangeEvent<HTMLInputElement>) {
    const filterParams = new URLSearchParams();

    if (e.target.checked) {
      filterParams.set("filter", encodedValue);
      router.push(`${pathname}?${filterParams}`);
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

export default InputCheckbox;