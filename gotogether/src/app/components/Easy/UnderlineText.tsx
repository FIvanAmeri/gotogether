interface UnderlineTextProps {
  text: string;
}

const UnderlineText = ({ text }: UnderlineTextProps) => {
  return (
    <div className="relative inline-block mt-[26px] sm:mt-[26px]">
      <span className="text-[16px] sm:text-[16px] font-inter font-normal">
        {text}
      </span>
    </div>
  );
};

export default UnderlineText;