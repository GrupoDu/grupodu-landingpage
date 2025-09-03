"use client";
// import Link from "next/link";
import styles from "./styles.module.scss";
import LogoGrupo from "../../../public/logo-grupodu.png";
import Image from "next/image";
import { HamburgerIcon, ShoppingCart, Menu, Download } from "lucide-react";
import Search from "../search";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import MenuMobile from "@/components/menu";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";
const Navbar = () => {
  const [actualPage, setActualPage] = useState("inicio");
  const ref = useRef(null);
  const opacity = useScrollOpacity();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

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

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (pathname.includes("produtos")) {
      setActualPage("produtos");
    } else if (pathname.includes("sobre")) {
      setActualPage("sobre");
    } else if (pathname.includes("contato")) {
      setActualPage("contatos");
    } else if (pathname.includes("produtoLanding")) {
      setActualPage("");
    } else {
      setActualPage("inicio");
    }
  }, [pathname]);

  return (
    <>
      <nav
        ref={ref}
        style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
        className={styles.ContainerHeaderNav}
      >
        <div className={styles.logoContainer}>
          <Image src={LogoGrupo} alt="Logo GD" className={styles.logoImage} />
          <h3>Grupo Du Car</h3>
        </div>
        <div className={styles.pagesLinks}>
          <span
            className={`${actualPage === "inicio" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Início
          </span>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={`${actualPage === "produtos" ? styles.actualPage : ""} ${
              styles.pageLink
            }`}
          >
            Produtos
          </span>
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
            <Download color="black" />
          </div>
          {/* V--- OFF POR ENQUANTO ---V
        <div className={styles.carrinhoIcon}>
          <ShoppingCart color="black" className={styles.shoppingCart} />
          <div className={styles.itemsNumber}>{numeroItemsCarrinho}</div>
        </div> */}
          {/* <Search /> */}
        </div>
        <div className={styles.menuIcon} onClick={openMenu}>
          <Menu color="black" width={40} height={40} />
        </div>
      </nav>
      <MenuMobile menu={menu} closeFunc={closeMenu} />
    </>
  );
};

export default Navbar;
