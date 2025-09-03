"use client";

import { products } from "@/data/products";
import React, { useEffect } from "react";
import Produto from "../produto";
import styles from "./styles.module.scss";
import { Product } from "@/data/types";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const searchParams = useSearchParams();
  const [produtos, setProdutos] = React.useState<Product[]>([]);

  useEffect(() => {
    if (searchParams.get("produto")) {
      const produto = searchParams
        .get("produto")
        ?.toLowerCase()
        .replace(/-/g, " ");
      setProdutos(products.filter((product) => product.category === produto));
      console.log(produto);
    }
  }, [searchParams]);

  return (
    <main className={styles.main}>
      {produtos.map((product) => (
        <Produto
          key={product.id}
          nomeProduto={product.title}
          imagemProduto={product.images[0]}
          descricaoProduto={product.description}
          altImagem={product.title}
        />
      ))}
    </main>
  );
};

export default Main;
