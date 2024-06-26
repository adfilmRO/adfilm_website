import VideoCard from "@/components/index_page/VideoCard";

const OthersVideoGrid = ({ data }: any) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-[32px] mb-[2rem] font-mustica-semibold text-center">
        Video Editing & Post Production Services
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 w-full auto-rows-auto gap-[2rem] h-full mb-[4rem] lg:mb-[3rem]">
        {data.map((video: any, index: any) => {
          if (index === 0 || index % 3 === 0) {
            return (
              <div
                key={index}
                className="w-full h-full lg:col-span-2 lg:lg:h-[650px] flex justify-center items-center"
              >
                <VideoCard
                  title={video.title}
                  youtube_link={video.youtube_link}
                  type={video.type}
                />
              </div>
            );
          } else
            return (
              <div
                key={index}
                className="w-full h-full flex lg:h-[334px] justify-center items-center"
              >
                <VideoCard
                  title={video.title}
                  youtube_link={video.youtube_link}
                  type={video.type}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default OthersVideoGrid;
