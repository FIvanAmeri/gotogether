const TitleSection = () => {
  return (
    <div className="w-full flex flex-col items-center text-center relative mt-5 sm:mt-0">
      <span
        className="font-normal block text-[40px] leading-[50px] sm:text-[65px] sm:leading-[65px] w-[300px] sm:w-[429px] h-[50px] sm:h-[65px] sm:absolute sm:top-[310px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-0"
      >
        Si fuera fácil,
      </span>
      <span
        className="font-bold block text-[40px] leading-[50px] sm:text-[65px] sm:leading-[65px] w-[300px] sm:w-[618px] h-[50px] sm:h-[65px] sm:absolute sm:top-[394px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-0 mt-4 sm:mt-0"
      >
        no estaríamos acá
      </span>
    </div>
  );
};

export default TitleSection;