"use client";

import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

interface Props {
  data: {
    mainTitle: string;
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
    secondaryTitle: string;
  }[];
}

const CeaMaiBunaMotivatie = ({ data }: Props) => {
  const windowSize = useWindowSize();
  const mainData = data[0];
  return (
    <>
      <div className="flex flex-col justify-center lg:justify-start lg:mb-[5rem] xl:mb-0 lg:items-start items-center lg:px-[4rem] mt-[7rem] xl:mt-[8rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem] 1440p:px-[40rem] 4xl:px-[50rem] 5xl:px-[70rem] ">
        <div className="container-divider hidden lg:block" />

        {windowSize.width < 1024 ? (
          // Mobile
          <h1 className="font-mustica-semibold max-w-[25rem] text-[32px] lg:leading-[88px] lg:text-[64px] text-center lg:text-left text-white mt-[4rem] xl:mt-[6rem] xl:mb-[6rem] mb-[3rem]">
            {mainData.mainTitle}
          </h1>
        ) : (
          // PC
          <h1 className="font-mustica-semibold max-w-[50rem] text-[32px] lg:leading-[88px] lg:text-[64px] text-center lg:text-left text-white mt-[4rem] xl:mt-[6rem] xl:mb-[6rem] mb-[3rem]">
            {mainData.mainTitle}
          </h1>
        )}

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full gap-6 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-noi-suntem  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              {mainData.title1}
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px]  lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              {mainData.description1}
            </p>
          </div>
          <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
        </div>

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between w-full lg:items-center lg:w-full gap-8 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-apreciem  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              {mainData.title2}
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px] lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              {mainData.description2}
            </p>
          </div>
          <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
        </div>

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full gap-6 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-viata  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              {mainData.title3}
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px]  lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              {mainData.description3}
            </p>
          </div>
        </div>

        {windowSize.width < 1024 ? (
          // Mobile
          <p className="cool-text-gradient-noi-am max-w-[25rem] xl:text-[30px] mb-[2rem] xl:mb-[5rem] lg:cool-text-gradient-5 text-white font-mustica-semibold text-[18px] lg:text-[25px] lg:max-w-[40rem] xl:max-w-[50rem] lg:text-left text-center">
            {mainData.secondaryTitle}
          </p>
        ) : (
          // PC
          <p className="cool-text-gradient-noi-am xl:text-[30px] mb-[2rem] xl:mb-[5rem] 1851px:text-[42px] 1851px:max-w-[62rem] lg:cool-text-gradient-5 text-white font-mustica-semibold text-[18px] lg:text-[25px] lg:max-w-[40rem] xl:max-w-[50rem] lg:text-left text-center">
            {mainData.secondaryTitle}
          </p>
        )}
        <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
      </div>
    </>
  );
};

export default CeaMaiBunaMotivatie;
