"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  LuDownload,
  LuMail,
  LuPanelRightClose,
  LuShoppingBasket,
  LuUsersRound,
} from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { downloadFullCatalog } from "@/utils/downloadFullCatalog";
import ButtonDecoration from "../ui/buttons/buttonDecoration";

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
        <LuPanelRightClose
          color="white"
          width={40}
          height={40}
          className={styles.closeMenuIcon}
        />
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
            className={styles.linkIcons}
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
        <Link href={"/produtos"} className={styles.link}>
          <LuShoppingBasket color={actualPage === "produtos" ? "var(--blue-light)" : "black"} className={styles.linkIcons} />
          <span style={actualPage === "produtos" ? { fontWeight: "bold", color: "var(--blue-light)" } : {}}>
            Produtos
          </span>
        </Link>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <LuUsersRound color="black" className={styles.linkIcons} />
          <span>Sobre</span>
        </div>
        <div className={styles.link} style={{ opacity: 0.2 }}>
          <LuMail color="black" className={styles.linkIcons} />
          <span>Entre em contato</span>
        </div>
        <div className={styles.buttonDownloadCatalog}>
          <ButtonDecoration
            theme="#201750"
            color="white"
            border="#201750"
            borderRadius=".4rem"
            type="button"
            click={downloadFullCatalog}
          >
            Nosso Catalogo
            <LuDownload color="black" className={styles.downloadIcon} />
          </ButtonDecoration>
        </div>
      </div>
    </nav>
  );
};

export default MenuMobile;
