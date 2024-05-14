import React from "react";
import { VideoCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ title, youtube_link }: VideoCardProps) => {
  return (
    <>
      <div className="staffCard cursor-pointer gap-2 staffCardBorder text-white w-[334px] lg:w-full max-w-[1200px] lg:h-[350px] items-center rounded-2xl flex flex-col lg:items-start px-0 lg:px-2 py-2">
        <iframe
          id="ytplayer"
          src={youtube_link}
          allowFullScreen
          loading="lazy"
          aria-label={title}
          className="select-none w-[314px] h-[166px] shadow-sm shadow-purple-900 lg:h-full lg:w-full rounded-lg staffCardBorder"
          draggable={false}
        />

        <div className="flex gap-2 flex-row lg:justify-start lg:items-center justify-center lg:pl-2 items-center">
          <Image
            src="/assets/youtube_logo.svg"
            alt="youtube logo"
            width={17.44}
            height={12.21}
            draggable={false}
            className="w-auto h-auto select-none"
          />
          <h1 className="font-mustica-semibold text-[14px] lg:text-[24px]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
