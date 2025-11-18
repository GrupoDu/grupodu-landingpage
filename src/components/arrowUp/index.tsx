"use client";

import React from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

const ArrowUp = () => {
  const [opcaity, opacityUp] = useScrollOpacity();

  return (
    <Link
      href={"#hero"}
      style={{
        opacity: opacityUp,
        transition: "opacity 0.3s ease-in-out",
      }}
      className={styles.container}
    >
      <MdKeyboardArrowUp
        className={styles.icon}
        style={{
          opacity: opacityUp,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </Link>
  );
};

export default ArrowUp;
