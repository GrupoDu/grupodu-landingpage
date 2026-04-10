import styles from "./styles.module.scss";

/**
 * Componente de Bullet para a seção Product
 *
 * @param {{bullet: string}} props
 * @param {string} props.text - Texto do bullet
 */
export const BulletProduct = ({ text }: { text: string }) => {
  return (
    <div className={styles.bullets}>
      <p>{text}</p>
    </div>
  );
};
