"use client";

import React from "react";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const MainPageHeader = ({ videoHeadersData }: any) => {
  const windowSize = useWindowSize();
  let currentVideo: any;

  videoHeadersData.map((video: any) => {
    if (video.id === "mainPageVideoHeader") currentVideo = video;
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={currentVideo.videoFile.asset.url} type="video/webm" />
        Browser-ul nu suporta acest format.
      </motion.video>

      <div className="mouse-scroll" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        {windowSize.width < 1024 ? (
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              times: [0, 1],
              type: "spring",
              stiffness: 100,
            }}
            className="text-5xl font-mustica-medium mt-[19rem] 400px:mt-[25rem]"
          >
            Studio <br /> de producție
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              times: [0, 1],
              type: "spring",
              stiffness: 100,
            }}
            className="text-8xl font-mustica-medium mt-[30rem] 2xl:mt-[35rem] mb-[1rem] 3xl:mt-[50rem] 1440p:mt-[65rem] 4xl:mt-[70rem] 5xl:mt-[80rem] 4k:mt-[110rem]"
          >
            Studio de producție
          </motion.h1>
        )}

        <div className="flex flex-col lg:flex-row gap-5 mt-10 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              times: [0, 1],
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
          >
            <Link
              href="/portofoliu/video"
              className="py-3 px-7 bg-gray-300 text-white bg-transparent hover:bg-white lg:hover:bg-transparent hover:text-black lg:text-black lg:active:bg-adfilm-purple lg:bg-white active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all border-white border-2 hover:bg-transparent"
            >
              <p className="font-mustica-medium text-xl">Video</p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              times: [0, 1],
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }}
          >
            <Link
              href="/portofoliu/podcast"
              className="py-3 px-7 text-white bg-gray-300 bg-transparent hover:bg-white lg:hover:bg-transparent hover:text-black lg:bg-white lg:active:bg-adfilm-purple active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple lg:text-black lg:hover:text-white bg-opacity-40 rounded-lg flex justify-center items-center duration-400 transition-all border-white border-2 hover:bg-transparent"
            >
              <p className="font-mustica-medium text-xl">Podcast</p>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[35rem] lg:h-[41rem] bg-gradient-to-t from-black to-transparent z-0" />
      <div className="absolute top-0 left-0 w-full h-[35rem] lg:h-[15rem] bg-gradient-to-b from-black to-transparent z-0" />
    </div>
  );
};

export default MainPageHeader;
