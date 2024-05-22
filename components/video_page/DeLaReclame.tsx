"use client";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import CommercialsVideoGrid from "./CommercialsVideoGrid";
import BehindTheScenesVideoGrid from "./BehindTheScenesVideoGrid";
import OthersVideoGrid from "./OthersVideoGrid";
import AlteServiciiOferite from "@/components/index_page/AlteServiciiOferite";
import ScrollToTopButton from "./ScrollToTop";

type categoryType = "Commercials" | "Behind The Scenes" | "Others";

const DeLaReclame = ({
  videoCopyData,
  commercialsVideoData,
  othersVideoData,
  behindTheScenesVideoData,
}: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<categoryType>("Commercials");
  const dropdown: any = useRef(null);

  const loadingInterval = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;

  const changeCategory = (selectedCategory: categoryType) => {
    if (selectedCategory === category) return;
    setCategory(selectedCategory);
    setTimeout(() => {
      setIsLoading(true);
    }, loadingInterval);
    setIsLoading(false);
    return;
  };

  return (
    <>
      <div className="flex flex-col py-[5rem] lg:mt-[10rem] w-full justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.15,
          }}
          className="cool-text-gradient-podcast-page mb-[3rem] lg:mb-[2rem] text-center text-[32px] leading-[44px] max-w-[22rem] lg:max-w-[60rem] text-white font-mustica-semibold "
        >
          {videoCopyData[0].title}
        </motion.h1>

        {/* DROPDOWN (ONLY ON MOBILE) START */}

        <div
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          ref={dropdown}
          className={`flex lg:hidden my-[2rem] justify-between relative w-[15rem] z-[10] ${
            isOpen === true
              ? "bg-adfilm-purple text-white shadow-adfilm-purple border-indigo-900 border "
              : "bg-transparent hover:bg-white  text-white  hover:text-black"
          } items-center gap-2 py-2 px-5 transition-all duration-100 rounded cursor-pointer border `}
        >
          <p className="font-montserrat text-md">{category}</p>
          <IoIosArrowDown className="text-xl" />
          <div
            className={`absolute top-[3.5rem] ${
              isOpen === true ? "flex" : "hidden"
            } cursor-default right-0 p-5 text-white rounded-lg bg-black bg-opacity-90 border border-white flex-col gap-2 w-full`}
          >
            <p
              onClick={() => changeCategory("Commercials")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Commercials
            </p>
            <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />

            <p
              onClick={() => changeCategory("Others")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Others
            </p>
            <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />

            <p
              onClick={() => changeCategory("Behind The Scenes")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Behind The Scenes
            </p>
          </div>
        </div>

        {/* DROPDOWN (ONLY ON MOBILE) END */}

        {/* PC SELECT */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          ref={dropdown}
          className="hidden lg:flex gap-[1rem] my-[2rem] z-[10]"
        >
          <div
            onClick={() => changeCategory("Commercials")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Commercials" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Commercials
          </div>
          <div
            onClick={() => changeCategory("Others")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Others" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Others
          </div>
          <div
            onClick={() => changeCategory("Behind The Scenes")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Behind The Scenes" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Behind The Scenes
          </div>
        </motion.div>

        {/* PC SELECT */}

        {/* VIDEO GRID */}
        {isLoading === false ? (
          <div className="lg:w-full w-[90%] videoLoading-Animation rounded-xl h-[150rem] bg-purple-500 opacity-20 p-2 animate-pulse "></div>
        ) : (
          <>
            {category === "Commercials" ? (
              <CommercialsVideoGrid data={commercialsVideoData} />
            ) : category === "Others" ? (
              <OthersVideoGrid data={othersVideoData} />
            ) : (
              <BehindTheScenesVideoGrid data={behindTheScenesVideoData} />
            )}
          </>
        )}
        <div className="mb-[4rem] lg:mb-0 z-[10]">
          <ScrollToTopButton />
        </div>

        {/* VIDEO GRID */}
        <div className="xl:mt-[-5rem]">
          <AlteServiciiOferite />
        </div>
        <Link
          href="/contact"
          className="bg-white xl:mt-[4rem] flex justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold rounded-lg"
        >
          <h1>Contactează-ne acum</h1>
        </Link>
      </div>
    </>
  );
};

export default DeLaReclame;
