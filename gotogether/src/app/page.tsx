

import Header from "./components/Header/Header";
import TitleSection from "./components/Easy/TitleSection";
import UnderlineText from "./components/Easy/UnderlineText";
import GoButton from "./components/GoButton/GoButton";
import ColorLine from "./components/ColorLine";
import ResponsiveContainer from "./components/ResponsiveContainer";
import HowItWorksWithVideo from "./components/HowItWorks/HowItWorksWithVideo";
import Carrousel from "./components/Carrousel/Carrousel";
import MainContainer from "./components/Slider/MainContainer";
import SecondLine from "./components/SecondLine";
import BusinessTalk from "./components/Business/BusinessTalk";
import ThirdLine from "./components/ThirdLine";

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <div className="w-full flex justify-end md:justify-start">
          <Header />
        </div>
      </div>

      <div className="px-4 w-full flex flex-col items-center py-8 sm:py-12">
        <main className="w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 text-center">
          <TitleSection />
          <UnderlineText text="Asesorías personalizadas para que tu negocio crezca con seguridad" />
          <GoButton />
        </main>
      </div>

      <div className="mt-8 sm:mt-16 lg:mt-[250px] w-full">
        <ColorLine />
      </div>

      <div className="px-4 sm:px-8 lg:px-[160px] w-full">
        <HowItWorksWithVideo />
      </div>

      <div className="px-4 sm:px-8 lg:px-[160px] w-full flex flex-col">
        <div className="order-2 sm:order-1">
          <ResponsiveContainer />
        </div>
        <div className="order-1 sm:order-2">
          <MainContainer />
        </div>
      </div>

      <div className="w-full mt-8 sm:mt-12">
        <Carrousel />
      </div>

      <SecondLine />

      <div className="px-4 sm:px-8 lg:px-[160px] w-full">
        <BusinessTalk />
      </div>

      <ThirdLine />
    </div>
  );
}