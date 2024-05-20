import React from "react";

const GlassList = ({ listData }: any) => {
  const mappedData = Object.values(listData);

  return (
    <div className="backdrop-blur-lg flex justify-center flex-col p-5 lg:p-8 lg:gap-[2rem] gap-[1rem] glassCard items-start bg-black relative bg-opacity-50 staffCardBorder text-white w-[334px] lg:w-full rounded-2xl">
      <div className="absolute bottom-0 right-0 w-full h-full cardglowbackground" />

      {mappedData.map((data: any, index: any) => {
        return (
          <div
            key={index}
            className="flex flex-row lg:gap-4 gap-2 justify-center items-center"
          >
            <img
              src="/assets/glassListButton.png"
              alt="glassListButton"
              draggable={false}
              className="aspect-square select-none w-[25px] lg:w-[30px] "
            />

            <h1 className="text-sm font-mustica lg:text-xl ">{data} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default GlassList;
