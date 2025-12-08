import styles from "./styles.module.scss";
import { LuCheckCheck } from "react-icons/lu";

export const BulletHeroSection = ({ texto }: { texto: string }) => {
  return (
    <div className={styles.bullets}>
      <LuCheckCheck />
      <p>{texto}</p>
    </div>
  );
};