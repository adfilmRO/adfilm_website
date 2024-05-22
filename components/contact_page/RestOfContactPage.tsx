import Footer from "@/components/index_page/Footer";
import ContactForm from "./ContactForm";

const RestOfContactPage = ({ footerData, footerSocialLinksData }: any) => {
  return (
    <>
      <main className="restOfContactPage-section w-full flex flex-col justify-center items-center relative overflow-x-hidden">
        <div className="wrapper lg:w-[95%] xl:w-[90%] 1780px:w-[60%] max-w-[130rem] w-full flex flex-col justify-center items-center">
          <ContactForm />
        </div>
        <Footer
          footerData={footerData}
          footerSocialLinksData={footerSocialLinksData}
        />
      </main>
    </>
  );
};

export default RestOfContactPage;
