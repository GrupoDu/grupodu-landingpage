import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

type Props = {
  nomeProduto: string;
  imagemProduto: StaticImageData;
  descricaoProduto: string;
  altImagem: string;
};

const Produto = ({
  nomeProduto,
  imagemProduto,
  descricaoProduto,
  altImagem,
}: Props) => {
  const message: string = encodeURIComponent(
    `Ola, gostaria de saber mais sobre o produto ${nomeProduto}`
  );
  const number: string = "5581999040919";

  return (
    <div className={styles.produtoContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imagemProduto}
          alt={altImagem}
          className={styles.imagemProduto}
        />
      </div>
      <h3>{nomeProduto}</h3>
      <span>Descrição</span>
      <p>{descricaoProduto}</p>
      <Link
        href={`https://wa.me/${number}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Entrar em contato <FaWhatsapp color="white" className={styles.icon} />
      </Link>
    </div>
  );
};

export default Produto;
