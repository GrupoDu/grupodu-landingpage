import { Instagram, Linkedin } from "lucide-react";
import Whatsapp from "../../../public/whatsapp.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.upper}>
        <div className={styles.marcaGrupo}>
          <h2>Grupo Du Car</h2>
          <hr />
          <p>
            Eficiênca na sua obra, estilo no seu lar, e desempenho na sua
            evolução!
          </p>
          <div className={styles.socialsIcons}>
            <Link href={""} target="_blank">
              <Instagram color="white" />
            </Link>
            <Link href={""} target="_blank">
              <Linkedin color="white" />
            </Link>
            <Link href={"https://wa.me/5581999040919"} target="_blank">
              <Image src={Whatsapp} alt={"whatsappIcon"} />
            </Link>
          </div>
        </div>
        <div className={styles.segmentos}>
          <h4>Segmentos</h4>
          <span>Dom Metal</span>
          <span>Duferro</span>
          <span>Carbuilt</span>
        </div>
        <div className={styles.servicos}>
          <h4>Serviços</h4>
          <span>Sobre nós</span>
          <span>Produtos</span>
        </div>
        <div className={styles.contatos}>
          <h4>Contatos</h4>
          <span>(81) 99904-0919</span>
          <span>duferrom@gmail.com</span>
        </div>
      </div>
      <div className={styles.down}>
        <span>&copy; 2025 Grupo Du Car. Todos os direitos reservados</span>
      </div>
    </div>
  );
};

export default Footer;
