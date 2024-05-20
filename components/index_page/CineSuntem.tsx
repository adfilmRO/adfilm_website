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

const CineSuntem = async ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
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
          className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:text-[64px]"
        >
          Cine suntem noi?
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
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
