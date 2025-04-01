"use client";

import useScrollTo from "@/app/hooks/useScrollTo";

const GoButton = () => {
  const scrollTo = useScrollTo();

  return (
    <div
      className="go-button-container w-[70px] h-[70px] flex items-center justify-center mx-auto mt-[400px]"
      onClick={() => scrollTo("how-it-works")}
    >
      <button
        className="go-button relative w-full h-full rounded-full border-none shadow-[0px_0px_8px_rgba(0,0,0,0.3)] text-xs sm:text-base font-inter font-medium text-[20px] leading-[16px] tracking-[0%] transition-all duration-300 overflow-hidden group"
      >

        <span className="relative z-10 text-[#737373] group-hover:text-white transition-colors duration-300">
          ¡GO!
        </span>

        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "conic-gradient(from 0deg, #15AE73, #7BC9DF, #F5C745, #D75355, #E9811E, #F5C745, #15AE73)",
            filter: "blur(10px)",
          }}
        />
      </button>
    </div>
  );
};

export default GoButton;
