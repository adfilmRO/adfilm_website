// Podcast Page

import Header from "@/components/podcast_page/Header";
import RestOfPodcastPage from "@/components/podcast_page/RestOfPodcastPage";

const page = async () => {
  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center">
        <Header />
        <RestOfPodcastPage />
      </main>
    </>
  );
};

export default page;
