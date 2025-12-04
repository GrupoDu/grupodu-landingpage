import { useState, useEffect } from "react";

export const useFetchProductsData = (productType?: string) => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/database`);
        const data = await response.json();
        setProductsData(data);

        if (productType) {
          setProductsData(
            data.filter((product: IProduct) => product.product_type === productType)
          );
        }
      } catch (err) {
        console.log(`Erro ao buscar dados: ${(err as Error).message}`);
      }
    };

    fetchData();
  }, [productType]);

  return productsData;
};
