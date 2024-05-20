// Podcast Page

import Header from "@/components/podcast_page/Header";
import RestOfPodcastPage from "@/components/podcast_page/RestOfPodcastPage";

import {
  getPodcastCopy,
  getPodcastGallery,
  getPodcastVideo,
  getPodcastList,
} from "@/utils/fetchData";

const page = async () => {
  const podcastCopyData = await getPodcastCopy();
  const podcastGalleryData = await getPodcastGallery();
  const podcastVideoData = await getPodcastVideo();
  const podcastListData = await getPodcastList();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center">
        <Header />
        <RestOfPodcastPage
          podcastCopyData={podcastCopyData}
          podcastGalleryData={podcastGalleryData}
          podcastVideoData={podcastVideoData}
          podcastListData={podcastListData}
        />
      </main>
    </>
  );
};

export default page;
