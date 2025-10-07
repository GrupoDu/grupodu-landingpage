// libs
import React, { ForwardRefExoticComponent } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { Check, ImageIcon, LucideProps } from "lucide-react";
import Button from "@/components/newButton";
import ListaCatalogo from "@/components/listaCatalogo";
import { garantiasDomMetal } from "@/constants/garantias";
import CardGarantia from "@/components/cardGarantia";
import { sobreDomMetal } from "@/constants/sobre";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Metadata } from "next";

// Import de imagens
import Logo from "../../../public/Logo dom metal.png";
import ButtonBorder from "@/components/buttonBorder";
import ImgObra from "@/assets/backgrounds/construindo-novas-casas-de-concreto.jpg";
import ImgEletricista from "@/assets/backgrounds/instalador-eletricista-com-uma-ferramenta-nas-maos-trabalhando-com-cabo-no-canteiro-de-obras.jpg";
import InfoContatos from "@/components/infosContatos";
import Form from "@/components/form";
import DuFerro from "../../../public/DuFerro.png";
import Carbuilt from "../../../public/Carbuilt.png";
import BgHero from "@/assets/backgrounds/shirish-suwal-G3PCD962gXk-unsplash.webp";
import { textosCardDiferenciais } from "@/constants/cards";
import Script from "next/script";

const ImageTemplate = () => {
  return (
    <div className={styles.imageTemplate}>
      <ImageIcon opacity={0.4} />
    </div>
  );
};

const ProofPoints = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.proofPoints}>
      <p>{children}</p>
    </div>
  );
};

const Bullet = () => {
  return (
    <div className={styles.bulletComponent}>
      <Check className={styles.iconCheck} />
    </div>
  );
};

const CardDiferencial = ({
  titulo,
  descricao,
  Icon,
}: {
  titulo: string;
  descricao: string;
  Icon: ForwardRefExoticComponent<LucideProps>;
}) => {
  return (
    <div className={styles.cardDiferencial}>
      <div className={styles.titulo}>
        <Icon />
        <h4>{titulo}</h4>
      </div>
      <p>{descricao}</p>
    </div>
  );
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dom Metal",
  description:
    "Fabricante de Carros de mão, Plataformas de Trabalho e Estruturas Metálicas para Construção Civil",
  url: "https://grupodu.com.br/dom-metal",
  parentOrganization: {
    "@type": "Organization",
    name: "Grupo Du Car",
  },
};

export const metadata: Metadata = {
  title:
    "Dom Metal - soluções metálicas, carrinhos industriais e equipamentos sob medida com atendimento no Nordeste.",
  description:
    "Conheça a Dom Metal do Grupo Du Car: soluções metálicas, carrinhos industriais e equipamentos sob medida com atendimento no Nordeste. Durabilidade, fabricação local e suporte técnico.",
};

const DomMetalPage = () => {
  return (
    <>
      <Script
        id="dommetal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.pageContainer}>
        <div className={styles.heroSection} id="hero">
          <div className={styles.bgImage}>
            <div className="imageContainer">
              <Image
                src={BgHero}
                alt="background hero section"
                fill
                priority
                quality={85}
                className={styles.heroImage}
                style={{
                  objectFit: "cover",
                  objectPosition: "100% 80%",
                }}
              />
            </div>
          </div>
          <div className={styles.topContent}>
            <Image
              src={Logo}
              loading="lazy"
              alt={"logo dom metal"}
              className={styles.logo}
            />
            <h1>
              Fabricante de Carros de mão, Plataformas de Trabalho e Estruturas
              Metálicas para Construção Civil
            </h1>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.leftContent}>
              <div className={styles.proofs}>
                <ProofPoints>+800 Obras atendidas</ProofPoints>
                <ProofPoints>+10 anos de experiência</ProofPoints>
              </div>
              <div className={styles.construtorasList}>
                <span>Construtoras que já colaboramos</span>
                <ul>
                  <li>
                    <ImageTemplate />
                  </li>
                  <li>
                    <ImageTemplate />
                  </li>
                  <li>
                    <ImageTemplate />
                  </li>
                  <li>
                    <ImageTemplate />
                  </li>
                  <li>
                    <ImageTemplate />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.rightContent}>
              <Button
                width="fit-content"
                href="#formulario"
                theme="#040826"
                borda="#fff"
                color="#fff"
              >
                Solicitar Orçamento
              </Button>
              <Button href="#catalogo" width="fit-content">
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.diferencial}>
          <div className={styles.leftContent}>
            <h2>Por que escolher a Dom Metal</h2>
            <p>
              Na Dom Metal, entendemos que cada obra tem seus desafios — e por
              isso entregamos soluções metálicas que unem desempenho,
              praticidade e durabilidade. Com fabricação própria, garantimos
              qualidade constante e prazos de entrega reduzidos, atendendo
              construtoras, distribuidores e indústrias em todo o Nordeste.
            </p>
            <p>
              Nosso compromisso é oferecer equipamentos resistentes e suporte
              técnico próximo, ajudando nossos parceiros a manter ritmo,
              segurança e eficiência em cada etapa da construção.
            </p>
            <Button
              href="#catalogo"
              theme="#040826"
              color="white"
              borda="white"
            >
              Explorar Catálogo <MdKeyboardArrowDown />
            </Button>
          </div>
          <div className={styles.rightContent}>
            {textosCardDiferenciais.segmentos["dom-metal"].map((texto) => (
              <CardDiferencial
                key={texto.titulo}
                titulo={texto.titulo}
                descricao={texto.descricao}
                Icon={texto.icon}
              />
            ))}
          </div>
        </div>
        <div className={styles.catalogo} id="catalogo">
          <h2>Nosso Catálogo Disponível</h2>
          <ListaCatalogo />
        </div>
        <div className={styles.garantias}>
          <h2>Garantias Industriais</h2>
          <ul>
            {garantiasDomMetal.map((garantia, index) => (
              <li key={index}>
                <CardGarantia
                  borderColor="#fff"
                  Icon={garantia.icon}
                  titulo={garantia.titulo}
                  descricao={garantia.descricao}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sobre}>
          <div className={styles.leftContent}>
            <h2>{sobreDomMetal.titulo}</h2>
            <p>{sobreDomMetal.descricao[0]}</p>
            <p>{sobreDomMetal.descricao[1]}</p>
            <ul>
              {sobreDomMetal.bullets.map((bullet, index) => (
                <li key={index}>
                  <Bullet />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <ButtonBorder
              href="#"
              borda="#5D6BFF"
              color="white"
              borderRadius="6px"
              theme="#5D6BFF"
              type="link"
            >
              Solicitar Orçamento
            </ButtonBorder>
          </div>
          <div className={styles.rightContent}>
            <Image
              src={ImgObra}
              alt="Imagem de obra"
              className={`${styles.imagensSobre} ${styles.imgObra}`}
            />
            <Image
              src={ImgEletricista}
              alt="Imagem de obra"
              className={`${styles.imagensSobre} ${styles.imgEletricista}`}
            />
          </div>
        </div>
        <div className={styles.contatoSection} id="formulario">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar você. Entre em contato conosco!</p>
          <div className={styles.formInfos}>
            <InfoContatos />
            <Form />
          </div>
        </div>
        <div className={styles.outrosSegmentos}>
          <h2>Conheça nossos outros segmentos</h2>
          <div className={styles.segmentosContainer}>
            <div className={styles.grupodu}>
              <h2>Grupo Du Car</h2>
              <p>
                Somos um grupo empresarial consolidado, com atuação estratégica
                em diferentes segmentos e compromisso constante com qualidade,
                inovação e excelência no atendimento.
              </p>
              <p>
                Há mais de 10 anos, o Grupo Du Car se destaca na fabricação de
                móveis planejados sob medida, transformando ambientes com
                soluções que unem funcionalidade, estilo e durabilidade. Nossa
                trajetória é marcada pela confiança de clientes que buscam
                projetos personalizados e resultados que valorizam cada espaço.
              </p>
            </div>
            <div className={styles.segmentos}>
              <div className={styles.duFerro}>
                <Image
                  src={DuFerro}
                  alt="Logo DuFerro"
                  className={styles.logoSegmentos}
                />
                <div className={styles.content}>
                  <span>
                    Especialistas em móveis planejados para todos os ambientes,
                    combinamos design inteligente, materiais de primeira linha e
                    um acabamento impecável.
                  </span>
                  <Link href={"#"} className={styles.button}>
                    Conhecer DuFerro <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
              <div className={styles.carbuilt}>
                <Image
                  src={Carbuilt}
                  alt="Logo Carbuilt"
                  className={styles.logoSegmentos}
                />
                <div className={styles.content}>
                  <span>
                    Especialistas em móveis planejados para todos os ambientes,
                    combinamos design inteligente, materiais de primeira linha e
                    um acabamento impecável.
                  </span>
                  <Link href={"#"} className={styles.button}>
                    Conhecer Carbuilt <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomMetalPage;
