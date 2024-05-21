import LuamArta from "@/components/index_page/LuamArta";
import CineSuntem from "@/components/index_page/CineSuntem";
import BehindTheScenes from "@/components/index_page/BehindTheScenes";
import CeaMaiBunaMotivatie from "@/components/index_page/CeaMaiBunaMotivatie";
import AlteServiciiOferite from "@/components/index_page/AlteServiciiOferite";
import ParteneriSiColaboratori from "@/components/index_page/ParteneriSiColaboratori";
import Testimoniale from "@/components/index_page/Testimoniale";
import Footer from "@/components/index_page/Footer";
import {
  getCopyData,
  getStaffCardData,
  getBehindTheScenesData,
  getParteneriData,
  getTestimonialeData,
  getFooterData,
  getFooterSocialLinks,
  getLuamArtaData,
} from "@/utils/fetchData";

const RestOfMainPage = async () => {
  const staffCardData = await getStaffCardData();
  const copyData = await getCopyData();
  const behindTheScenesData = await getBehindTheScenesData();
  const parteneriData = await getParteneriData();
  const testimonialeData = await getTestimonialeData();
  const footerData = await getFooterData();
  const footerSocialLinksData = await getFooterSocialLinks();
  const luamArtaData = await getLuamArtaData();

  return (
    <>
      <main className="restOfMainPage-section cool-background-i-dont-have-yet w-full flex flex-col justify-center items-center relative">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] " />
        <div className="wrapper lg:w-[95%] xl:w-[90%] 1780px:w-[70%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <LuamArta data = {luamArtaData} />
          <CineSuntem data={staffCardData} />
          <CeaMaiBunaMotivatie data={copyData} />
          <BehindTheScenes data={behindTheScenesData} />
          <AlteServiciiOferite />
          <ParteneriSiColaboratori data={parteneriData} />
          <Testimoniale data={testimonialeData} />
        </div>
        <Footer
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default RestOfMainPage;
