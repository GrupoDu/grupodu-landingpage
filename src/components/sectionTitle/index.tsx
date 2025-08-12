import React from "react";
import styles from "./styles.module.scss";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.sectionTitleContainer}>
      <span>{children}</span>
    </div>
  );
};

export default SectionTitle;
