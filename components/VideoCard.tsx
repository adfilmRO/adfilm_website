import React from "react";
import { VideoCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ title, image_src, youtube_link }: VideoCardProps) => {
  return (
    <>
      <Link
        href={youtube_link}
        className="staffCard cursor-pointer gap-2 staffCardBorder text-white w-[334px] lg:w-[100%] max-w-[500px] items-center rounded-2xl flex flex-col lg:items-start px-0 lg:px-2 py-2"
      >
        <img
          src={image_src}
          alt={title + "_portrait"}
          className="w-[320px] select-none shadow-sm shadow-purple-900 h-[166px] lg:h-auto lg:w-full rounded-lg staffCardBorder"
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
      </Link>
    </>
  );
};

export default VideoCard;
