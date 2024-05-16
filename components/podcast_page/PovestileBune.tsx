import VideoCard from "@/components/index_page/VideoCard";
import GlassList from "@/components/podcast_page/GlassList";

const PovestileBune = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full my-[4rem]">
        <h1 className="text-center text-[32px] leading-[44px] max-w-[22rem] text-white font-mustica-semibold ">
          Poveștile bune merită să fie auzite, iar oamenii care au ceva de spus,
          merită să fie ascultați.
        </h1>
        <div className="my-[4rem]">
          <VideoCard title="Titlu Nume Video" youtube_link="Youtube Link" />
        </div>
        <p className="text-[18px] text-center text-white font-mustica max-w-[20rem] ">
          Dacă și tu ai ceva de spus, indiferent dacă domeniul tău de interes
          este psihologia, gaming-ul, poezia, muzica sau pur și simplu ai de
          povestit experiențe de viață extraordinare, atunci vino să faci un
          Podcast!
        </p>
        <div className="my-[4rem]">
          <VideoCard title="Titlu Nume Video" youtube_link="Youtube Link" />
        </div>
        <div className="mb-[4rem]">
          <VideoCard title="Titlu Nume Video" youtube_link="Youtube Link" />
        </div>
        <div className="flex flex-col gap-[3rem] lg:grid lg:grid-cols-2 lg:w-full">
          <GlassList />
          <GlassList />
        </div>
      </div>
    </>
  );
};

export default PovestileBune;
