import { ReactNode } from "react";
import styles from "./styles.module.scss";

/**
 *
 * @param prop
 * @param {ReactNode} prop.children - Texto do título
 * @constructor
 */
export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <span>{children}</span>
    </div>
  );
};
