"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  LuMail,
  LuPanelLeftClose,
  LuShoppingBasket,
  LuUsersRound,
} from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
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
        <LuPanelLeftClose color="white" width={30} height={30} />
        <span>Menu</span>
      </button>
      <div className={styles.pagesLinks}>
        <Link
          href="/"
          className={styles.link}
          onClick={() => props.closeFunc()}
        >
          <MdHomeFilled
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
          <LuShoppingBasket color="black" />
          <span>Produtos</span>
        </div>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <LuUsersRound color="black" />
          <span>Sobre</span>
        </div>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <LuMail color="black" />
          <span>Entre em contato</span>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobile;
