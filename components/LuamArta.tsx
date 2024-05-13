"use client";

import Link from "next/link";
import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const LuamArta = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-[8rem] relative">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] " />

        {windowSize.width < 1024 ? (
          // Mobile
          <h1 className="font-mustica-semibold lg:text-[64px] text-[32px] text-center text-white mt-[7rem] mb-[6rem]">
            Luăm arta în serios <br /> și adăugăm <br /> profesionalism în tot{" "}
            <br />
            ceea ce facem!
          </h1>
        ) : (
          // PC
          <h1 className="font-mustica-semibold text-[32px] lg:text-[64px] text-center text-white mt-[7rem] mb-[3rem]">
            Luăm arta în serios și <br /> adăugăm profesionalism în
            <br /> tot ceea ce facem!
          </h1>
        )}

        {windowSize.width < 1024 ? (
          // Mobile
          <>
            <img
              src="/main_page/stars_1.gif"
              alt="stars"
              width="400"
              height="80"
              className="select-none"
              draggable={false}
            />
            <p className="text-white text-center text-[16px] font-montserrat mb-[2rem] ">
              Când 5 este prea puțin, noi <br /> aducem în cadru experiența{" "}
              <br /> noastră de 6 stele.
            </p>
            <Link
              href="/portofoliu/video"
              className="bg-white justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
            >
              <h1>Contactează-ne acum</h1>
            </Link>
          </>
        ) : (
          // Pc
          <>
            <Link
              href="/portofoliu/video"
              className="bg-white mb-[2rem] justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
            >
              <h1>Contactează-ne acum</h1>
            </Link>
            <img
              src="/main_page/stars_1.gif"
              alt="stars"
              width="400"
              height="80"
              className="select-none"
              draggable={false}
            />
            <p className="text-white text-center text-[16px] font-montserrat mb-[2rem] ">
              Când 5 este prea puțin, noi aducem în cadru
              <br /> experiența noastră de 6 stele.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default LuamArta;
