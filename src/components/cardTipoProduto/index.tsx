"use client";

import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { Check } from "lucide-react";
import ButtonBorder from "../buttonBorder";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Produto } from "@/@types/produto";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Props = {
  titulo: string;
  bullets: string[];
  // imagem?: StaticImageData;
  buttonScheme: string;
  href: string;
  buttonTxt: string;
};

const ImageTemplate = () => {
  return (
    <div className={styles.imagemTemplate}>
      <ImageIcon opacity={0.4} width={80} height={80} />
      <span>Não foi possível carregar os produtos</span>
    </div>
  );
};

const CardTipoProduto = ({
  titulo,
  bullets,
  buttonScheme,
  href,
  buttonTxt,
}: Props) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/database");
        const data = await response.json();

        if (titulo === "Carro de Mão para Construção Civil") {
          setProdutos(
            data.filter(
              (product: Produto) => product.tipo_produto === "carro de mão"
            )
          );
        } else if (titulo === "Masseiras para Obra e Argamassa") {
          setProdutos(
            data.filter(
              (product: Produto) => product.tipo_produto === "masseira"
            )
          );
        } else if (titulo === "Plataforma de Trabalho para Construção") {
          setProdutos(
            data.filter(
              (product: Produto) => product.tipo_produto === "plataforma"
            )
          );
        }
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [titulo]);

  return (
    <div className={styles.container}>
      {produtos.length === 0 ? (
        <ImageTemplate />
      ) : (
        <Swiper
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {produtos.map((produto, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Image
                src={produto.imagem}
                alt={titulo}
                className={styles.imagem}
                width={400}
                height={400}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className={styles.content}>
        <h4>{titulo}</h4>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index}>
              <Check color="#515151" />
              <p>{bullet}</p>
            </li>
          ))}
        </ul>
        <ButtonBorder
          type="link"
          href={href}
          borda={buttonScheme}
          color="white"
          theme={buttonScheme}
          borderRadius="6px"
        >
          {buttonTxt} <MdKeyboardArrowRight />
        </ButtonBorder>
      </div>
    </div>
  );
};

export default CardTipoProduto;
