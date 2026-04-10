import { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
            data.filter(
              (product: IProduct) => product.product_type === productType
            )
          );
        }
      } catch (err) {
        const error = err as Error;
        toast.error(`Erro ao buscar dados: ${error.message}`);
        console.log(`Erro ao buscar dados: ${error.message}`);
      }
    };

    fetchData();
  }, [productType]);

  return productsData;
};
