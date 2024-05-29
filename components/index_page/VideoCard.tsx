import { VideoCardProps } from "@/utils/types";
import CustomYouTube from "@/components/video_page/CustomYouTube";
import "react-youtube-lazyload/dist/index.css";

//  _2hdkJ className for the video picture
// _16Q0f className for the player
//

const VideoCard = ({ title, youtube_link, type }: VideoCardProps) => {
  return (
    <>
      <div className="staffCard cursor-pointer staffCardBorder text-white w-[334px] lg:w-full h-full items-center rounded-2xl flex flex-col lg:items-start px-0 lg:px-2 py-2">
        <CustomYouTube
          videoId={youtube_link}
          privacy={true}
          aria-label={title}
          type={type}
          className="select-none oveflow-hidden w-[314px] h-[166px] shadow-sm shadow-purple-900 lg:h-full lg:w-full rounded-lg staffCardBorder"
        />

        <div className="flex gap-2 w-full lg:py-3 py-[.2rem] flex-row lg:justify-start lg:items-center justify-center lg:pl-2 items-center">
          <img
            src="/assets/youtube_logo.svg"
            alt="youtube logo"
            draggable={false}
            className="select-none w-[17.44px] mt-[0.2rem] lg:mt-0 h-[12.21px] lg:w-[40px] lg:h-[25px]"
          />
          <h1 className="font-mustica-semibold text-[14px] lg:text-[24px] select-none">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
