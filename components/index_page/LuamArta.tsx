"use client";

import Link from "next/link";
import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const LuamArta = ({ data }: any) => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[8rem] relative w-full">
        {windowSize.width < 1024 ? (
          // Mobile
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 100,
              delay: 0.15,
            }}
            className="font-mustica-semibold max-w-[19rem] lg:text-[64px] text-[32px] text-center text-white mt-[7rem] mb-[6rem]"
          >
            {data[0].title}
          </motion.h1>
        ) : (
          // PC
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
              delay: 0.25,
            }}
            className="font-mustica-semibold max-w-[51rem] text-[32px] lg:text-[64px] text-center text-white mt-[7rem] mb-[3rem]"
          >
            {data[0].title}
          </motion.h1>
        )}

        {windowSize.width < 1024 ? (
          // Mobile
          <>
            <motion.img
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.15,
              }}
              src="/main_page/stars_1.gif"
              alt="stars"
              width="400"
              height="80"
              className="select-none"
              draggable={false}
            />
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                delay: 0.15,
              }}
              className="text-white text-center max-w-[20rem] text-[16px] font-montserrat mb-[2rem] "
            >
              {data[0].secondaryTitle}
            </motion.p>
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
            >
              <Link
                href="/contact"
                className="bg-white justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
              >
                <h1>Contactează-ne acum</h1>
              </Link>
            </motion.div>
          </>
        ) : (
          // Pc
          <>
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
            >
              <Link
                href="/contact"
                className="bg-white mb-[2rem] justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
              >
                <h1>Contactează-ne acum</h1>
              </Link>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: 0.15,
              }}
              src="/main_page/stars_1.gif"
              alt="stars"
              width="400"
              height="80"
              className="select-none"
              draggable={false}
            />
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
              className="text-white text-center max-w-[30rem] text-xl font-montserrat mb-[2rem] "
            >
              {data[0].secondaryTitle}
            </motion.p>
          </>
        )}
      </div>
    </>
  );
};

export default LuamArta;
