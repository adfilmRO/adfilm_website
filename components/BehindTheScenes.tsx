import React from "react";
import VideoCard from "@/components/VideoCard";

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
        <h1 className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:mb-[0] lg:text-[64px]">
          Behind the Scenes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-full lg:h-full lg:px-5 gap-[2rem] place-items-center place-content-center">
          {data.map((card, index) => {
            return (
              <VideoCard
                key={index}
                title={card.title}
                youtube_link={card.youtube_link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BehindTheScenes;
