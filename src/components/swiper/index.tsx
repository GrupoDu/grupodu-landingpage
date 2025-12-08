"use client";

import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { cards } from "@/constants/textos";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import CardReasonToChoose from "../cardsComponents/cardReasonToChoose";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className={styles.swiperContainer}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <CardReasonToChoose
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
