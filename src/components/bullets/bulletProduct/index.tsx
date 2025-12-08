import styles from "./styles.module.scss";

export const BulletProduct = ({ bullet }: { bullet: string }) => {
  return (
    <div className={styles.bullets}>
      <p>{bullet}</p>
    </div>
  );
};