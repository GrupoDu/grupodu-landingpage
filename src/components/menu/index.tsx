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
import { ButtonDecoration } from "../ui/buttons/buttonDecoration";
import { checkURLContext } from "@/utils/checkURLContext";

type MenuMobileProps = {
  menu: boolean;
  closeFuncAction: () => void;
};

/**
 * Componente que renderiza o menu para dispositivos móveis
 *
 * @param props
 * @see {MenuMobileProps}
 */
export const MenuMobile = (props: MenuMobileProps) => {
  const { menu, closeFuncAction } = props;

  const [actualPage, setActualPage] = useState("inicio");
  const pathname = usePathname();
  const isHomePage = actualPage === "inicio";

  useEffect(() => setActualPage(checkURLContext(pathname)), [pathname]);

  return (
    <nav className={`${styles.menuContainer} ${menu && styles.showMenu}`}>
      <button className={styles.closeButton} onClick={() => closeFuncAction()}>
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
          onClick={() => closeFuncAction()}
        >
          <MdHomeFilled
            color={isHomePage ? "var(--blue-light)" : "black"}
            className={styles.linkIcons}
          />
          <span
            style={
              isHomePage
                ? { color: "var(--blue-light)", fontWeight: "bold" }
                : { color: "var(--blue-dark)" }
            }
          >
            Início
          </span>
        </Link>
        <Link href={"/produtos"} className={styles.link}>
          <LuShoppingBasket
            color={actualPage === "produtos" ? "var(--blue-light)" : "black"}
            className={styles.linkIcons}
          />
          <span
            style={
              actualPage === "produtos"
                ? { fontWeight: "bold", color: "var(--blue-light)" }
                : {}
            }
          >
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
