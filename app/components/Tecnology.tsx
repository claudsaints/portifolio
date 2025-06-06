"use client";
import { technologies } from "@/app/data/tec";
import TechnologyCard from "@/app/components/TecnologyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Tecnology() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4 font-orbitron mx-8 md:mx-14 landscape-mobile:mx-16 ">Tecnologias</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-3/5 h-[420px]"
        onSlideChange={(swiper) => swiper.update()}
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <TechnologyCard tech={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #BE3144 !important;

          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #8E1616 !important;
      
        }
        .swiper-button-next, .swiper-button-prev {
          color: #BE3144 !important;
          text-shadow: 0 0 8px #8E1616;
          font-size: 2.5rem !important;
        }
      `}</style>
      
    </>
  );
}
