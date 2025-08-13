"use client";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import Image from "next/image";
import {
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MailIcon,
  MapPin,
  Phone,
} from "lucide-react";
import Whatsapp from "../../../public/whatsapp.svg";
import Link from "next/link";

const MapaLeaflet = dynamic(() => import("../mapaLeaflet/index"), {
  ssr: false,
});

export default function InfoContatos() {
  return (
    <div className={styles.infoContatosContainer}>
      <div style={{ height: "300px", width: "100%", borderRadius: "100px" }}>
        <MapaLeaflet />
      </div>
      <div className={styles.contatos}>
        <div className={styles.contato}>
          <MapPin color="#2563EB" className={styles.icons} />
          <div className={styles.textInfos}>
            <h4>Endereço</h4>
            <Link href={"https://maps.app.goo.gl/PDCaaNAbKHh6k6yy8"}>
              Av. Pan Nordestina, 655 - Varadouro, Olinda - PE, 53010-210,
              Brasil
            </Link>
          </div>
        </div>
        <div className={styles.contato}>
          <Phone color="#2563EB" className={styles.icons} />
          <div className={styles.textInfos}>
            <h4>Telefone</h4>
            <span>(81) 99904-0919</span>
          </div>
        </div>
        <div className={styles.contato}>
          <Mail color="#2563EB" className={styles.icons} />
          <div className={styles.textInfos}>
            <h4>Email</h4>
            <span>duferrom@gmail.com</span>
          </div>
        </div>
        <div className={styles.social}>
          <h4>Siga-nos</h4>
          <div className={styles.iconsSocials}>
            <Link
              href={"#"}
              className={`${styles.iconSocial} ${styles.linkedin}`}
            >
              <LinkedinIcon color="white" />
            </Link>
            <Link
              href={"#"}
              className={`${styles.iconSocial} ${styles.instagram}`}
            >
              <InstagramIcon color="white" />
            </Link>
            <Link
              href={"https://wa.me/5581999040919"}
              className={`${styles.iconSocial} ${styles.whatsapp}`}
            >
              <Image src={Whatsapp} alt="whatsapp" />
            </Link>
            <Link href={"#"} className={`${styles.iconSocial} ${styles.email}`}>
              <MailIcon color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
