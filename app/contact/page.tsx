// Contact Page

import Header from "@/components/contact_page/Header";
import RestOfContactPage from "@/components/contact_page/RestOfContactPage";
import { getVideoHeaders } from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";
export const revalidate = REVALIDATE_INTERVAL;

import { getFooterData, getFooterSocialLinks } from "@/utils/fetchData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adfilm - Contact",
  description: "Trimite-ne un email la contact@adfilm.ro",
};

const page = async () => {
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const videoHeadersData = await getVideoHeaders();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center overflow-x-hidden">
        <Header videoHeadersData={videoHeadersData} />
        <RestOfContactPage
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default page;
