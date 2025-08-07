import { Instagram, Linkedin } from "lucide-react";
import Whatsapp from "../../../public/whatsapp.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.upper}>
        <div className={styles.marcaGrupo}>
          <h2>Grupo Du Car</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            ratione quis ad similique, quo totam aspernatur!
          </p>
          <div className={styles.socialsIcons}>
            <Instagram color="white" />
            <Linkedin color="white" />
            <Image src={Whatsapp} alt={"whatsappIcon"} />
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
