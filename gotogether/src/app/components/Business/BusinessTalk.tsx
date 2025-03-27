import BusinessContact from "./BusinessContact";
import Calendly from "./Calendly";

const BusinessTalk = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center p-4 mt-30">
      <BusinessContact />
      <div className="w-full max-w-[1000px] h-[400px] sm:h-[600px] bg-white mx-auto mt-10">
        <Calendly />
      </div>
    </div>
  );
};

export default BusinessTalk;