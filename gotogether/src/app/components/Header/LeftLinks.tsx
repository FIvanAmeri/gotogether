"use client"

import useScrollTo from "../../hooks/useScrollTo";

const LeftLinks = () => {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col sm:flex-row items-center mt-8">
      <div
        className="text-neutral-500 text-[14px] whitespace-nowrap cursor-pointer mr-[26px] font-sans font-normal"
        onClick={() => scrollTo("how-it-works")}
      >
        ¿Cómo funciona?
      </div>
      <div
        className="text-neutral-500 text-[14px] whitespace-nowrap cursor-pointer mr-[26px] font-sans font-normal"
        onClick={() => scrollTo("advisory-types")}
      >
        Tipos de asesoría
      </div>
      <div
        className="text-neutral-500 text-[14px] whitespace-nowrap cursor-pointer mr-[34px] font-sans font-normal"
        onClick={() => scrollTo("about")}
      >
        Nosotros
      </div>
    </div>
  );
};

export default LeftLinks;