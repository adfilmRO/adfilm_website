import Footer from "@/components/index_page/Footer";
import PovestileBune from "@/components/podcast_page/PovestileBune";

const RestOfPodcastPage = async () => {
  return (
    <>
      <main className="restOfPodcastPage-section w-full flex flex-col justify-center items-center relative">
        <div className="wrapper lg:w-[95%] xl:w-[70%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <PovestileBune />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default RestOfPodcastPage;
