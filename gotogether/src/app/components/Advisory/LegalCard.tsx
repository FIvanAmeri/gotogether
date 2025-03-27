const LegalCard = () => {
  return (
    <div className="w-full max-w-full md:w-[545px] md:h-[420px] bg-white rounded-[10px] p-6">
      <h2 className="text-[20px] md:text-[22px] font-semibold leading-[22px] md:leading-[24px] text-black text-left">
        Asesoría legal
      </h2>
      <hr className="w-full border-[1px] mt-4 md:mt-6" />
      <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[23px] text-neutral-500 mt-4 md:mt-6">
        Puede ser de ayuda en dos posibles escenarios:
      </p>
      <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4">
        <li className="flex items-start">
          <span className="w-2 h-2 bg-black rounded-full mt-2 mr-2"></span>
          <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[23px] text-neutral-500">
            De forma preventiva: a fin de que tengas más herramientas para evitar conflictos legales que terminen en pérdidas de tiempo y dinero.
          </p>
        </li>
        <li className="flex items-start">
          <span className="w-2 h-2 bg-black rounded-full mt-2 mr-2"></span>
          <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[23px] text-neutral-500">
            Intercambio de posiciones: cuando el conflicto ya ocurrió una asesoría permite resolver problemas antes de que se agraven. Lo ideal es encontrar una solución justa sin llegar a la vía judicial.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default LegalCard;