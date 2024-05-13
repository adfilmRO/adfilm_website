"use client";

import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const CeaMaiBunaMotivatie = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center lg:px-[4rem] mt-[7rem] xl:mt-[8rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem] ">
        <div className="container-divider hidden lg:block" />

        {windowSize.width < 1024 ? (
          // Mobile
          <h1 className="font-mustica-semibold text-[32px] lg:leading-[88px] lg:text-[64px] text-center lg:text-left text-white mt-[4rem] xl:mt-[6rem] xl:mb-[6rem] mb-[3rem]">
            Cea mai bună motivație <br /> este pasiunea!
          </h1>
        ) : (
          // PC
          <h1 className="font-mustica-semibold text-[32px] lg:leading-[88px] lg:text-[64px] text-center lg:text-left text-white mt-[4rem] xl:mt-[6rem] xl:mb-[6rem] mb-[3rem]">
            Cea mai bună motivație <br /> este pasiunea!
          </h1>
        )}

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full gap-6 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-noi-suntem  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              Noi suntem pasionați de arta vizuală, dar mai ales de povestea din
              spatele fiecărei opere de artă.
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px]  lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              Atunci când lucrăm cu oamenii, acordăm o atenție deosebită
              viziunii lor și fiecărui detaliu important pentru aceștia. Suntem
              conștienți că fiecare client este diferit și are nevoie de o
              strategie diferită care să îi pună în valoare momentul. Integrăm
              experiența noastră în fiecare videoclip, film sau imagine și
              adăugăm nota de originalitate specifică fiecărui proiect.
            </p>
          </div>
          <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
        </div>

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between w-full lg:items-center lg:w-full gap-8 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-apreciem  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              Apreciem faptul că oamenii sunt unici și au perspective diverse,
              pentru că de aici pleaca și creativitatea.
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px] lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              Suntem profesioniști, dar ce ne-a legat la începutul acestui
              proiect, atunci când nu aveam o imagine clară a ceea ce puteam
              construi, a fost entuziasmul de a face mai mult pentru pasiunea
              noastră. Suntem conștienți că asta iubim cel mai mult să facem, de
              aceea ne dedicăm complet și complex proiectelor noastre.
            </p>
          </div>
          <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
        </div>

        <div className="w-full">
          <div className="GRID-PART text-center flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full gap-6 lg:gap-[8rem] mb-[2.5rem] xl:mb-[5rem] px-[3rem] lg:px-0 ">
            <p className="cool-text-gradient-viata  text-white font-mustica-semibold text-[18px] 1851px:max-w-[500px] lg:text-left lg:text-[25px] xl:text-[30px] 1851px:text-[42px] lg:w-[50%] ">
              Viața este numai una și merită să faci ceea ce îți place, nu-i
              așa?
            </p>
            <p className="text-[#F2F3FA] xl:text-[14px] text-[12px] leading-[24px] 1851px:max-w-[500px] font-montserrat 1851px:leading-[28px]  lg:text-left lg:w-[70%] 1780px:w-[60%] mb-[3rem] lg:mb-0 ">
              Noi punem în valoare creațiile și ideile oamenilor care își doresc
              mai mult, care visează la mai mult. Suntem pregătiți să facem față
              celor mai mari provocări. Timpul nu așteaptă pe nimeni. Noi deja
              am pus pe bucketlist că vom reuși.
            </p>
          </div>
        </div>

        {windowSize.width < 1024 ? (
          // Mobile
          <p className="cool-text-gradient-noi-am xl:text-[30px] mb-[2rem] xl:mb-[5rem] lg:cool-text-gradient-5 text-white font-mustica-semibold text-[18px] lg:text-[25px] lg:max-w-[40rem] xl:max-w-[50rem] lg:text-left text-center">
            Noi am făcut primul pas și știm că <br /> viața începe cu adevărat
            atunci când <br /> îți urmezi visul.
          </p>
        ) : (
          // PC
          <p className="cool-text-gradient-noi-am xl:text-[30px] mb-[2rem] xl:mb-[5rem] 1851px:text-[42px] 1851px:max-w-[62rem] lg:cool-text-gradient-5 text-white font-mustica-semibold text-[18px] lg:text-[25px] lg:max-w-[40rem] xl:max-w-[50rem] lg:text-left text-center">
            Noi am făcut primul pas și știm că viața începe cu adevărat atunci
            când îți urmezi visul.
          </p>
        )}
        <div className="container-divider hidden lg:block mb-[2rem] xl:mb-[5rem]" />
      </div>
    </>
  );
};

export default CeaMaiBunaMotivatie;
