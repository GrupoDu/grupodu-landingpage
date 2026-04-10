"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { textosHero } from "@/constants/textosHero";
import Loading from "../loading";
import { CategoriaProduto } from "@/@types/categoriaProduto";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ButtonDecoration } from "../ui/buttons/buttonDecoration";
import Breadcrumbs from "../ui/breadcrumbs";
import { BulletHeroSection } from "../bulletsComponents/bulletHeroSection";

/**
 * Componente de hero section para páginas de produtos
 *
 * @param props
 * @param {string} props.paginaAnterior - URL da página anterior
 */
export const HeroSectionProductsPage = ({
  paginaAnterior,
}: {
  paginaAnterior: string;
}) => {
  const [productTitle, setProductTitle] = useState<string | undefined>("");
  const [productDescription, setProductDescription] = useState<
    string | undefined
  >();
  const [productImage, setProductImage] = useState<StaticImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [bullets, setBullets] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pathnameFormatado = pathname.replace("/", "").replace(/-/g, " ");

  useEffect(() => {
    let produto: CategoriaProduto[] = [];
    const isCarPage = pathname.includes("carro-de-mao");
    const isMasseiraPage = pathname.includes("masseira");
    const timeoutMs = 1000;
    const isPlatformPage = pathname.includes("plataforma");
    const filterTextByCategory = (category: string) =>
      textosHero.filter((text) => text.categoria === category);

    if (isCarPage) {
      produto = filterTextByCategory("Carro de mão");
    } else if (isMasseiraPage) {
      produto = filterTextByCategory("Masseiras");
    } else if (isPlatformPage) {
      produto = filterTextByCategory("Plataformas");
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

    setTimeout(() => setLoading(false), timeoutMs);
  }, [searchParams, pathname]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.textImages}>
        <div className={styles.textHeader}>
          <Breadcrumbs
            paginaAnterior={paginaAnterior}
            paginaAtual={pathnameFormatado}
          />
          <h1>{productTitle}</h1>
          <hr />
          <p>{productDescription}</p>
          {bullets.map((bullet, index) => (
            <BulletHeroSection key={index} texto={bullet} />
          ))}
          <ButtonDecoration
            border="#201750"
            theme="#201750"
            color="white"
            href="#produtos"
            type="link"
            borderRadius="1em"
          >
            Explore nosso catálogo <MdKeyboardArrowDown />
          </ButtonDecoration>
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
