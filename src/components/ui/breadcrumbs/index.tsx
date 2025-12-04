"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

type Props = {
  paginaAtual: string;
  paginaAnterior: string;
};

const Breadcrumbs = ({ paginaAtual, paginaAnterior }: Props) => {
  const paginaAnteriorHref = `/${paginaAnterior.replace(" ", "-")}`;
  const router = useRouter();

  return (
    <div className={styles.breadcrumbs}>
      <Link href={"/"}>Início</Link>
      <MdKeyboardArrowRight />
      <span onClick={() => router.push(paginaAnteriorHref)}>
        {paginaAnterior}
      </span>
      <MdKeyboardArrowRight />
      <span>
        <strong>{paginaAtual}</strong>
      </span>
    </div>
  );
};

export default Breadcrumbs;
