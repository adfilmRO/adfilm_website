// Podcast Page

import Header from "@/components/podcast_page/Header";
import RestOfPodcastPage from "@/components/podcast_page/RestOfPodcastPage";

import {
  getPodcastCopy,
  getPodcastGallery,
  getPodcastVideo,
  getPodcastList,
  getFooterData,
  getFooterSocialLinks,
  getVideoHeaders,
} from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adfilm - Podcast",
  description:
    "Poveștile bune merită să fie auzite, iar oamenii care au ceva de spus, merită să fie ascultați.",
};

const page = async () => {
  const podcastCopyData = await getPodcastCopy();
  const podcastGalleryData = await getPodcastGallery();
  const podcastVideoData = await getPodcastVideo();
  const podcastListData = await getPodcastList();
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const videoHeadersData = await getVideoHeaders();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center overflow-x-hidden">
        <Header videoHeadersData={videoHeadersData} />
        <RestOfPodcastPage
          podcastCopyData={podcastCopyData}
          podcastGalleryData={podcastGalleryData}
          podcastVideoData={podcastVideoData}
          podcastListData={podcastListData}
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default page;
