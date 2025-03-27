"use client"

import useCarouselAnimation from "../../hooks/useCarouselAnimation";

const Carousel = () => {
  const items = [
    "• Plan de negocios •",
    "• Gestión empresarial •",
    "• Marketing y ventas •",
    "• Proceso de ventas •",
    "• Modelo de negocios •",
    "• Derecho laboral •",
    "• Términos y condiciones •",
    "• Derecho Comercial •",
    "• Registro de Marcas •",
    "• Confección de contratos •",
    "• Representación de Influencers y Modelos •",
    "• Prevención - Gestión de accidentes y enfermedades laborales •"
  ];

  const duplicatedItems = [...items, ...items];
  const itemWidth = 160;
  const speed = 30;

  const translateX = useCarouselAnimation(items.length, speed, itemWidth);

  return (
    <div className="w-full min-h-[59px] bg-[#F2EEE6] flex items-center justify-start overflow-hidden">
      <div
        className="flex transition-transform duration-0 whitespace-nowrap"
        style={{
          transform: `translateX(-${translateX}px)`
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="px-4 text-[16px] font-medium leading-[20px] text-black inline-block min-w-[160px] sm:min-w-[200px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;