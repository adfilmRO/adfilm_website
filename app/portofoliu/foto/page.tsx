// Foto Page

import Header from "@/components/foto_page/Header";
import RestOfPhotoPage from "@/components/foto_page/RestOfPhotoPage";

import {
  getCorporateFoto,
  getFashionFoto,
  getFotoCopy,
  getProdusFoto,
  getVideoHeaders,
} from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";

export const revalidate = REVALIDATE_INTERVAL;

import { getFooterData, getFooterSocialLinks } from "@/utils/fetchData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "adfilm - Foto",
  description:
    "Capturăm esența fiecărui moment într-un cadru perfect! Aducem profesionalismul și creativitatea la orice proiect.",
};

const page = async () => {
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const videoHeadersData = await getVideoHeaders();
  const fotoCopyData = await getFotoCopy();
  const corporateFotoData = await getCorporateFoto();
  const fashionFotoData = await getFashionFoto();
  const produsFotoData = await getProdusFoto();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center">
        <Header videoHeadersData={videoHeadersData} />
        <RestOfPhotoPage
          fotoCopyData={fotoCopyData}
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
          corporateFotoData={corporateFotoData}
          fashionFotoData={fashionFotoData}
          produsFotoData={produsFotoData}
        />
      </main>
    </>
  );
};

export default page;
