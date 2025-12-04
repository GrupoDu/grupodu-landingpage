"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { textosCardProdutos } from "@/constants/cards";
import CardProdutos from "../ui/cardProdutos";

type cardTexts = {
  titulo: string;
  bullets: string[];
  imagens: never[];
  href: string;
  buttonTxt: string;
};

const ListaCatalogo = () => {
  const [catalogo, setCatalogo] = useState<cardTexts[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("dom-metal")) {
      setCatalogo(textosCardProdutos.segmentos["dom-metal"]);
    } else if (pathname.includes("duferro")) {
      //   setCatalogo(textosCardProdutos.segmentos["duferro"]);
    } else if (pathname.includes("carbuilt")) {
      //   setCatalogo(textosCardProdutos.segmentos["carbuilt"]);
    } else {
      setCatalogo([]);
    }
  }, [pathname]);

  return (
    <ul className={styles.container}>
      {catalogo.map((card, index) => (
        <li key={index}>
          <CardProdutos
            href={card.href}
            titulo={card.titulo}
            bullets={card.bullets}
            buttonScheme="#4347FF"
            buttonTxt={card.buttonTxt}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListaCatalogo;
