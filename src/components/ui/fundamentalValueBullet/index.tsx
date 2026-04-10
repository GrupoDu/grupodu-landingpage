import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { CircleCheck } from "lucide-react";

type Props = {
  title: string;
  children: ReactNode;
  isVisible: boolean;
};

/**
 * Componente que exibe um valor fundamental do grupo.
 *
 * @param {Props} props - Valores do item
 * @see {Props}
 */
export const FundamentalValueBullet = (props: Props) => {
  const { isVisible, title, children } = props;

  return (
    <div className={`${styles.valorContainer} ${isVisible && styles.visible}`}>
      <CircleCheck color="white" />
      <div className={styles.texts}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};
