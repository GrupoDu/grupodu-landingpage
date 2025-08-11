import Image from "next/image";
import styles from "./page.module.scss";
import DomMetalLogo from "../../public/Logo dom metal.png";
import DuFerroLogo from "../../public/DuFerro.png";
import CarbuiltLogo from "../../public/Carbuilt.png";
import Button from "@/components/button";
import ValorElement from "@/components/valorElement";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcome}>
        <div className={styles.title}>
          <h1>Grupo Du: </h1>
          <h1 className={styles.titleGradient}>Inovação em Ação</h1>
        </div>
        <p>
          Somos um grupo empresarial consolidado no mercado, com atuação
          estratégica em diferentes segmentos, sempre mantendo o foco na
          qualidade, inovação e na satisfação completa dos nossos clientes.
        </p>
        <Button width="--sm" disabled={true} type="button">
          Loja em breve!
        </Button>
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
            empresas especializadas: Dom Metal em estruturas metálicas, DuFerro
            em soluções e carrinhos, e CarBuilt em soluções automotivas.
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
      <section className={styles.domMetalSection}>
        <div className={styles.imageTitleSegment}>
          <Image
            src={DomMetalLogo}
            alt="Logo Dom Metal"
            className={styles.logoImages}
          />
          <h1>Dom Metal</h1>
        </div>
        <div className={styles.aboutSegment}>
          <h1>Dom Metal</h1>
          <p>
            Especialista na produção de equipamentos voltados para a construção
            civil, a Dom Metal fabrica carrinhos de mão, bandejas, masseiras e
            diversos produtos para obras, garantindo robustez, praticidade e
            eficiência para o dia a dia dos profissionais da área.
          </p>
          <Button type="button" width="--l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
      <section className={styles.duferroSection}>
        <div className={styles.imageTitleSegment}>
          <Image
            src={DuFerroLogo}
            alt="Logo DuFerro"
            className={styles.logoImages}
          />
          <h1>DuFerro</h1>
        </div>
        <div className={styles.aboutSegment}>
          <h1>DuFerro</h1>
          <p>
            A DuFerro é referência na fabricação de móveis planejados em
            metalon, unindo resistência, funcionalidade e design moderno. Cada
            peça é pensada sob medida, oferecendo soluções elegantes e duráveis
            para residências, comércios e espaços corporativos.
          </p>
          <Button type="button" width="--l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
      <section className={styles.carbuiltSection}>
        <div className={styles.imageTitleSegment}>
          <Image
            src={CarbuiltLogo}
            alt="Logo Carbuilt"
            className={styles.logoImages}
          />
          <h1>Carbuilt</h1>
        </div>
        <div className={styles.aboutSegment}>
          <h1>Carbuilt</h1>
          <p>
            Com foco em performance e tecnologia, a Carbuilt desenvolve
            equipamentos de musculação com alto padrão de engenharia, ideais
            para academias e espaços fitness que buscam excelência em ergonomia,
            durabilidade e desempenho. aspernatur ab ea excepturi.
          </p>
          <Button type="button" width="--l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
    </div>
  );
}
