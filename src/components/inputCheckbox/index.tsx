"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const InputCheckbox = ({ value }: { value: string }) => {
  const [filteredValue, setFilteredValue] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const encodedValue = encodeURIComponent(value);

    if (filteredValue !== "") {
      router.push(`${pathname}?filter=${encodedValue}`);
    }
  }, [filteredValue, router, pathname, value]);

  return (
    <input
      type="checkbox"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setFilteredValue(e.target.value)
      }
    />
  );
};
