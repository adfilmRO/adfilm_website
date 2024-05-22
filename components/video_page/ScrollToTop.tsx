import { LuArrowUpCircle } from "react-icons/lu";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="bg-white flex justify-center shadow-lg w-[3rem] h-[3rem] rounded-full items-center active:bg-adfilm-purple active:shadow-adfilm-purple active:text-white active:border-adfilm-purple transition-all border-2 border-white hover:text-white hover:bg-transparent duration-200 cursor-pointer py-2 text-black font-mustica-semibold"
    >
      <LuArrowUpCircle className="text-3xl" />
    </button>
  );
};

export default ScrollToTopButton;
