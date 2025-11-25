import styles from "../styles.module.scss";
import FormProduto from "@/components/formProduto";
import Main from "@/components/main";
import HeroProdutos from "@/components/heroProdutos";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Metadata } from "next";
import ButtonBorder from "@/components/buttonBorder";
import { Contato } from "@/components/contatos";
import { contatos } from "@/constants/contatos";
import Button from "@/components/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import Script from "next/script";

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
              <Button
                type="link"
                href="#produtos"
              >
                Ver Linha Completa de Carros de Mão <MdKeyboardArrowDown />
              </Button>
            </div>
          </div>
          <FormProduto />
        </div>
        <hr className={styles.hr} />
        <div className={styles.tituloProdutos}>
          <MdKeyboardArrowDown className={styles.arrow} />
          <h2>Nossa linha completa de Masseiras para Obras</h2>
        </div>
        <Suspense fallback={<Loading />}>
          <Main id="produtos" />
        </Suspense>
      </div>
    </>
  );
}
