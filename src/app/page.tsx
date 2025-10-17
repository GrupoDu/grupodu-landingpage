import styles from "./page.module.scss";
import Button from "@/components/button";
import SectionTitle from "@/components/sectionTitle";
import Card from "@/components/card";
import Estados from "@/components/estados";
import { cards, diferencas } from "@/constants/textos";
import { ArrowDown, CircleCheckBig } from "lucide-react";
import InfoContatos from "@/components/infosContatos";
import Form from "@/components/form";
import Valores from "@/components/valores";
import Segmentos from "@/components/segmentos";
import SwiperComponent from "@/components/swiper";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <h1>
          Grupo Du:{" "}
          <span className={styles.textoDestaque}>Inovação em Ação</span>
        </h1>
        <p>
          Somos um grupo empresarial consolidado no mercado, com atuação
          estratégica em diferentes segmentos, sempre mantendo o foco na
          qualidade, inovação e na satisfação completa dos nossos clientes.
        </p>
        <Button type="button" desativado={true} width="30%" href="#">
          Loja em breve!
        </Button>
        <ArrowDown className={styles.arrowDown} />
      </div>
      <div className={styles.sobreSection}>
        <div className={styles.sobreText}>
          <h2>Nossa História e Propósito</h2>
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
          <h1>
            Três Empresas,{" "}
            <span className={styles.textoDestaque}>Uma Visão</span>
          </h1>
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
          <div className={styles.cardDesktop}>
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className={styles.cardMobile}>
            <SwiperComponent />
          </div>
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
          <div className={styles.button}>
            <Button
              type="link"
              theme="#0e2455ff"
              borda="white"
              color="white"
              width="100%"
              href="#formulario"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
        <ul>
          {diferencas.map((diferenca, index) => (
            <li key={index}>
              <CircleCheckBig color="white" className={styles.checkIcon} />
              <span>{diferenca}</span>
            </li>
          ))}
        </ul>
        <div className={styles.buttonMobile}>
          <Button type="link" width="10%" href="#">
            Solicitar Orçamento
          </Button>
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
    </div>
  );
}
