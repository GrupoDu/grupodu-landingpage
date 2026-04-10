import styles from "./styles.module.scss";
import { LuCheckCheck } from "react-icons/lu";

/**
 * Componente de Bullet para a seção Hero
 *
 * @param {{texto: string}} props
 * @param {string} props.texto - Texto do bullet
 */
export const BulletHeroSection = ({ texto }: { texto: string }) => {
  return (
    <div className={styles.bullets}>
      <LuCheckCheck />
      <p>{texto}</p>
    </div>
  );
};
