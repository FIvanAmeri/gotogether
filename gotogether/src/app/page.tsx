import Header from "./components/Header/Header";
import TitleComp from "./components/Easy/TitleComp";
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
      <Header />

      <TitleComp />
 
        <ColorLine />
   

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