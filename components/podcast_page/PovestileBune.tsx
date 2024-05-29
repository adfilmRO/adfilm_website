"use client";

import VideoCard from "@/components/index_page/VideoCard";
import GlassList from "@/components/podcast_page/GlassList";

import { motion } from "framer-motion";

const PovestileBune = ({
  podcastListData,
  podcastVideoData,
  podcastCopyData,
}: any) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full my-[4rem] lg:mt-[15rem]">
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
          className="cool-text-gradient-podcast-page text-center text-[32px] leading-[44px] max-w-[22rem] lg:max-w-[50rem] text-white font-mustica-semibold "
        >
          {podcastCopyData[0].title1}
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
          className="my-[4rem] lg:w-full lg:h-[650px] flex justify-center items-center"
        >
          <VideoCard
            title={podcastVideoData[2].title}
            youtube_link={podcastVideoData[2].youtube_link}
            type={podcastVideoData[2].type}
          />
        </motion.div>
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
          className="cool-text-gradient-podcast-page-daca-ai text-[18px] text-center text-white font-mustica-semibold lg:text-[32px] lg:max-w-[50rem] xl:max-w-[70rem] max-w-[20rem] "
        >
          {podcastCopyData[0].title2}
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:h-[334px] items-center my-[4rem] gap-[3rem] ">
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
            className="lg:w-1/2 lg: h-full "
          >
            <VideoCard
              title={podcastVideoData[0].title}
              youtube_link={podcastVideoData[0].youtube_link}
              type={podcastVideoData[0].type}
            />
          </motion.div>
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
            className="lg:w-1/2 lg:h-full "
          >
            <VideoCard
              title={podcastVideoData[1].title}
              youtube_link={podcastVideoData[1].youtube_link}
              type={podcastVideoData[1].type}
            />
          </motion.div>
        </div>
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
          className="flex flex-col gap-[3rem] lg:grid lg:grid-cols-2 lg:w-full"
        >
          <GlassList listData={podcastListData[0]} />
          <GlassList listData={podcastListData[1]} />
        </motion.div>
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
          className="cool-text-gradient-podcast-page lg:mt-[3rem] mt-[3rem] max-w-[16rem] text-white font-mustica-semibold text-center lg:text-[32px] lg:max-w-[50rem] xl:max-w-[70rem] "
        >
          {podcastCopyData[0].title3}
        </motion.h1>
      </div>
    </>
  );
};

export default PovestileBune;
