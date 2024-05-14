"use client";

import VideoCard from "@/components/VideoCard";
import { motion } from "framer-motion";

interface Props {
  data: {
    title: string;
    youtube_link: string;
  }[];
}

const BehindTheScenes = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-[4rem] items-center lg:px-[4rem] lg:mb-[4rem] xl:mb-0 my-[7rem] lg:my-0 xl:mt-[2rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem]">
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
          className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:mb-[0] lg:text-[64px]"
        >
          Behind the Scenes
        </motion.h1>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:w-full lg:h-full lg:px-5 gap-[2rem] place-items-center place-content-center"
        >
          {data.map((card, index) => {
            return (
              <VideoCard
                key={index}
                title={card.title}
                youtube_link={card.youtube_link}
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default BehindTheScenes;
