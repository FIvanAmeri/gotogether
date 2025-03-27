"use client"

import useScrollTo from "../../hooks/useScrollTo";

const LeftLinks = () => {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4">
      <div
        className="text-neutral-500 text-sm md:text-base lg:text-lg whitespace-nowrap cursor-pointer hover:text-neutral-700"
        onClick={() => scrollTo("how-it-works")}
      >
        ¿Cómo funciona?
      </div>
      <div
        className="text-neutral-500 text-sm md:text-base lg:text-lg whitespace-nowrap cursor-pointer hover:text-neutral-700"
        onClick={() => scrollTo("advisory-types")}
      >
        Tipos de asesoría
      </div>

      <div
        className="text-neutral-500 text-sm md:text-base lg:text-lg whitespace-nowrap cursor-pointer hover:text-neutral-700"
        onClick={() => scrollTo("about")}
      >
        Nosotros
      </div>
    </div>
  );
};

export default LeftLinks;