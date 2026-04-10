"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { textosCardProdutos } from "@/constants/cards";
import { CardProductType } from "../cardsComponents/cardProductType";

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
  const isDomMetalPage = pathname.includes("dom-metal");

  useEffect(() => {
    if (isDomMetalPage) {
      setCatalogo(textosCardProdutos.segmentos["dom-metal"]);
    } else {
      setCatalogo([]);
    }
  }, [pathname]);

  return (
    <ul className={styles.catalogListContainer}>
      {catalogo.map((card, index) => (
        <li key={index}>
          <CardProductType
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
