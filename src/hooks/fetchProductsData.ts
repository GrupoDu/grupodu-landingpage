import { useState, useEffect } from "react";

export const useFetchProductsData = (endpoint: string) => {
    const [productsData, setProductsData] = useState<Produto[]>([]);

    useEffect(() => {
       const fetchData = async () => {
           try {
               const response = await fetch(`/api/database?${endpoint}`);
               const data = await response.json();
               setProductsData(data);
           } catch (err) {
               console.log(`Erro ao buscar dados: ${(err as Error).message}`);
           }
       }

       fetchData();
    }, [endpoint])

    return productsData;
}