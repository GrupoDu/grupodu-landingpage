import CardSegmento from "@/components/cardSegmento";
import styles from "./page.module.scss";
import { infoSegmentos } from "@/constants/segmentos";
import Main from "@/components/main";
import { FiltersSidebar } from "@/components/filtersSidebar";

const ProdutosPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.contentContainer}>
          <h1>Explore nosso catálogo</h1>
          <p>
            Do canteiro de obras à sua academia ou ambiente planejado, reunimos
            em uma única vitrine nossas soluções para construção, móveis sob
            medida e equipamentos de musculação. Qualidade, resistência e design
            pensados para atender empresas, profissionais e projetos de todos os
            portes.
          </p>
          <div className={styles.segmentos}>
            {infoSegmentos.map((info, index) => (
              <CardSegmento
                key={index}
                src={info.img.src}
                alt={info.img.alt}
                gradient={info.gradient}
                text={info.title}
                link={info.page}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <FiltersSidebar />
        <div className={styles.productsContainer}>
          <Main id="produtos" />
        </div>
      </div>
    </div>
  );
};

export default ProdutosPage;
