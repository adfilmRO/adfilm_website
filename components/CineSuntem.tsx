import React from "react";
import { staffCards } from "@/utils/otherData";
import StaffCard from "./StaffCard";

const CineSuntem = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:text-[64px]">
          Cine suntem noi?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]">
          {staffCards.map((card, index) => {
            return (
              <StaffCard
                key={index}
                name={card.name}
                instagramLink={card.instagramLink}
                position={card.position}
                image_src={card.image_src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CineSuntem;
