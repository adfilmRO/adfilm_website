// Contact Page

import Header from "@/components/contact_page/Header";
import RestOfContactPage from "@/components/contact_page/RestOfContactPage";
import {} from "@/utils/fetchData";
import { REVALIDATE_INTERVAL } from "@/utils/revalidate";
export const revalidate = REVALIDATE_INTERVAL;

import { getFooterData, getFooterSocialLinks } from "@/utils/fetchData";

const page = async () => {
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();

  return (
    <>
      <main className="w-full relative flex flex-col justify-center items-center overflow-x-hidden">
        <Header />
        <RestOfContactPage
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default page;
