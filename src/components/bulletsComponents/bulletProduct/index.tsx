import styles from "./styles.module.scss";

const BulletProduct = ({ bullet }: { bullet: string }) => {
  return (
    <div className={styles.bullets}>
      <p>{bullet}</p>
    </div>
  );
};

export default BulletProduct;