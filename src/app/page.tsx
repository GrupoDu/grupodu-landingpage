import styles from "./page.module.scss";
import Button from "@/components/button";
import ValorElement from "@/components/valorElement";
import SectionTitle from "@/components/sectionTitle";
import Segmento from "@/components/segmento";
import Card from "@/components/card";
import Estados from "@/components/estados";

// Imagens
import DomMetal from "../../public/Logo dom metal.png";
import DuFerro from "../../public/DuFerro.png";
import Carbuilt from "../../public/Carbuilt.png";
import {
  carbuilt,
  cards,
  diferencas,
  domMetal,
  duFerro,
} from "@/constants/textos";
import { ArrowDown, CircleCheckBig } from "lucide-react";
import InfoContatos from "@/components/infosContatos";
import Form from "@/components/form";

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
      <div className={styles.sobreSections}>
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
        <div className={styles.valores}>
          <h2>Nossos valores fundamentais</h2>
          <ul>
            <li>
              <ValorElement
                title="Excelência Operacional"
                description="Busca constante pela perfeição em cada processo, projeto e entrega."
              />
            </li>
            <li>
              <ValorElement
                title="Inovação Contínua"
                description="Investimento em tecnologia e metodologias para superar expectativas."
              />
            </li>
            <li>
              <ValorElement
                title="Relacionamentos Duradouros"
                description="Construção de parcerias baseadas em confiança e transparência."
              />
            </li>
            <li>
              <ValorElement
                title="Responsabilidade Social"
                description="Compromisso com impacto positivo na sociedade e meio ambiente."
              />
            </li>
          </ul>
        </div>
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
        <div className={styles.segments}>
          <Segmento
            src={DomMetal}
            title={domMetal.nome}
            subtitle={domMetal.subtitulo}
            description={domMetal.descricao}
            especialidades={domMetal.especialidades}
          />
          <Segmento
            src={DuFerro}
            title={duFerro.nome}
            subtitle={duFerro.subtitulo}
            description={duFerro.descricao}
            especialidades={duFerro.especialidades}
          />
          <Segmento
            src={Carbuilt}
            title={carbuilt.nome}
            subtitle={carbuilt.subtitulo}
            description={carbuilt.descricao}
            especialidades={carbuilt.especialidades}
          />
        </div>
      </div>
      <div className={styles.motivoEscolha}>
        <h1>Por quê Escolher o Grupo Du Car?</h1>
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
              <CircleCheckBig color="white" />
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
