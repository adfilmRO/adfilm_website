// Podcast Page Header
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="contactPageBackground md:bg-[center_-15rem] xl:bg-[center_-20rem] 2xl:bg-[center_-25rem] 1780px:bg-[center_-28rem] 4k:bg-[center_-60rem] flex flex-col relative w-full h-[353px] lg:h-[500px] 1440p:h-[800px] 4k:h-[1200px] items-center">
        <div className="absolute lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[10rem]" />
        <div className="absolute lg:block bottom-0 left-0 bg-gradient-to-t from-black opacity-100 to-transparent w-full h-[10rem]" />
        <motion.p
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.15,
          }}
          className="text-white text-[46px] font-mustica-semibold mt-[16rem] lg:mt-[24.35rem] 1440p:mt-[43rem] 4k:mt-[68rem] z-[10] lg:text-[122px] "
        >
          Contact
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="w-[90%] left-0 right-0 mx-auto m-auto lg:block hidden h-[1rem] bottom-[-6.35rem]  z-[10] dotted-divider absolute"
        />
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
          className="absolute lg:bottom-[-12rem] bottom-[-1.5rem] z-[10]"
        >
          <h1 className="font-mustica-semibold text-white text-[32px] text-center lg:hidden">
            {"Let's Make it Real! 🚀"}
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
