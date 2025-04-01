import TitleSection from "./TitleSection";
import UnderlineText from "./UnderlineText";
import GoButton from "../GoButton/GoButton";

const TitleComp = () => {
  return (
    <div className="px-[160px] w-full h-[789px] flex items-center justify-center">
      <div className="w-full max-w-[1120px] flex flex-col items-center justify-center text-center gap-y-6 sm:gap-y-8">
        <TitleSection />
        <UnderlineText text="Asesorías personalizadas para que tu negocio crezca con seguridad" />
        <GoButton />
      </div>
    </div>
  );
};

export default TitleComp;