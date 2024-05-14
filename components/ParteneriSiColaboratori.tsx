"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { urlFor } from "@/app/lib/sanity";

interface Props {
  data: {
    image_src: string;
    alt: string;
    nume: string;
  }[];
}

const ParteneriSiColaboratori = ({ data }: Props) => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  return (
    <div className="flex flex-col justify-center lg:mb-[5rem] xl:mb-0 gap-[4rem] items-center lg:px-[4rem] my-[7rem] lg:my-0 xl:mt-[8rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem]">
      {windowWidth < 1024 ? (
        <h1 className="lg:text-[64px] text-center text-[32px] font-mustica-semibold text-white">
          Parteneri și <br /> Colaboratori
        </h1>
      ) : (
        <h1 className="lg:text-[64px] text-[32px] font-mustica-semibold text-white">
          Parteneri și Colaboratori
        </h1>
      )}
      <div className="SLIDER w-full inline-flex flex-nowrap overflow-hidden select-none">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
          {data.map((logo, index) => {
            return (
              <li key={index}>
                <img
                  src={urlFor(logo.image_src).url()}
                  alt={logo.alt}
                  draggable={false}
                  className="select-none"
                  aria-label={logo.nume}
                />
              </li>
            );
          })}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {data.map((logo, index) => {
            return (
              <li key={logo.nume}>
                <img
                  src={urlFor(logo.image_src).url()}
                  alt={logo.alt}
                  draggable={false}
                  className="select-none"
                  aria-label={logo.nume}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ParteneriSiColaboratori;
