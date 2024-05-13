import React from "react";
import { videoCards } from "@/utils/otherData";
import VideoCard from "@/components/VideoCard";

const BehindTheScenes = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:text-[64px]">
          Behind the Scenes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-5 gap-[2rem] justify-center items-center place-items-center place-content-center">
          {videoCards.map((card, index) => {
            return (
              <VideoCard
                key={index}
                title={card.title}
                youtube_link={card.youtube_link}
                image_src={card.image_src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BehindTheScenes;
