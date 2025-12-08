"use client";

import React, { useEffect, useState } from "react";
import CardProduto from "../cardsComponents/cardProduto";
import styles from "./styles.module.scss";
import Loading from "../loading";
import { useCheckPathnameProduct } from "@/hooks/useCheckPathnameProduct";
import { useFetchProductsData } from "@/hooks/useFetchProductsData";

const Main = ({ id }: { id: string }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const productType = useCheckPathnameProduct();
  const productsData = useFetchProductsData(productType);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData]);

  return (
    <>
      {products.length > 0 ? (
        <main className={styles.main} id={id}>
          {productsData.map((product) => (
            <CardProduto
              key={product.id}
              nomeProduto={product.name}
              imagemProduto={product.image}
              descricaoProduto={product.description}
              altImagem={product.product_type}
              caracteristicas={product.features}
            />
          ))}
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Main;
