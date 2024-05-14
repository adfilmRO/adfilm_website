"use client";

import Link from "next/link";
import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const LuamArta = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[8rem] relative">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] " />

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
            className="font-mustica-semibold lg:text-[64px] text-[32px] text-center text-white mt-[7rem] mb-[6rem]"
          >
            Luăm arta în serios <br /> și adăugăm <br /> profesionalism în tot{" "}
            <br />
            ceea ce facem!
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
            className="font-mustica-semibold text-[32px] lg:text-[64px] text-center text-white mt-[7rem] mb-[3rem]"
          >
            Luăm arta în serios și <br /> adăugăm profesionalism în
            <br /> tot ceea ce facem!
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
              className="text-white text-center text-[16px] font-montserrat mb-[2rem] "
            >
              Când 5 este prea puțin, noi <br /> aducem în cadru experiența{" "}
              <br /> noastră de 6 stele.
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
                href="/portofoliu/video"
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
                href="/portofoliu/video"
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
              className="text-white text-center text-[16px] font-montserrat mb-[2rem] "
            >
              Când 5 este prea puțin, noi aducem în cadru
              <br /> experiența noastră de 6 stele.
            </motion.p>
          </>
        )}
      </div>
    </>
  );
};

export default LuamArta;
