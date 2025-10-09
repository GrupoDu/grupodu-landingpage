"use client";

import React, { useEffect, useState } from "react";
import Produto from "../produto";
import styles from "./styles.module.scss";

// Modificação feita para não dar conflito com o component
import { Produto as ProdutoType } from "@/@types/produto";
import Loading from "../loading";
import { usePathname } from "next/navigation";

const Main = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // const carrosDeMao = products.filter(
    //   (product) => product.category === "carro de mao"
    // );

    // setProdutos(carrosDeMao);

    const fetchData = async () => {
      try {
        if (pathname.includes("carro-de-mao")) {
          const response = await fetch("/api/database?produto=carro-de-mao");
          const data = await response.json();
          setProdutos(data);
        } else if (pathname.includes("masseira")) {
          const response = await fetch("/api/database?produto=masseira");
          const data = await response.json();
          setProdutos(data);
        } else if (pathname.includes("plataforma")) {
          const response = await fetch("/api/database?produto=plataforma");
          const data = await response.json();
          setProdutos(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [pathname]);

  return (
    <>
      {produtos.length > 0 ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Main;
