import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useCheckPathnameProduct = () => {
  const pathname = usePathname();
  const [productType, setProductType] = useState<string>("");

  useEffect(() => {
    if (pathname.includes("carro-de-mao")) {
      setProductType("carro de mão");
    } else if (pathname.includes("masseira")) {
      setProductType("masseira");
    } else if (pathname.includes("plataforma")) {
      setProductType("plataforma");
    }
  }, [pathname]);

  return productType;
};
