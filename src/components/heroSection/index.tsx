"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { products } from "@/data/products";
import Image, { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { textProductType } from "@/constants/textos";
import { PulseLoader } from "react-spinners";
import Loading from "../loading";

const HeroSection = () => {
  const [productTitle, setProductTitle] = useState<string | undefined>("");
  const [productDescription, setProductDescription] = useState<
    string | undefined
  >();
  const [productImage, setProductImage] = useState<StaticImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("produto")) {
      const produto = searchParams.get("produto")?.toLowerCase();
      setProductTitle(
        textProductType.filter((text) => text.category === produto)[0].title
      );
      setProductDescription(
        textProductType.filter((text) => text.category === produto)[0]
          .description
      );
      setProductImage(
        textProductType.filter((text) => text.category === produto)[0].images
      );
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchParams]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.textImages}>
        <div className={styles.textHeader}>
          {loading ? <Loading /> : <h3>{productTitle}</h3>}
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

export default HeroSection;
