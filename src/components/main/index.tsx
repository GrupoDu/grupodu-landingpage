import { products } from "@/data/products";
import React from "react";
import Produto from "../produto";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      {products.map((product) => (
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
