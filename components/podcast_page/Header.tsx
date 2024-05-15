// Podcast Page Header
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="podcastPageBackground flex flex-col relative w-full h-[353px] items-center">
        <div className="absolute lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[10rem]" />
        <div className="absolute lg:block bottom-0 left-0 bg-gradient-to-t from-black opacity-100 to-transparent w-full h-[10rem]" />
        <p className="text-white text-[46px] font-mustica-semibold mt-[16rem] z-[10]">
          Podcast
        </p>
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
          className="absolute bottom-[-1.5rem] z-[10] "
        >
          <Link
            href="/portofoliu/video"
            className="bg-white lg:mt-[3rem] justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
          >
            <h1>Contactează-ne acum</h1>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
