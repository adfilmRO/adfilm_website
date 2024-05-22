"use client";

import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { urlFor } from "@/app/lib/sanity";

const Footer = ({ footerData, footerSocialLinksData }: any) => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;

  const footerData1 = Object.values(footerData[0]);
  const footerData2 = Object.values(footerData[1]);
  const totalFooterData = [footerData1, footerData2];

  return (
    <>
      {/* MOBILE FOOTER */}
      {/* MOBILE FOOTER */}
      {/* MOBILE FOOTER */}
      {/* MOBILE FOOTER */}
      {windowWidth < 1024 ? (
        <div className="grid gap-[2rem] place-items-start sm:place-items-center grid-cols-1 p-[4rem] bg-black w-full lg:px-[4rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem]">
          <Link href="/">
            <img
              src="/assets/adfilm_logo.svg"
              className="select-none w-[226px] h-[52px]"
              draggable={false}
              alt="adfilm footer logo"
            />
          </Link>
          <div className="flex flex-row flex-wrap w-full justify-between max-w-[20rem] sm:max-w-[18rem]">
            {footerSocialLinksData.map((socialLink: any, idx: any) => {
              return (
                <Link
                  href={socialLink.link}
                  key={idx}
                  target="_blank"
                  className="p-3 rounded-xl border-2 border-white flex justify-center items-center hover:shadow-glow-purple hover:shadow-white transition-all duration-50"
                >
                  <img
                    src={urlFor(socialLink.image_src).url()}
                    alt={socialLink.name}
                    className="select-none h-[25px] w-[25px] aspect-square object-cover"
                    draggable={false}
                  />
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 grid-rows-2 gap-[2rem] sm:text-center lg:text-left">
            {totalFooterData.map((dataArray: any, main_idx: any) => {
              return (
                <div className="flex flex-col gap-[1rem]" key={main_idx}>
                  {dataArray.map((data: any, idx: any) => {
                    return (
                      <p className="text-[#F2F3FA] text-sm " key={idx}>
                        {data}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
                alt="Solutionarea Alternativa a Litigiilor"
                draggable={false}
                className="select-none w-[250px] object-cover"
              />
            </Link>
            <Link
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                alt="Solutionarea Online a Litigiilor"
                draggable={false}
                className="select-none w-[250px] object-cover"
              />
            </Link>
          </div>
          <p className="text-[#F2F3FA] text-[12px]">
            © Copyright 2024 | All Rights Reserved
          </p>
        </div>
      ) : (
        // PC FOOTER
        // PC FOOTER
        // PC FOOTER
        // PC FOOTER

        <div className="flex justify-between gap-[2rem] place-items-start grid-cols-3 p-[4rem] bg-black w-full lg:px-[4rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem]">
          <div className="flex flex-col gap-[2rem] text-left">
            {totalFooterData.map((dataArray: any, main_idx: any) => {
              if (main_idx == 1) {
                return (
                  <div className="flex flex-col gap-[1rem]" key={main_idx}>
                    {dataArray.map((data: any, idx: any) => {
                      return (
                        <p className="text-[#F2F3FA] text-sm " key={idx}>
                          {data}
                        </p>
                      );
                    })}
                  </div>
                );
              } else return;
            })}
            <div className="flex items-center gap-2">
              <Link
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="nofollow"
              >
                <img
                  src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
                  alt="Solutionarea Alternativa a Litigiilor"
                  draggable={false}
                  className="select-none w-[150px] h-[40px] object-cover"
                />
              </Link>
              <Link
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="nofollow"
              >
                <img
                  src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                  alt="Solutionarea Online a Litigiilor"
                  draggable={false}
                  className="select-none w-[150px] h-[42px] object-cover"
                />
              </Link>
            </div>
            <p className="text-[#F2F3FA] text-[12px]">
              © Copyright 2024 | All Rights Reserved
            </p>
          </div>

          <div>
            {totalFooterData.map((dataArray: any, main_idx: any) => {
              if (main_idx == 0) {
                return (
                  <div className="flex flex-col gap-[1rem]" key={main_idx}>
                    {dataArray.map((data: any, idx: any) => {
                      return (
                        <p className="text-[#F2F3FA] text-sm " key={idx}>
                          {data}
                        </p>
                      );
                    })}
                  </div>
                );
              } else return;
            })}
          </div>

          <div className="flex flex-col w-full justify-between max-w-[20rem] sm:max-w-[18rem] gap-[2rem]">
            <Link href="/">
              <img
                src="/assets/adfilm_logo.svg"
                className="select-none w-[226px] h-[52px]"
                draggable={false}
                alt="adfilm footer logo"
              />
            </Link>
            <div className="flex flex-row flex-wrap gap-[1.1rem]">
              {footerSocialLinksData.map((socialLink: any, idx: any) => {
                return (
                  <Link
                    href={socialLink.link}
                    key={idx}
                    target="_blank"
                    className="p-3 rounded-xl border-2 border-white flex justify-center items-center hover:shadow-glow hover:shadow-white transition-all duration-50"
                  >
                    <img
                      src={urlFor(socialLink.image_src).url()}
                      alt={socialLink.name}
                      className="select-none h-[20px] w-[20px] aspect-square object-cover"
                      draggable={false}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
