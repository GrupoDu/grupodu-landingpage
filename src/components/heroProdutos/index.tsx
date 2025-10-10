"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// import { products } from "@/data/products";
import Image, { StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { textosHero } from "@/constants/textosHero";
import Loading from "../loading";
import { CategoriaProduto } from "@/@types/categoriaProduto";
import { CheckCheck } from "lucide-react";
import Button from "../newButton";
import ButtonBorder from "../buttonBorder";
import { MdKeyboardArrowDown } from "react-icons/md";

const Bullets = ({ texto }: { texto: string }) => {
  return (
    <div className={styles.bullets}>
      <CheckCheck />
      <p>{texto}</p>
    </div>
  );
};

const HeroProdutos = () => {
  const [productTitle, setProductTitle] = useState<string | undefined>("");
  const [productDescription, setProductDescription] = useState<
    string | undefined
  >();
  const [productImage, setProductImage] = useState<StaticImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bullets, setBullets] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    let produto: CategoriaProduto[] = [];

    if (pathname.includes("carro-de-mao")) {
      produto = textosHero.filter((text) => text.categoria === "Carro de mão");
    } else if (pathname.includes("masseira")) {
      produto = textosHero.filter((text) => text.categoria === "masseiras");
    } else if (pathname.includes("plataforma")) {
      produto = textosHero.filter((text) => text.categoria === "plataformas");
    } else {
      setProductTitle(undefined);
      setProductDescription(undefined);
      setProductImage([]);
      setBullets([]);
    }

    setProductTitle(produto[0].titulo);
    setProductDescription(produto[0].descricao);
    setProductImage(produto[0].imagens);
    setBullets(produto[0].bullets);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchParams, pathname]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.textImages}>
        <div className={styles.textHeader}>
          {loading ? <Loading /> : <h1>{productTitle}</h1>}
          <hr />
          {loading ? <Loading /> : <p>{productDescription}</p>}
          {bullets.map((bullet, index) => (
            <Bullets key={index} texto={bullet} />
          ))}
          <ButtonBorder
            borda="#201750"
            theme="#201750"
            color="white"
            href="#produtos"
            type="link"
            borderRadius="1em"
          >
            Explore nosso catálogo <MdKeyboardArrowDown />
          </ButtonBorder>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.imagesHeader}>
            <Image
              src={productImage[0]}
              alt={productTitle || "image do produto"}
              className={styles.imageHeader}
            />
            <Image
              src={productImage[1]}
              alt={productTitle || "image do produto"}
              className={styles.imageHeader}
              id={styles.jerica}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroProdutos;
