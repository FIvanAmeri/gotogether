"use client"

import React from "react";
import useScrollTo from "../../hooks/useScrollTo";

const ContactButton = () => {
  const scrollTo = useScrollTo();

  return (
    <div
      className="bg-black text-white whitespace-nowrap cursor-pointer rounded-[30px] flex items-center justify-center font-semibold text-[14px] leading-none mt-8"
      style={{
        width: '111px',
        height: '32px'
      }}
      onClick={() => scrollTo("calendly")}
    >
      ¡Escribinos!
    </div>
  );
};

export default ContactButton;