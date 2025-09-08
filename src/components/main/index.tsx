"use client";

// import { products } from "@/data/products";
import React, { useEffect, useState } from "react";
import Produto from "../produto";
import styles from "./styles.module.scss";
import { ProdutoType } from "@/data/types";
// import { useSearchParams } from "next/navigation";

const Main = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  useEffect(() => {
    // const carrosDeMao = products.filter(
    //   (product) => product.category === "carro de mao"
    // );

    // setProdutos(carrosDeMao);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/database?produto=carro-de-mao");
        const data = await response.json();

        setProdutos(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (searchParams.get("produto")) {
  //     const produto = searchParams
  //       .get("produto")
  //       ?.toLowerCase()
  //       .replace(/-/g, " ");
  //     setProdutos(products.filter((product) => product.category === produto));
  //     console.log(produto);
  //   }
  // }, [searchParams]);

  return (
    <main className={styles.main}>
      {produtos.map((product) => (
        <Produto
          key={product.id}
          nomeProduto={product.nome}
          imagemProduto={product.imagem}
          descricaoProduto={product.descricao}
          altImagem={product.tipo_produto}
        />
      ))}
    </main>
  );
};

export default Main;
