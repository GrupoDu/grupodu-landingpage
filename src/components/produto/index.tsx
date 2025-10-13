import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { CheckCheck } from "lucide-react";

type Props = {
  nomeProduto: string;
  imagemProduto: StaticImageData;
  descricaoProduto: string;
  altImagem: string;
  caracteristicas: string[];
};

const Bullets = ({ bullet }: { bullet: string }) => {
  return (
    <div className={styles.bullets}>
      <p>{bullet}</p>
    </div>
  );
};

const Produto = ({
  nomeProduto,
  imagemProduto,
  // descricaoProduto,
  altImagem,
  caracteristicas,
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
          width={300}
          height={300}
        />
      </div>
      <h3>{nomeProduto}</h3>
      <div className={styles.bulletsContainer}>
        {caracteristicas.map((bullet, index) => (
          <div className={styles.bullet} key={index}>
            <CheckCheck color="" />
            <Bullets bullet={bullet} />
          </div>
        ))}
      </div>
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
