"use client";

import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const AlteServiciiOferite = () => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  return (
    <>
      {windowWidth < 1780 ? (
        //  Under 1780 (3 rows)
        <div className="flex-col w-full justify-center items-center lg:px-[4rem] my-[7rem] lg:mb-[5rem] xl:mb-0 lg:my-0 xl:mt-[8rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem] hidden lg:flex">
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
            className="text-[64px] font-mustica-semibold text-white mb-[3rem]"
          >
            Alte servicii oferite
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
            className="grid-cols-12 gap-4 w-full grid grid-rows-3 h-[12rem] text-[18px]"
          >
            <div className="col-span-3  row-span-1 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Producții publicitare
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Livestreaming
            </div>
            <div className="col-span-3  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Spot-uri radio
            </div>
            <div className="col-span-3  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Podcast
            </div>
            <div className="col-span-4  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Spot-uri TV de produs
            </div>
            <div className="col-span-4 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Fotografii de produs
            </div>
            <div className="col-span-4  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Producție video SoMe
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Design grafic
            </div>
            <div className="col-span-2  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Animații 3D
            </div>
            <div className="col-span-4  p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Fotografii de tip portret
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Copywriting
            </div>
          </motion.div>
        </div>
      ) : (
        // Over 1780 (2 rows)
        <div className="flex-col w-full justify-center items-center my-[7rem] lg:my-0 xl:mt-[6rem] hidden lg:flex">
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
            className="text-[64px] font-mustica-semibold text-white mb-[3rem]"
          >
            Alte servicii oferite
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.3,
            }}
            className="custom-grid gap-5 h-[8rem] grid-rows-2 w-full text-xl"
          >
            <div className="col-span-4 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Producții publicitare
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Livestreaming
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Spot-uri radio
            </div>
            <div className="col-span-5 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Spot-uri TV de produs
            </div>
            <div className="col-span-5 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Producție video SoMe
            </div>
            <div className="col-span-2 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Podcast
            </div>
            <div className="col-span-4 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Fotografii de produs
            </div>
            <div className="col-span-5 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Fotografii de tip portret
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Design grafic
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Animații 3D
            </div>
            <div className="col-span-3 p-2 text-white font-mustica-bold bg-[#504EC3] rounded-lg flex justify-center items-center">
              Copywriting
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AlteServiciiOferite;
