"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@/css/customSwiper.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useScrollBlock } from "@/hooks/useScrollBlock";
import { useState } from "react";

const CorporateFotoGrid = ({ data }: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [blackOverlay, setBlackOverlay] = useState<boolean>(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleClick = (slide_index: number) => {
    blockScroll();
    setBlackOverlay(true);
    setCurrentSlide(slide_index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-[3rem]">
      <h1 className="text-white text-[32px] mb-[2rem] font-mustica-semibold">
        Fotografie Corporate
      </h1>

      {/* OVERLAY START */}
      {blackOverlay ? (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setBlackOverlay(false);
              allowScroll();
            }
          }}
          className={`fixed bottom-0 z-[1000] left-0 w-full h-screen bg-black bg-opacity-90 flex justify-center items-center`}
        >
          <div
            onClick={() => {
              setBlackOverlay(false);
              allowScroll();
            }}
            className="flex justify-center items-center absolute h-[10rem] w-[10rem] z-[1000] top-[5rem] right-[-0.5rem] xl:top-[5rem] xl:right-[13rem]"
          >
            <div className="z-[1000] w-[64px] h-[44px] cursor-pointer border border-white text-white flex justify-center items-center bg-black rounded-lg bg-opacity-80">
              <img
                src="/assets/closeButton.svg"
                alt="close Gallery Button"
                className="select-none"
                draggable={false}
              />
            </div>
          </div>
          <div className="w-full h-[20rem] flex justify-center items-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              effect={"coverflow"}
              navigation
              centeredSlides={true}
              initialSlide={currentSlide}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              className="flex justify-center items-center w-[80%] h-[40rem]"
            >
              {data.map((image: any, index: any) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full rounded-2xl"
                  >
                    {({ isActive }: any) => (
                      <img
                        src={urlFor(image.image_src).url()}
                        alt=""
                        className={`${isActive ? "scale-100" : "scale-100"} select-none rounded-2xl cursor-pointer object-contain w-full h-full`}
                        draggable={false}
                        onClick={() => handleClick(index)}
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* OVERLAY END */}

      <div className="columns-1 px-[1rem] md:columns-2 lg:columns-3 w-full">
        {data.map((photo: any, index: number) => {
          return (
            <div
              key={index}
              className="FOTO_CONTAINER relative mb-[20px] rounded-lg w-full break-inside-avoid hover:md:cursor-pointer md:duration-150 hover:md:scale-[105%] md:transition-all hover:md:outline hover:md:outline-white hover:md:outline-[1px]"
            >
              <div
                onClick={() => handleClick(index)}
                className="FOTO_OVERLAY w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-black to-purple-500 opacity-10 hidden"
              />
              <Image
                width={700}
                height={700}
                src={urlFor(photo.image_src).url()}
                alt={photo}
                className="select-none object-contain rounded-lg max-w-full"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CorporateFotoGrid;
