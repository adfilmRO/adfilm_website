import React from "react";
import { StaffCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const StaffCard = ({
  name,
  image_src,
  instagramLink,
  position,
}: StaffCardProps) => {
  return (
    <>
      <div className="staffCard staffCardBorder gap-3 text-white w-[280px] h-[392px] items-center rounded-2xl flex flex-col px-1 py-2">
        <img
          src={image_src}
          alt={name + "_portrait"}
          className="w-[260px] select-none shadow-sm shadow-purple-900 h-[263px] rounded-lg staffCardBorder"
          draggable={false}
        />
        <Link
          href={instagramLink}
          className="instagram-tag flex gap-2 p-3 rounded-lg"
        >
          <Image
            src="/assets/instagram_logo.svg"
            alt="instagram logo"
            width={16}
            height={16}
            draggable={false}
            className="w-auto h-auto select-none"
          />
          <h1 className="text-white font-mustica-semibold text-[13px]">
            {name}
          </h1>
        </Link>

        <h1 className="font-montserrat text-[12px]">{position}</h1>
        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>
    </>
  );
};

export default StaffCard;
