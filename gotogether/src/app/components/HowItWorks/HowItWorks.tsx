import React from "react";
import { IoChatbubblesOutline, IoRocketOutline, IoDocumentsOutline } from "react-icons/io5";

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="w-full flex flex-col items-start">
      <div className="w-[249px] h-[34px] flex items-center justify-start">
        <p className="font-inter font-medium text-[24px] sm:text-[28px] leading-tight text-left">
          ¿Cómo funciona?
        </p>
      </div>

      <div className="w-full max-w-[418px] border-t-[2.5px] border-black mt-4"></div>

      <div className="w-full max-w-[418px] mt-8">
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-4">
            <IoChatbubblesOutline className="text-6xl w-[70px] h-[70px] text-gray-800" />
            <p className="font-inter font-semibold text-[20px] leading-tight tracking-wide text-gray-800">
              Paso 1
            </p>
          </div>
          <div className="w-[300px] mt-2">
            <p className="font-inter font-normal text-[16px] leading-tight text-neutral-500">
              Tenemos entrevistas previas sin costo para entender dónde está tu negocio hoy y hacia dónde querés ir.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[418px] border-t-[2.5px] border-neutral-500 mt-8"></div>

        <div className="flex flex-col items-start text-left mt-8">
          <div className="flex items-center gap-4">
            <IoRocketOutline className="text-6xl w-[70px] h-[70px] text-gray-800 transform -rotate-45" />
            <p className="font-inter font-semibold text-[20px] leading-tight tracking-wide text-gray-800">
              Paso 2
            </p>
          </div>
          <div className="w-[300px] mt-2">
            <p className="font-inter font-normal text-[16px] leading-tight text-neutral-500">
              Asesoría de 60 min con un plan adaptado a tus recursos para optimizar tiempo y dinero.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[418px] border-t-[2.5px] border-neutral-500 mt-8"></div>

        <div className="flex flex-col items-start text-left mt-8">
          <div className="flex items-center gap-4">
            <IoDocumentsOutline className="text-6xl w-[70px] h-[70px] text-gray-800" />
            <p className="font-inter font-semibold text-[20px] leading-tight tracking-wide text-gray-800">
              Paso 3
            </p>
          </div>
          <div className="w-[300px] mt-2">
            <p className="font-inter font-normal text-[16px] leading-tight text-neutral-500">
              Te enviamos material complementario así tenés a mano todo lo aprendido para cuando lo necesites.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[418px] border-t-[2.5px] border-neutral-500 mt-8"></div>
      </div>
    </div>
  );
};

export default HowItWorks;