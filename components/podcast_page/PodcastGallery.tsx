"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PodcastGallery() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data = [
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
  ];
  return (
    <div className="w-full h-[20rem] flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        effect={"coverflow"}
        navigation
        centeredSlides={true}
        autoplay
        loop={true}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        className="flex justify-center items-center w-full"
      >
        {data.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }: any) => (
                <img
                  src={image.image_src}
                  alt=""
                  className={`select-none rounded-lg ${isActive ? "scale-100" : "scale-[0.85]"} `}
                  draggable={false}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
