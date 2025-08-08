"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  HomeIcon,
  MailIcon,
  PanelLeftCloseIcon,
  ShoppingBasketIcon,
  UsersRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  menu: boolean;
  closeFunc: () => void;
};

const MenuMobile = (props: Props) => {
  const [actualPage, setActualPage] = useState("inicio");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("produtos")) {
      setActualPage("produtos");
    } else if (pathname.includes("sobre")) {
      setActualPage("sobre");
    } else if (pathname.includes("contato")) {
      setActualPage("contato");
    } else {
      setActualPage("inicio");
    }
  }, [pathname]);

  return (
    <nav
      className={`${styles.menuContainer} ${
        props.menu === true ? styles.showMenu : ""
      }`}
    >
      <button className={styles.closeButton} onClick={() => props.closeFunc()}>
        <PanelLeftCloseIcon color="white" width={30} height={30} />
        <span>Menu</span>
      </button>
      <div className={styles.pagesLinks}>
        <Link
          href="/"
          className={styles.link}
          onClick={() => props.closeFunc()}
        >
          <HomeIcon
            color={actualPage === "inicio" ? "var(--blue-light)" : "black"}
          />
          <span
            style={
              actualPage === "inicio"
                ? { color: "var(--blue-light)", fontWeight: "bold" }
                : { color: "var(--blue-dark)" }
            }
          >
            Início
          </span>
        </Link>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <ShoppingBasketIcon color="black" />
          <span>Produtos</span>
        </div>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <UsersRoundIcon color="black" />
          <span>Sobre</span>
        </div>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <MailIcon color="black" />
          <span>Entre em contato</span>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobile;
