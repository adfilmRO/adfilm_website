// Rest Of Photo Page

import Footer from "@/components/index_page/Footer";
import CapturamEsenta from "./CapturamEsenta";

// src = {urlFor(image_src).url()}

const RestOfPhotoPage = ({
  footerData,
  footerSocialLinksData,
  fotoCopyData,
  corporateFotoData,
  fashionFotoData,
  produsFotoData,
}: any) => {
  return (
    <>
      <main className="restOfVideoPage-section w-full flex flex-col justify-center items-center relative overflow-x-hidden">
        <div className="wrapper lg:w-[95%] xl:w-[90%] 1780px:w-[60%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <CapturamEsenta
            fotoCopyData={fotoCopyData}
            corporateFotoData={corporateFotoData}
            fashionFotoData={fashionFotoData}
            produsFotoData={produsFotoData}
          />
        </div>
        <Footer
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default RestOfPhotoPage;
