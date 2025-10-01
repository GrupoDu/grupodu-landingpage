"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// import { products } from "@/data/products";
import Image, { StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { textProductType } from "@/constants/textos";
import Loading from "../loading";
import { textsCategory } from "@/data/types";

const HeroProdutos = () => {
  const [productTitle, setProductTitle] = useState<string | undefined>("");
  const [productDescription, setProductDescription] = useState<
    string | undefined
  >();
  const [productImage, setProductImage] = useState<StaticImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    let produto: textsCategory[] = [];

    if (pathname.includes("carro-de-mao")) {
      produto = textProductType.filter(
        (text) => text.category === "carro-de-mao"
      );
    } else if (pathname.includes("masseira")) {
      produto = textProductType.filter((text) => text.category === "masseiras");
    } else if (pathname.includes("plataforma")) {
      produto = textProductType.filter(
        (text) => text.category === "plataformas"
      );
    } else {
      setProductTitle(undefined);
      setProductDescription(undefined);
      setProductImage([]);
    }

    setProductTitle(produto[0].title);
    setProductDescription(produto[0].description);
    setProductImage(produto[0].images);

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
