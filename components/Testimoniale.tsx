"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "@/css/testimoniale.css";
import { testimoniale } from "@/utils/otherData";
import Link from "next/link";

const Testimoniale = () => {
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const [loaded, setLoaded] = useState<any>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="flex flex-col justify-center gap-[2rem] items-center lg:px-[4rem] mb-[5rem] xl:mt-[8rem] xl:px-[7rem] 2xl:px-[17rem] 1780px:px-[20rem]">
      <img
        src="/main_page/double-quotes_svg.svg"
        alt="double quotes"
        className="select-none w-[37px] h-[38px] lg:w-[91px] lg:h-[92px]"
        draggable={false}
      />
      <div className="navigation-wrapper w-[80%]">
        <div ref={sliderRef} className="keen-slider">
          {testimoniale.map((testimonial, index) => {
            return (
              <div
                className="keen-slider__slide flex flex-col items-center justify-center"
                key={index}
              >
                <p className="text-center font-montserrat text-[#F2F3FA] leading-[24px] lg:leading-[32px] lg:text-[16px] lg:w-[764px] text-[12px] w-[262px] sm:min-w-[262px] sm:w-auto sm:max-w-[80%]">
                  {testimonial.description}
                </p>
                <h1 className="text-white font-mustica-semibold mt-6 lg:mt-10 lg:text-[22px]">
                  {testimonial.name}{" "}
                </h1>
                <h1 className="text-white font-mustica-semibold mt-2 lg:text-[18px]">
                  {testimonial.profession}{" "}
                </h1>
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {testimoniale.map((testimonial, idx) => (
            <img
              src={testimonial.dot_background}
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={
                "dot w-[28px] h-[28px] lg:w-[33px] lg:h-[33px] object-cover select-none" +
                (currentSlide === idx
                  ? " border-active w-[40px] h-[41px] lg:w-[48px] lg:h-[48px]"
                  : "")
              }
              draggable={false}
            />
          ))}
        </div>
      )}
      <Link
        href="/portofoliu/video"
        className="bg-white mt-[2rem] lg:mt-[6rem] justify-center items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer w-[13rem] py-2 text-black font-mustica-semibold flex rounded-lg"
      >
        <h1>Contactează-ne acum</h1>
      </Link>
    </div>
  );

  // ARROW THING

  function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
  }) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow h-[15px] w-[15px] ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
};

export default Testimoniale;
