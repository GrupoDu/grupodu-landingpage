import styles from "../styles.module.scss";
import Main from "@/components/main";
import HeroProdutos from "@/components/heroProdutos";
import Loading from "@/components/loading";
import { Suspense } from "react";
import { Metadata } from "next";
import { MdKeyboardArrowDown } from "react-icons/md";
import Script from "next/script";
import ContatosSection from "@/components/contatosSection";

export const revalidate = 7200;

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Carro de Mão Profissional",
  description:
    "Carro de mão robusto para construção civil e jardinagem, com capacidade de 150kg e estrutura de aço galvanizado com soldas reforçadas para garantir uma construção segura e duradoura.",
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
};

export const metadata: Metadata = {
  title: "Carro de Mão para Obras - Dom Metal",
  description:
    "Compre carros de mão duráveis e eficientes para sua obra. Entre em contato com a Dom Metal e garanta o melhor para sua construção.",
};

export default function ProdutoPge() {
  return (
    <>
      <Script
        id="dommetal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <Suspense fallback={<Loading />}>
          <HeroProdutos paginaAnterior="dom metal" />
        </Suspense>
        <div className={styles.tituloProdutos}>
          <MdKeyboardArrowDown className={styles.arrow} />
          <h2>Nossa linha completa de Carros de Mão</h2>
        </div>
        <div className={styles.products}>
          <Suspense fallback={<Loading />}>
            <Main id="produtos" />
          </Suspense>
        </div>
        <hr className={styles.hr} />
        <ContatosSection />
      </div>
    </>
  );
}
