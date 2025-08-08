"use client";
// import Link from "next/link";
import styles from "./styles.module.scss";
import LogoGrupo from "../../../public/logo-grupodu.png";
import Image from "next/image";
import { HamburgerIcon, ShoppingCart, Menu } from "lucide-react";
import Search from "../search";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuMobile from "@/components/menu";

const HeaderNav = () => {
  // const numeroItemsCarrinho: number = 2;
  const [actualPage, setActualPage] = useState("inicio");
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

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
    } else {
      setActualPage("inicio");
    }
  }, [pathname]);

  return (
    <>
      <nav className={styles.ContainerHeaderNav}>
        <div className={styles.logoContainer}>
          <Image src={LogoGrupo} alt="Logo GD" className={styles.logoImage} />
          <h3>Grupo Du Car</h3>
        </div>
        <div className={styles.pagesLinks}>
          <span className={actualPage === "inicio" ? styles.actualPage : ""}>
            Início
          </span>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={actualPage === "produtos" ? styles.actualPage : ""}
          >
            Produtos
          </span>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={actualPage === "sobre" ? styles.actualPage : ""}
          >
            Sobre
          </span>
          <span
            style={{ opacity: 0.2, cursor: "not-allowed" }}
            className={actualPage === "contatos" ? styles.actualPage : ""}
          >
            Entre em Contato
          </span>
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
      <MenuMobile menu={menu} closeFunc={closeMenu}/>
    </>
  );
};

export default HeaderNav;
