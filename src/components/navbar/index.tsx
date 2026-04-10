"use client";
import styles from "./styles.module.scss";
import LogoGrupo from "../../../public/grupodu_new_logo.png";
import LogoDomMetal from "../../../public/dom-metal-icon.png";
import Image from "next/image";
import { LuMenu, LuDownload } from "react-icons/lu";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { checkURLContext } from "@/utils/checkURLContext";
import { MenuMobile } from "../menu";
import { downloadFullCatalog } from "@/utils/downloadFullCatalog";

const Navbar = () => {
  const [actualPage, setActualPage] = useState("inicio");
  const ref = useRef(null);
  const [opacity] = useScrollOpacity();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const [logo, setLogo] = useState<StaticImport>(LogoGrupo);
  const [segmento, setSegmento] = useState<string>("");
  const isProductPage = actualPage === "produtos";
  const isAboutPage = actualPage === "sobre";
  const isHomePage = actualPage === "inicio";
  const isContactsPage = actualPage === "contatos";
  const notAvailableStyle: CSSProperties = {
    opacity: 0.2,
    cursor: "not-allowed",
  };

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    setActualPage(checkURLContext(pathname));

    if (pathname.includes("dom-metal")) {
      setLogo(LogoDomMetal);
      setSegmento("Dom Metal");
    } else {
      setLogo(LogoGrupo);
      setSegmento("Grupo Du");
    }
  }, [pathname, logo]);

  return (
    <>
      <nav ref={ref} style={{ opacity }} className={styles.ContainerHeaderNav}>
        <div className={styles.logoContainer}>
          <Link href={"/"} className={styles.logoLink}>
            <Image
              src={logo ? logo : LogoGrupo}
              alt="Logo GD"
              className={` ${
                logo !== LogoGrupo ? styles.logoSegmentos : styles.logoImage
              }`}
            />
          </Link>
          <span>{segmento ? segmento : "Grupo Du"}</span>
        </div>
        <div className={styles.pagesLinks}>
          <Link
            href={"/"}
            className={`${isHomePage && styles.actualPage} ${styles.pageLink}`}
          >
            Início
          </Link>
          <Link
            href={"/produtos"}
            className={`${isProductPage && styles.actualPage} ${
              styles.pageLink
            }`}
          >
            Produtos
          </Link>
          <span
            style={notAvailableStyle}
            className={`${isAboutPage && styles.actualPage} ${styles.pageLink}`}
          >
            Sobre
          </span>
          <span
            style={notAvailableStyle}
            className={`${isContactsPage && styles.actualPage} ${
              styles.pageLink
            }`}
          >
            Entre em Contato
          </span>
          <div className={styles.catalogo} onClick={downloadFullCatalog}>
            <span>Nosso Catalogo</span>
            <LuDownload color="black" className={styles.downloadIcon} />
          </div>
        </div>
        <div className={styles.menuIconContainer} onClick={openMenu}>
          <LuMenu color="black" className={styles.icon} />
        </div>
      </nav>
      <MenuMobile menu={menu} closeFuncAction={closeMenu} />
    </>
  );
};

export default Navbar;
