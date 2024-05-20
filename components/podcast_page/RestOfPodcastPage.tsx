"use client";

import PovestileBune from "@/components/podcast_page/PovestileBune";
import Footer from "@/components/index_page/Footer";
import AlteServiciiOferite from "@/components/index_page/AlteServiciiOferite";
import { useState } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import Link from "next/link";

import { urlFor } from "@/app/lib/sanity";
// src = {urlFor(image_src).url()}

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useScrollBlock } from "@/hooks/useScrollBlock";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@/css/customSwiper.css";

const RestOfPodcastPage = ({
  podcastVideoData,
  podcastCopyData,
  podcastGalleryData,
  podcastListData,
  footerData,
  footerSocialLinksData,
}: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [blackOverlay, setBlackOverlay] = useState<boolean>(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const windowSize = useWindowSize();

  const handleClick = (slide_index: number) => {
    blockScroll();
    setBlackOverlay(true);
    setCurrentSlide(slide_index);
  };

  return (
    <>
      <main className="restOfPodcastPage-section w-full flex flex-col justify-center items-center relative">
        <div className="wrapper lg:w-[95%] xl:w-[90%] 1780px:w-[60%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <PovestileBune
            podcastListData={podcastListData}
            podcastVideoData={podcastVideoData}
            podcastCopyData={podcastCopyData}
          />
          {/* GALERIE START */}
          <div className="w-full h-[20rem] flex justify-center items-center lg:mb-[5rem]">
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
                  className="absolute w-[64px] h-[44px] cursor-pointer border border-white text-white flex justify-center items-center bg-black rounded-lg bg-opacity-80 top-[5rem] right-[3rem] lg:top-[5rem] lg:right-[13rem] "
                >
                  <img
                    src="/assets/closeButton.svg"
                    alt="close Gallery Button"
                    className="select-none"
                    draggable={false}
                  />
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
                    {podcastGalleryData.map((image: any, index: any) => {
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
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.15,
              }}
              className="w-full h-full"
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={windowSize.width < 1024 ? -5 : -15}
                slidesPerView={windowSize.width < 1024 ? 2 : 3}
                effect={"coverflow"}
                navigation={windowSize.width < 1024 ? false : true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="flex justify-center items-center w-full h-full"
              >
                {podcastGalleryData.map((image: any, index: any) => {
                  return (
                    <SwiperSlide key={index} className="w-full h-full">
                      {({ isActive }: any) => (
                        <img
                          src={urlFor(image.image_src).url()}
                          alt=""
                          className={`${isActive ? "scale-100 shadow-indigo-900" : "scale-[0.85] shadow-indigo-900"} select-none rounded-xl shadow-xl shadow-indigo-900 object-cover w-full h-full cursor-pointer`}
                          draggable={false}
                          onClick={() => handleClick(index)}
                        />
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
          </div>
          {/* GALERIE END */}
          <div className="xl:mt-[-10rem] 1780px:mt-[-6rem] xl:mb-[5rem] flex flex-col justify-center items-center">
            <AlteServiciiOferite />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.15,
            }}
            className="flex flex-col justify-center items-center my-[3rem] lg:mt-[-1rem] lg:mb-[5rem] gap-[1.5rem]"
          >
            <h1 className="text-white font-mustica-semibold text-center text-[32px] block lg:hidden">
              Deci, când începem?
            </h1>
            <Link
              href="/portofoliu/video"
              className="bg-white flex justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold rounded-lg"
            >
              <h1>Contactează-ne acum</h1>
            </Link>
          </motion.div>
        </div>

        <Footer
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default RestOfPodcastPage;
