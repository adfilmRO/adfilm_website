import React from "react";
import VideoCard from "../index_page/VideoCard";

const BehindTheScenesVideoGrid = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-[32px] font-mustica-semibold">
        Behind The Scenes
      </h1>
      <div className="all-videos w-full">
        {/* MAIN VIDEO */}

        <div className="my-[2rem] lg:w-full lg:h-[650px] flex justify-center items-center">
          <VideoCard
            title={"test"}
            youtube_link={
              "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
            }
          />
        </div>

        {/* END OF MAIN VIDEO */}

        {/* SECOND ROW 2 VIDEOS */}

        <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:h-[334px] items-center my-[2rem] lg:my-[3rem] gap-[2rem] lg:gap-[3rem] ">
          <div className="lg:w-1/2 lg: h-full ">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
          <div className="lg:w-1/2 lg:h-full">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
        </div>

        {/* END OF SECOND ROW 2 VIDEOS */}

        {/* SECOND MAIN VIDEO */}

        <div className="my-[2rem] lg:w-full lg:h-[650px] flex justify-center items-center">
          <VideoCard
            title={"test"}
            youtube_link={
              "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
            }
          />
        </div>

        {/* SECOND END OF MAIN VIDEO */}

        {/* THIRD ROW 2 VIDEOS */}

        <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:h-[334px] items-center my-[2rem] lg:my-[3rem] gap-[2rem] lg:gap-[3rem] ">
          <div className="lg:w-1/2 lg: h-full ">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
          <div className="lg:w-1/2 lg:h-full">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
        </div>

        {/* END OF THIRD ROW 2 VIDEOS */}

        {/* FOURTH ROW 2 VIDEOS */}

        <div className="flex flex-col lg:flex-row lg:w-full justify-center lg:h-[334px] items-center my-[2rem] lg:my-[3rem] gap-[2rem] lg:gap-[3rem]">
          <div className="lg:w-1/2 lg: h-full ">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
          <div className="lg:w-1/2 lg:h-full">
            <VideoCard
              title={"test"}
              youtube_link={
                "https://www.youtube.com/embed/-CJF2ZvlhQs?si=HUJzu_4wQig5ZzUp"
              }
            />
          </div>
        </div>

        {/* END OF FOURTH ROW 2 VIDEOS */}
      </div>
    </div>
  );
};

export default BehindTheScenesVideoGrid;
