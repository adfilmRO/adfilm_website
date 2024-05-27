"use client";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import ScrollToTopButton from "@/components/video_page/ScrollToTop";
import AlteServiciiOferite from "../index_page/AlteServiciiOferite";

import CorporateFotoGrid from "./CorporateFotoGrid";
import FashionFotoGrid from "./FashionFotoGrid";
import ProdusFotoGrid from "./ProdusFotoGrid";

type categoryType = "Corporate" | "Fashion" | "Produs";

const CapturamEsenta = ({
  fotoCopyData,
  corporateFotoData,
  fashionFotoData,
  produsFotoData,
}: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<categoryType>("Corporate");
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
          className="cool-text-gradient-podcast-page mb-[3rem] lg:mb-[2rem] text-center text-[32px] leading-[44px] max-w-[22rem] lg:max-w-[65rem] text-white font-mustica-semibold "
        >
          {fotoCopyData[0].title}
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
              onClick={() => changeCategory("Corporate")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Fotografie Corporate
            </p>
            <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />

            <p
              onClick={() => changeCategory("Fashion")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Fotografie Fashion
            </p>
            <div className="navMenuLine h-[1.5px] w-full bg-no-repeat mt-1" />

            <p
              onClick={() => changeCategory("Produs")}
              className="font-montserrat text-md hover:font-bold transition-all duration-75 cursor-pointer"
            >
              Fotografie de Produs{" "}
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
            onClick={() => changeCategory("Corporate")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Corporate" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Fotografie Corporate
          </div>
          <div
            onClick={() => changeCategory("Fashion")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Fashion" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Fotografie Fashion
          </div>
          <div
            onClick={() => changeCategory("Produs")}
            className={`flex justify-between cursor-pointer p-3 rounded-lg transition-all duration-100 items-center font-mustica-semibold ${category === "Produs" ? "bg-adfilm-purple text-white border-adfilm-purple border" : "bg-transparent hover:bg-white text-white hover:text-black border"}`}
          >
            Fotografie de Produs
          </div>
        </motion.div>

        {/* PC SELECT */}

        {/* VIDEO GRID */}
        {isLoading === false ? (
          <div className="lg:w-full w-[90%] videoLoading-Animation rounded-xl h-[150rem] bg-purple-500 opacity-20 p-2 animate-pulse "></div>
        ) : (
          <>
            {category === "Corporate" ? (
              <CorporateFotoGrid data={corporateFotoData} />
            ) : category === "Fashion" ? (
              <FashionFotoGrid data={fashionFotoData} />
            ) : (
              <ProdusFotoGrid data={produsFotoData} />
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

export default CapturamEsenta;
