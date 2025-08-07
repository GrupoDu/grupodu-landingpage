import Image from "next/image";
import styles from "./page.module.scss";
import DomMetalLogo from "../../public/Logo dom metal.png";
import DuFerroLogo from "../../public/DuFerro.png";
import CarbuiltLogo from "../../public/Carbuilt.png";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcome}>
        <h1>Bem vindo(a) ao Grupo Du Car</h1>
        <p>
          Eficiênca na sua obra, estilo no seu lar, e desempenho na sua
          evolução!
        </p>
        <Button disabled={true} type="button">
          Loja em breve!
        </Button>
      </div>
      <div className={styles.slideImages}></div>
      <section className={styles.domMetalSection}>
        <Image
          src={DomMetalLogo}
          alt="Logo Dom Metal"
          className={styles.logoImages}
        />
        <div className={styles.aboutSegment}>
          <h1>Dom Metal</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            officia incidunt necessitatibus reprehenderit ex quidem! Temporibus
            natus quisquam illo, impedit commodi nobis dolore quaerat at culpa
            aspernatur ab ea excepturi.
          </p>
          <Button type="button" width="l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
      <section className={styles.duferroSection}>
        <Image
          src={DuFerroLogo}
          alt="Logo DuFerro"
          className={styles.logoImages}
        />
        <div className={styles.aboutSegment}>
          <h1>DuFerro</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            officia incidunt necessitatibus reprehenderit ex quidem! Temporibus
            natus quisquam illo, impedit commodi nobis dolore quaerat at culpa
            aspernatur ab ea excepturi.
          </p>
          <Button type="button" width="l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
      <section className={styles.carbuiltSection}>
        <Image
          src={CarbuiltLogo}
          alt="Logo Carbuilt"
          className={styles.logoImages}
        />
        <div className={styles.aboutSegment}>
          <h1>Carbuilt</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            officia incidunt necessitatibus reprehenderit ex quidem! Temporibus
            natus quisquam illo, impedit commodi nobis dolore quaerat at culpa
            aspernatur ab ea excepturi.
          </p>
          <Button type="button" width="l" disabled={true}>
            Loja em breve!
          </Button>
        </div>
      </section>
    </div>
  );
}
