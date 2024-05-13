import { client } from "@/app/lib/sanity";

import LuamArta from "@/components/LuamArta";
import CineSuntem from "@/components/CineSuntem";
import BehindTheScenes from "@/components/BehindTheScenes";
import CeaMaiBunaMotivatie from "@/components/CeaMaiBunaMotivatie";
import AlteServiciiOferite from "@/components/AlteServiciiOferite";
import ParteneriSiColaboratori from "@/components/ParteneriSiColaboratori";
import Testimoniale from "@/components/Testimoniale";
import Footer from "@/components/Footer";

async function getStaffCardData() {
  const query = `*[_type == 'staff'] {
    nume,
      position,
      instagramLink,
      image_src
  }`;
  const data = await client.fetch(query);
  return data;
}

const RestOfMainPage = async () => {
  const staffCardData = await getStaffCardData();
  return (
    <>
      <main className="restOfMainPage-section cool-background-i-dont-have-yet flex flex-col">
        <LuamArta />
        <CineSuntem data={staffCardData} />
        <CeaMaiBunaMotivatie />
        <BehindTheScenes />
        <AlteServiciiOferite />
        <ParteneriSiColaboratori />
        <Testimoniale />
        <Footer />
      </main>
    </>
  );
};

export default RestOfMainPage;
