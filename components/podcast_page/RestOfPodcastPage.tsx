"use client";

import PovestileBune from "@/components/podcast_page/PovestileBune";
import Footer from "@/components/index_page/Footer";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useScrollBlock } from "@/hooks/useScrollBlock";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RestOfPodcastPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [blackOverlay, setBlackOverlay] = useState<boolean>(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const data = [
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/serviciifoto_bg.jpg",
    },
    {
      image_src: "/main_page/serviciivideo_bg.png",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
    {
      image_src: "/main_page/podcast_bg.jpg",
    },
  ];

  const handleClick = (slide_index: number) => {
    blockScroll();
    setBlackOverlay(true);
    setCurrentSlide(slide_index);
  };

  return (
    <>
      <main className="restOfPodcastPage-section w-full flex flex-col justify-center items-center relative">
        <div className="wrapper lg:w-[95%] xl:w-[70%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <PovestileBune />
          {/* GALERIE START */}
          <div className="w-full h-[20rem] flex justify-center items-center lg:mb-[5rem]">
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
                  className="absolute w-[64px] h-[44px] cursor-pointer border border-white text-white flex justify-center items-center bg-black rounded-lg bg-opacity-80 top-[5rem] right-[13rem] "
                >
                  <img
                    src="/assets/closeButton.svg"
                    alt="close Gallery Button"
                    className=""
                  />
                </div>
                <div className="w-full h-[20rem] flex justify-center items-center">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
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
                    className="flex justify-center items-center w-[80%] h-[40rem] "
                  >
                    {data.map((image, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="w-full h-full rounded-2xl"
                        >
                          {({ isActive }: any) => (
                            <img
                              src={image.image_src}
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
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={-15}
              slidesPerView={3}
              effect={"coverflow"}
              navigation
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              className="flex justify-center items-center w-full h-full "
            >
              {data.map((image, index) => {
                return (
                  <SwiperSlide key={index} className="w-full h-full">
                    {({ isActive }: any) => (
                      <img
                        src={image.image_src}
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
          </div>
          {/* GALERIE END */}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RestOfPodcastPage;
