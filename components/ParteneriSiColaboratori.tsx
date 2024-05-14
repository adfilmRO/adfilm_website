"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { urlFor } from "@/app/lib/sanity";

interface Props {
  data: {
    image_src: string;
    alt: string;
    nume: string;
  }[];
}

import { motion } from "framer-motion";

const ParteneriSiColaboratori = ({ data }: Props) => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  return (
    <div className="flex flex-col w-full justify-center lg:mb-[5rem] xl:mb-0 gap-[4rem] items-center mt-[2rem] mb-[4rem] lg:my-0 xl:mt-[8rem] ">
      {windowWidth < 1024 ? (
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
          className="lg:text-[64px] text-center text-[32px] font-mustica-semibold text-white"
        >
          Parteneri și <br /> Colaboratori
        </motion.h1>
      ) : (
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
          className="lg:text-[64px] text-[32px] font-mustica-semibold text-white"
        >
          Parteneri și Colaboratori
        </motion.h1>
      )}
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
        className="SLIDER w-full inline-flex flex-nowrap overflow-hidden select-none max-w-[60rem]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
          {data.map((logo, index) => {
            return (
              <li key={index}>
                <img
                  src={urlFor(logo.image_src).url()}
                  alt={logo.alt}
                  draggable={false}
                  className="select-none"
                  aria-label={logo.nume}
                />
              </li>
            );
          })}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {data.map((logo, index) => {
            return (
              <li key={logo.nume}>
                <img
                  src={urlFor(logo.image_src).url()}
                  alt={logo.alt}
                  draggable={false}
                  className="select-none"
                  aria-label={logo.nume}
                />
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default ParteneriSiColaboratori;
