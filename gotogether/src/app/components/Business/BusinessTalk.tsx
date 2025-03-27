import BusinessContact from "./BusinessContact";
import Calendly from "./Calendly";

const BusinessTalk = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center p-4">
      <BusinessContact />
      <div className="w-full max-w-[1000px] h-auto min-h-[700px] bg-white mt-10">
        <Calendly />
      </div>
    </div>
  );
};

export default BusinessTalk;