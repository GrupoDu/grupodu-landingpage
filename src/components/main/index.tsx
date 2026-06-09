"use client";

import { CardProduto } from "../cardsComponents/cardProduto";
import styles from "./styles.module.scss";
import Loading from "../loading";
import { useCheckPathnameProduct } from "@/hooks/useCheckPathnameProduct";
import { useFetchProductsData } from "@/hooks/useFetchProductsData";

export const Main = ({ id }: { id: string }) => {
  const productType = useCheckPathnameProduct();
  const productsData = useFetchProductsData(productType);
  const hasProducts = productsData.length > 0;

  return (
    <>
      {hasProducts ? (
        <main className={styles.main} id={id}>
          {productsData.map((product) => (
            <CardProduto
              key={product.product_uuid}
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
