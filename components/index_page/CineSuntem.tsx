"use client";

import React from "react";
import StaffCard from "./StaffCard";

import { motion } from "framer-motion";

interface Props {
  data: {
    name: string;
    instagramLink: string;
    image_src: string;
    position: string;
  }[];
}

const CineSuntem = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full relative md:mt-[20rem]">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            stiffness: 100,
            delay: 0.15,
          }}
          src="/main_page/fiveHeaderLAST.png"
          alt="faces Header"
          className="top-[-23rem] transition-[0.2] xl:top-[-26rem] 2xl:top-[-30rem] hidden md:block select-none absolute"
          draggable={false}
        />

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
          className="text-white shadowText font-mustica-semibold text-[32px] mb-[3rem] lg:text-[64px] z-[10]"
        >
          Cine suntem noi?
        </motion.h1>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center gap-[2rem] max-w-[1400px]">
          {data.map((staffCard: any, index: number) => {
            return (
              <StaffCard
                key={index}
                name={staffCard.nume}
                instagramLink={staffCard.instagramLink}
                position={staffCard.position}
                image_src={staffCard.image_src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CineSuntem;
