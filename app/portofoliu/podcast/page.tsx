// Podcast Page

import Header from "@/components/podcast_page/Header";
import RestOfPodcastPage from "@/components/podcast_page/RestOfPodcastPage";

const page = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center relative">
      <Header />
      <RestOfPodcastPage />
    </main>
  );
};

export default page;
