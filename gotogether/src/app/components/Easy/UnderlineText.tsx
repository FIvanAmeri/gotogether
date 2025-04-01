import React from "react";

interface UnderlineTextProps {
  text: string;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ text }) => {
  return (
    <div className="w-[300px] sm:w-[600px] h-[20px] sm:absolute sm:top-[520px] sm:left-1/2 sm:transform sm:-translate-x-1/2 mt-8 sm:mt-0 mx-auto text-center">
      <span className="text-[16px] sm:text-[18px] font-normal leading-[23px] tracking-[0%] whitespace-nowrap block overflow-hidden text-ellipsis">
        {text}
      </span>
    </div>
  );
};

export default UnderlineText;