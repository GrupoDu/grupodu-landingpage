import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { LuCheckCheck } from "react-icons/lu";
import { BulletProduct } from "../../bulletsComponents/bulletProduct";

type CardProdutoProps = {
  nomeProduto: string;
  imagemProduto: StaticImageData;
  descricaoProduto: string;
  altImagem: string;
  caracteristicas: string[];
};

export const CardProduto = (props: CardProdutoProps) => {
  const { altImagem, imagemProduto, nomeProduto, caracteristicas } = props;

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
      <h4>{nomeProduto}</h4>
      <div className={styles.bulletsContainer}>
        {caracteristicas.map((bullet, index) => (
          <div className={styles.bullet} key={index}>
            <LuCheckCheck />
            <BulletProduct text={bullet} />
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
