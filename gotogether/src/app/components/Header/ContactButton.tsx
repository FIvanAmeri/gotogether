"use client"

import React from "react";
import useScrollTo from "../../hooks/useScrollTo";

const ContactButton = () => {
  const scrollTo = useScrollTo();

  return (
    <div
      className="bg-black text-white text-sm md:text-base lg:text-lg whitespace-nowrap cursor-pointer hover:text-neutral-700 rounded-[30px] px-4 py-2 mt-4"
      onClick={() => scrollTo("calendly")}
    >
      ¡Escríbenos!
    </div>
  );
};

export default ContactButton;