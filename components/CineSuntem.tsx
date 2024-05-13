import React from "react";
import StaffCard from "./StaffCard";

interface Props {
  data: {
    name: string;
    instagramLink: string;
    image_src: string;
    position: string;
  }[];
}

const CineSuntem = async ({ data }: Props) => {
  console.log(data);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white font-mustica-semibold text-[32px] mb-[3rem] lg:text-[64px]">
          Cine suntem noi?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]">
          {data.map((staffCard: any, index: number) => {
            return (
              <StaffCard
                key={index}
                name={staffCard.nume}
                instagramLink={staffCard.instagramLink}
                position={staffCard.position}
                image_src={staffCard.image_src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CineSuntem;
