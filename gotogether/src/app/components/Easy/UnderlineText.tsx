import React from "react";

interface UnderlineTextProps {
  text: string;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ text }) => {
  return (
    <div className="w-[300px] sm:w-[521px] h-[20px] sm:absolute sm:top-[570px] sm:left-1/2 sm:transform sm:-translate-x-1/2 mt-8 sm:mt-0 mx-auto sm:mx-0 ml-20 text-center">
      <span className="text-[16px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal leading-[23px] tracking-[0%] text-center">
        {text}
      </span>
    </div>
  );
};

export default UnderlineText;