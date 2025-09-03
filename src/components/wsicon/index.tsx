import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";
import React from "react";
import Link from "next/link";

const WsIcon = () => {
  return (
    <Link
      href={"https://wa.me/5581999040919"}
      className={styles.wsIconContainer}
    >
      <FaWhatsapp color="white" className={styles.wsIcon} />
    </Link>
  );
};

export default WsIcon;
