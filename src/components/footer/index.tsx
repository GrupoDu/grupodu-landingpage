import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
          <h3>Grupo Du Car</h3>
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
          <h3>Segmentos</h3>
          <hr />
          <ul>
            <li>
              <Link href={"#"} className={styles.links}>
                Dom Metal
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                DuFerro
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                Carbuilt
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.servicos}>
          <h3>Serviços</h3>
          <hr />
          <ul>
            <li>
              <Link href={"#"} className={styles.links}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                Produtos
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.middle}>
        <div className={styles.infosContatos}>
          <h3>Informações de Contato</h3>
          <hr />
          <div className={styles.contato}>
            <Phone color="#6592f1ff" className={styles.icon} />
            <span>(81) 99904-0919</span>
          </div>
          <div className={styles.contato}>
            <Mail color="#6592f1ff" className={styles.icon} />
            <span>duferrom@gmail.com</span>
          </div>
          <div className={styles.contato}>
            <MapPin color="#6592f1ff" className={styles.icon} />
            <span>Av. Pan Nordestina, 655</span>
          </div>
        </div>
        <div className={styles.linksRapidos}>
          <h3>Links Rápidos</h3>
          <hr />
          <ul>
            <li>
              <Link href={"/"} className={styles.links}>
                Início
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                Segmentos
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                contato
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                Sobre
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.emailNovidade}>
          <h3>Novidades</h3>
          <hr />
          <p>Receba atualizações sobre nossos projetos e novidades do grupo</p>
          <div className={styles.inputEmail}>
            <input type="email" name="email" placeholder="Seu e-mail" />
            <button>Inscrever</button>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <span>&copy; 2025 Grupo Du Car. Todos os direitos reservados</span>
      </div>
    </div>
  );
};

export default Footer;
