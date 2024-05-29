"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const ServiciiFotoHeader = ({ videoHeadersData, copyHeadersData }: any) => {
  let currentVideo: any;

  videoHeadersData.map((video: any) => {
    if (video.id === "mainPageServiciiFotoHeader") currentVideo = video;
  });

  return (
    <>
      <motion.div className="relative w-full h-screen overflow-hidden">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] z-[10]" />
        <div className="absolute hidden lg:block bottom-0 left-0 bg-gradient-to-t from-black opacity-100 to-transparent w-full h-[5rem] z-[10]" />

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={currentVideo.videoFile.asset.url} type="video/webm" />
          Browser-ul nu suporta acest format.
        </video>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, stiffness: 100 }}
          className="absolute overflow-hidden lg:bottom-[7rem] lg:left-[5rem] bottom-0 left-0 w-full backdrop-blur-lg h-[20rem] z-[10] justify-start bg-black bg-opacity-70 flex-col border-t-[1.5px] border-gray-700 lg:border rounded-tr-lg lg:shadow-sm lg:shadow-purple-900 rounded-tl-lg lg:rounded-bl-lg lg:rounded-br-lg lg:w-[563px] lg:h-[253px] "
        >
          <div className="cardglowbackground absolute bottom-0 right-0 w-full h-full z-[0] flex flex-col gap-4 ">
            <h1 className="text-xl text-white font-mustica-semibold mt-8 ml-8">
              {copyHeadersData[0].foto_title}
            </h1>
            <div className="bg-gradient-to-r from-gray-600 to-transparent bg-opacity-50 w-[60%] bg-cover bg-no-repeat h-[2px] ml-8" />
            <p className="text-[12px] max-w-[20rem] lg:max-w-[27rem] xl:max-w-[30rem] opacity-70 text-white font-montserrat leading-5 ml-8">
              {copyHeadersData[0].foto_description}
            </p>
            <Link
              href="/portofoliu/foto"
              className="bg-white ml-8 active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[10rem] mt-2 px-3 py-2 text-black font-mustica-semibold items-center justify-between flex rounded-lg"
            >
              <h1>Află mai multe</h1>
              <IoIosArrowForward />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.25,
          }}
          className="w-[92%] left-0 right-0 mx-auto m-auto h-[1rem] absolute bottom-[3rem] dotted-divider"
        />
      </motion.div>
    </>
  );
};

export default ServiciiFotoHeader;
