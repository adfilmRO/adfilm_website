import LuamArta from "@/components/LuamArta";
import CineSuntem from "@/components/CineSuntem";
import BehindTheScenes from "@/components/BehindTheScenes";
import CeaMaiBunaMotivatie from "@/components/CeaMaiBunaMotivatie";
import AlteServiciiOferite from "@/components/AlteServiciiOferite";
import ParteneriSiColaboratori from "@/components/ParteneriSiColaboratori";
import Testimoniale from "@/components/Testimoniale";
import Footer from "@/components/Footer";
import {
  getCopyData,
  getStaffCardData,
  getBehindTheScenesData,
  getParteneriData,
  getTestimonialeData,
} from "@/utils/fetchData";

const RestOfMainPage = async () => {
  const staffCardData = await getStaffCardData();
  const copyData = await getCopyData();
  const behindTheScenesData = await getBehindTheScenesData();
  const parteneriData = await getParteneriData();
  const testimonialeData = await getTestimonialeData();

  return (
    <>
      <main className="restOfMainPage-section cool-background-i-dont-have-yet w-full flex flex-col justify-center items-center relative">
        <div className="absolute hidden lg:block top-0 left-0 bg-gradient-to-b from-black opacity-100 to-transparent w-full h-[5rem] " />
        <div className="wrapper lg:w-[95%] xl:w-[70%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <LuamArta />
          <CineSuntem data={staffCardData} />
          <CeaMaiBunaMotivatie data={copyData} />
          <BehindTheScenes data={behindTheScenesData} />
          <AlteServiciiOferite />
          <ParteneriSiColaboratori data={parteneriData} />
          <Testimoniale data={testimonialeData} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RestOfMainPage;
