// import Link from "next/link";
import styles from "./styles.module.scss";
import LogoGrupo from "../../../public/logo-grupodu.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Search from "../search";

const HeaderNav = () => {
  const numeroItemsCarrinho: number = 2;

  return (
    <nav className={styles.ContainerHeaderNav}>
      <div className={styles.logoContainer}>
        <Image src={LogoGrupo} alt="Logo GD" className={styles.logoImage} />
        <h3>Grupo Du Car</h3>
      </div>
      <div className={styles.pagesLinks}>
        <span>Início</span>
        <span>Produtos</span>
        <span>Sobre</span>
        <span>Entre em Contato</span>
        <div className={styles.carrinhoIcon}>
          <ShoppingCart color="black" className={styles.shoppingCart} />
          <div className={styles.itemsNumber}>{numeroItemsCarrinho}</div>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default HeaderNav;
