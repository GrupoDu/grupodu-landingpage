import styles from "../styles.module.scss";
import FormProduto from "@/components/formProduto";
import Main from "@/components/main";
import HeroProdutos from "@/components/heroProdutos";
import Loading from "@/components/loading";
import { Suspense } from "react";
import { Metadata } from "next";
import { contatos } from "@/constants/contatos";
import Button from "@/components/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import ButtonBorder from "@/components/buttonBorder";
import Script from "next/script";
import { Contato } from "@/components/contatos";

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
        <div className={styles.formularioContato}>
          <div className={styles.contatos}>
            <h2>Solicite seu Produto</h2>
            <p>
              Preencha seus dados e nossa equipe entrará em contato para
              garantir que você receba exatamente o que procura.
            </p>
            <hr />
            <h3>Outras formas de contato</h3>
            {contatos.map((contato, index) => (
              <Contato
                key={index}
                Icon={contato.icon}
                contato={contato.contato}
              />
            ))}
            <div className={styles.buttons}>
              <span>Ainda não conhece nossos produtos?</span>
              <ButtonBorder
                type="link"
                href="#"
                borda="#201750"
                theme="#201750"
                color="white"
                borderRadius="4px"
              >
                Catálogo completo
              </ButtonBorder>
              <Button type="link" href="#produtos" theme="#201750" color="white">
                Ver Linha Completa de Carros de Mão <MdKeyboardArrowDown />
              </Button>
            </div>
          </div>
          <FormProduto />
        </div>
        <hr className={styles.hr} />
        <div className={styles.tituloProdutos}>
          <MdKeyboardArrowDown className={styles.arrow} />
          <h2>Nossa linha completa de Carros de Mão</h2>
        </div>
        <Suspense fallback={<Loading />}>
          <Main id="produtos" />
        </Suspense>
      </div>
    </>
  );
}
