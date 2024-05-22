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
} from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

const page = async () => {
  const podcastCopyData = await getPodcastCopy();
  const podcastGalleryData = await getPodcastGallery();
  const podcastVideoData = await getPodcastVideo();
  const podcastListData = await getPodcastList();
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center overflow-x-hidden">
        <Header />
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
