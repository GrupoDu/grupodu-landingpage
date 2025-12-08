import styles from "../styles.module.scss";
import Main from "@/components/main";
import HeroSectionProductsPage from "@/components/heroSectionProdutcsPage";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Metadata } from "next";
import { MdKeyboardArrowDown } from "react-icons/md";
import Script from "next/script";
import ContactsProductsPageSection from "@/components/contactsProductsPageSection";

export const revalidate = 7200;

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Masseira para Obras",
  description:
    "Masseira para obras resistente e durável, ideal para mistura de argamassa, cimento e materiais de construção. Disponível em versões plásticas e metálicas com capacidades de 40L a 400L, oferecendo alta estabilidade e segurança no canteiro de obras.",
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
  },
};

export const metadata: Metadata = {
  title: "Masseiras - Grupo Du Car",
  description:
    "Há mais de 10 anos no mercado, o Grupo Du Car traz qualidade e inovação em todos os seus segmentos de atuação.",
};

export default function ProdutoPge() {
  return (
    <>
      <Script
        id="dommetal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<Loading />}>
        <div className={styles.page}>
          <HeroSectionProductsPage paginaAnterior="dom metal" />
          <div className={styles.tituloProdutos}>
            <MdKeyboardArrowDown className={styles.arrow} />
            <h2>Nossa linha completa de Masseiras para Obras</h2>
          </div>
          <Main id="produtos" />
          <hr className={styles.hr} />
          <ContactsProductsPageSection />
        </div>
      </Suspense>
    </>
  );
}
