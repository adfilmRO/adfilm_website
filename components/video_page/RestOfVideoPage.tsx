import Footer from "@/components/index_page/Footer";
import DeLaReclame from "./DeLaReclame";

// src = {urlFor(image_src).url()}

const RestOfVideoPage = ({
  footerData,
  footerSocialLinksData,
  videoCopyData,
  commercialsVideoData,
  othersVideoData,
  behindTheScenesVideoData,
}: any) => {
  return (
    <>
      <main className="restOfVideoPage-section w-full flex flex-col justify-center items-center relative overflow-x-hidden">
        <div className="wrapper lg:w-[95%] xl:w-[90%] 1780px:w-[60%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <DeLaReclame
            videoCopyData={videoCopyData}
            commercialsVideoData={commercialsVideoData}
            othersVideoData={othersVideoData}
            behindTheScenesVideoData={behindTheScenesVideoData}
          />
        </div>
        <Footer
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default RestOfVideoPage;
