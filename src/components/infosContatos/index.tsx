"use client";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";

const MapaLeaflet = dynamic(() => import("../mapaLeaflet/index"), {
  ssr: false,
});

export default function InfoContatos() {
  return (
    <div className={styles.infoContatosContainer}>
      <h2>Fale conosco</h2>
      <p>Endereço, telefone, email...</p>

      {/* Aqui o mapa */}
      <div style={{ height: "500px", width: "100%" }}>
        <MapaLeaflet />
      </div>
    </div>
  );
}
