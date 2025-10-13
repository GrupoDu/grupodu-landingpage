"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Breadcrumbs = ({
  paginaAtual,
  paginaAnterior,
}: {
  paginaAtual: string;
  paginaAnterior: string;
}) => {
  const pathname = usePathname();
  const paginaAnteriorHref = `/${paginaAnterior.replace(" ", "-")}`;
  const router = useRouter();

  return (
    <div className={styles.breadcrumbs}>
      <Link href={"/"}>Início</Link>
      <MdKeyboardArrowRight />
      <span onClick={() => router.push(paginaAnteriorHref)}>{paginaAnterior}</span>
      <MdKeyboardArrowRight />
      <span>
        <strong>{paginaAtual}</strong>
      </span>
    </div>
  );
};

export default Breadcrumbs;
