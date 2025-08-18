import styles from "./page.module.scss";
import Button from "@/components/button";
import SectionTitle from "@/components/sectionTitle";
import Card from "@/components/card";
import Estados from "@/components/estados";
import {
  cards,
  diferencas,
} from "@/constants/textos";
import { ArrowDown, CircleCheckBig } from "lucide-react";
import InfoContatos from "@/components/infosContatos";
import Form from "@/components/form";
import Valores from "@/components/valores";
import Segmentos from "@/components/segmentos";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcome}>
        <h1>
          Grupo Du:{" "}
          <span className={styles.textoDestaque}>Inovação em Ação</span>
        </h1>
        <p>
          Somos um grupo empresarial consolidado no mercado, com atuação
          estratégica em diferentes segmentos, sempre mantendo o foco na
          qualidade, inovação e na satisfação completa dos nossos clientes.
        </p>
        <Button width="--sm" disabled={true} type="button">
          Loja em breve!
        </Button>
        <ArrowDown className={styles.arrowDown} />
      </div>
      <div className={styles.sobreSection}>
        <div className={styles.sobreText}>
          <h1>Nossa História e Propósito</h1>
          <p>
            O Grupo Du nasceu da visão de criar um conglomerado empresarial
            sólido e diversificado, capaz de atender diferentes necessidades do
            mercado com excelência e inovação.
          </p>
          <p>
            Ao longo dos anos, expandimos nossa atuação através da criação de
            empresas especializadas: Dom Metal em soluções e carrinhos, DuFerro
            em soluções em estruturas metálicas, e CarBuilt em soluções em
            maquinas de musculação.
          </p>
          <p>
            Nossa força está na diversificação estratégica e na capacidade de
            oferecer soluções integradas que geram valor real para nossos
            clientes e parceiros, sempre mantendo nossa essência de qualidade e
            compromisso com resultados excepcionais.
          </p>
        </div>
        <Valores />
      </div>
      <div className={styles.estadosSection}>
        <Estados />
      </div>
      <div className={styles.segmentsSection}>
        <SectionTitle>Nossas Empresas</SectionTitle>
        <div className={styles.titleSegments}>
          <h1>Três Empresas, </h1>
          <h1 className={styles.titleColorido}>Uma Visão</h1>
        </div>
        <p className={styles.sobreSegmentos}>
          Cada empresa do nosso grupo representa excelência em seu segmento,
          unidas por valores compartilhados de inovação, qualidade e compromisso
          com resultados excepcionais.
        </p>
        <Segmentos />
      </div>
      <div className={styles.motivoEscolha}>
        <h1>Por quê Escolher o Grupo Du?</h1>
        <h2>
          Nossa experiência e compromisso com a excelência fazem toda a
          diferença no resultado final.
        </h2>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.diferenciacoesSection}>
        <div className={styles.texts}>
          <h1>
            O que nos torna{" "}
            <span className={styles.textoDestaque}>únicos no mercado</span>
          </h1>
          <p>
            Combinamos tradição, inovação e expertise para entregar resultados
            que superam expectativas. Nossa abordagem integrada permite oferecer
            soluções completas e eficientes.
          </p>
          <Button
            type="button"
            width="--m"
            bgColor="--blue-light"
            color="white"
          >
            Solicitar Orçamento
          </Button>
        </div>
        <ul>
          {diferencas.map((diferenca, index) => (
            <li key={index}>
              <CircleCheckBig color="white" className={styles.checkIcon} />
              <span>{diferenca}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contatoSection}>
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para ajudar você. Entre em contato conosco!</p>
        <div className={styles.formInfos}>
          <InfoContatos />
          <Form />
        </div>
      </div>
    </div>
  );
}
