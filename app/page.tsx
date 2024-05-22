//  Index Page

import MainPageHeader from "@/components/index_page/MainPageHeader";
import ServiciiVideoHeader from "@/components/index_page/ServiciiVideoHeader";
import ServiciiFotoHeader from "@/components/index_page/ServiciiFotoHeader";
import PodcastHeader from "@/components/index_page/PodcastHeader";
import RestOfMainPage from "@/components/index_page/RestOfMainPage";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

export default function Home() {
  return (
    <>
      <main
        className={`bg-black h-[100vh] scroll-snap-container overflow-x-hidden`}
      >
        <MainPageHeader />
        <ServiciiVideoHeader />
        {/* <ServiciiFotoHeader /> */}
        <PodcastHeader />
        <RestOfMainPage />
      </main>
    </>
  );
}
