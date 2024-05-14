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
      <main className="restOfMainPage-section cool-background-i-dont-have-yet flex flex-col">
        <LuamArta />
        <CineSuntem data={staffCardData} />
        <CeaMaiBunaMotivatie data={copyData} />
        <BehindTheScenes data={behindTheScenesData} />
        <AlteServiciiOferite />
        <ParteneriSiColaboratori data={parteneriData} />
        <Testimoniale data={testimonialeData} />
        <Footer />
      </main>
    </>
  );
};

export default RestOfMainPage;
