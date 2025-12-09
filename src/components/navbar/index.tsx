"use client";
// import Link from "next/link";
import styles from "./styles.module.scss";
import LogoGrupo from "../../../public/grupodu_new_logo.png";
import LogoDomMetal from "../../../public/dom-metal-icon.png";
import Image from "next/image";
import { LuShoppingCart, LuMenu, LuDownload } from "react-icons/lu";
// import Search from "../search";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
// import MenuMobile from "@/components/menu";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { checkNavbarOptions } from "@/utils/checkNavbarOptions";

const Navbar = () => {
  const [actualPage, setActualPage] = useState("inicio");
  const ref = useRef(null);
  const [opacity] = useScrollOpacity();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const [logos, setLogos] = useState<StaticImport>(LogoGrupo);
  const [segmento, setSegmento] = useState<string>("");

  const handleDownload = () => {
    const baseUrl = window.location.origin;
    const link = document.createElement("a");
    link.href = `${baseUrl}/catalogo.pdf`;
    link.download = "Catálogo Grupo Du.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openMenu = () => {
    setMenu(true);
  };

  // const closeMenu = () => {
  //   setMenu(false);
  // };

  useEffect(() => {
    setActualPage(checkNavbarOptions(pathname));

    if (pathname.includes("dom-metal")) {
      setLogos(LogoDomMetal);
      setSegmento("Dom Metal");
    } else {
      setLogos(LogoGrupo);
      setSegmento("Grupo Du");
    }
  }, [pathname, logos]);

  return (
    <>
      <nav
        ref={ref}
        style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
        className={styles.ContainerHeaderNav}
      >
        <div className={styles.logoContainer}>
          <Link href={"/"} className={styles.logoLink}>
            <Image
              src={logos ? logos : LogoGrupo}
              alt="Logo GD"
              className={` ${
                logos !== LogoGrupo ? styles.logoSegmentos : styles.logoImage
              }`}
            />
          </Link>
          <span>{segmento ? segmento : "Grupo Du"}</span>
        </div>
        <div className={styles.pagesLinks}>
          <Link
            href={"/"}
            className={`${actualPage === "inicio" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Início
          </Link>
          <Link
            // style={{ opacity: 0.2, cursor: "not-allowed" }}
            href={"/produtos"}
            className={`${actualPage === "produtos" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Produtos
          </Link>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={`${actualPage === "sobre" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Sobre
          </span>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={`${actualPage === "contatos" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Entre em Contato
          </span>
          <div className={styles.catalogo} onClick={handleDownload}>
            <span>Nosso Catalogo</span>
            <LuDownload color="black" className={styles.downloadIcon} />
          </div>
          {/* V--- OFF POR ENQUANTO ---V
        <div className={styles.carrinhoIcon}>
          <ShoppingCart color="black" className={styles.shoppingCart} />
          <div className={styles.itemsNumber}>{numeroItemsCarrinho}</div>
        </div> */}
          {/* <Search /> */}
        </div>
        <div className={styles.menuIcon} onClick={openMenu}>
          <LuMenu color="black" width={40} height={40} />
        </div>
      </nav>
      {/* <MenuMobile menu={menu} closeFunc={closeMenu} /> */}
    </>
  );
};

export default Navbar;
