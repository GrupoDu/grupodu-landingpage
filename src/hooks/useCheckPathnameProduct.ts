import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckPathnameProduct = () => {
  const [productType, setProductType] = useState<string>("");
  const pathnameProduct = usePathname();
  const searchParams = useSearchParams();
  const actualFilter = searchParams.get("filter") || "";
  const actualFilterDecoded = decodeURIComponent(actualFilter);

  useEffect(() => {
    if (
      pathnameProduct.includes("carro-de-mao") ||
      actualFilterDecoded === "Carro de mão"
    ) {
      setProductType("carro de mão");
    } else if (
      pathnameProduct.includes("masseira") ||
      actualFilterDecoded === "Masseira"
    ) {
      setProductType("masseira");
    } else if (
      pathnameProduct.includes("plataforma") ||
      actualFilterDecoded === "Plataforma de trabalho"
    ) {
      setProductType("plataforma");
    } else {
      setProductType("");
    }
  }, [pathnameProduct, searchParams, actualFilterDecoded]);

  return productType;
};
