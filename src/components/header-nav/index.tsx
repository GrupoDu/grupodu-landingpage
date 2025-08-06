import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const HeaderNav = () => {
  const numeroItemsCarrinho: number = 2;

  return (
    <nav className={styles.ContainerHeaderNav}>
      <div className={styles.logoContainer}>
        <Image />
        <h3>Grupo Du Car</h3>
      </div>
      <div className={styles.pagesLinks}>
        <span>Início</span>
        <span>Produtos</span>
        <span>Sobre</span>
        <span>Entre em Contato</span>
        <div className={styles.carrinhoIcon}>
          <ShoppingCart color="white" />
          <div className={styles.itemsNumber}>{numeroItemsCarrinho}</div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
