// Video Page

import Header from "@/components/video_page/Header";
import RestOfVideoPage from "@/components/video_page/RestOfVideoPage";

import { getVideoCopyData } from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

import { getFooterData, getFooterSocialLinks } from "@/utils/fetchData";

const page = async () => {
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const videoCopyData = await getVideoCopyData();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center">
        <Header />
        <RestOfVideoPage
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
          videoCopyData={videoCopyData}
        />
      </main>
    </>
  );
};

export default page;
