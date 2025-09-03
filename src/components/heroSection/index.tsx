"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { products } from "@/data/products";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { textProductType } from "@/constants/textos";
import { PulseLoader } from "react-spinners";
import Loading from "../loading";

const HeroSection = () => {
  const [productTitle, setProductTitle] = useState<string | undefined>("");
  const [productDescription, setProductDescription] = useState<
    string | undefined
  >();
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
    }
  }, [searchParams]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.textImages}>
        <div className={styles.textHeader}>
          {loading ? <Loading size={10} /> : <h3>{productTitle}</h3>}
          <hr />
          {loading ? <Loading size={6} /> : <p>{productDescription}</p>}
        </div>
        {loading ? (
          <Loading size={16} />
        ) : (
          <div className={styles.imagesHeader}>
            <Image
              src={products[0].images[0]}
              alt={products[0].title}
              className={styles.imageHeader}
            />
            <Image
              src={products[1].images[0]}
              alt={products[1].title}
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
