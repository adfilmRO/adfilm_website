// Video Page

import Header from "@/components/video_page/Header";
import RestOfVideoPage from "@/components/video_page/RestOfVideoPage";

import {
  getBehindTheScenesVideos,
  getCommercialsVideos,
  getOthersVideos,
  getVideoCopyData,
  getVideoHeaders,
} from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adfilm - Video",
  description:
    "De la reclame captivante la conținut promoțional de impact, transformăm ideile în imagini memorabile.",
};

import { getFooterData, getFooterSocialLinks } from "@/utils/fetchData";

const page = async () => {
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const videoCopyData = await getVideoCopyData();
  const commercialsVideoData = await getCommercialsVideos();
  const othersVideoData = await getOthersVideos();
  const behindTheScenesVideoData = await getBehindTheScenesVideos();
  const videoHeadersData = await getVideoHeaders();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center">
        <Header videoHeadersData={videoHeadersData} />
        <RestOfVideoPage
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
          videoCopyData={videoCopyData}
          commercialsVideoData={commercialsVideoData}
          othersVideoData={othersVideoData}
          behindTheScenesVideoData={behindTheScenesVideoData}
        />
      </main>
    </>
  );
};

export default page;
