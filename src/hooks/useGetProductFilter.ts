import { useEffect, useState } from "react";

export const useGetProductFilter = (filterValue: string): string => {
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const encodedFilterValue = encodeURIComponent(filterValue);
    setFilter(encodedFilterValue);
  }, [filterValue]);

  return filter;
};
