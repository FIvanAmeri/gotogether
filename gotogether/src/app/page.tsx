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
      <main className="w-full max-w-7xl px-4 sm:px-8 mx-auto flex flex-col gap-8 sm:gap-12">
        <TitleSection />
        <UnderlineText text="Asesorías personalizadas para que tu negocio crezca con seguridad" />
        <GoButton />
      </main>

      <div className="mt-[250px]">
        <ColorLine />
      </div>

      <div className="w-full">
        <HowItWorksWithVideo />
        <ResponsiveContainer />
        <Carrousel />
        <MainContainer />
        <SecondLine />
        <BusinessTalk />
      </div>

      <ThirdLine />
    </div>
  );
}