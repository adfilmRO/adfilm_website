import React from "react";
import LuamArta from "@/components/LuamArta";
import CineSuntem from "@/components/CineSuntem";
import BehindTheScenes from "@/components/BehindTheScenes";
import CeaMaiBunaMotivatie from "@/components/CeaMaiBunaMotivatie";
import AlteServiciiOferite from "@/components/AlteServiciiOferite";
import ParteneriSiColaboratori from "@/components/ParteneriSiColaboratori";
import Testimoniale from "@/components/Testimoniale";
import Footer from "@/components/Footer";

const RestOfMainPage = () => {
  return (
    <>
      <main className="restOfMainPage-section cool-background-i-dont-have-yet flex flex-col">
        <LuamArta />
        <CineSuntem />
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
