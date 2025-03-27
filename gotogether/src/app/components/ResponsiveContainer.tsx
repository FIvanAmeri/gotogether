"use client";
import AdvisoryTypes from "./Advisory/AdvisoryTypes";
import LegalCard from "./Advisory/LegalCard";
import ManagementAdvisory from "./Advisory/ManagementAdvisory";

const ResponsiveContainer = () => {
  return (
    <div className="w-full min-h-[50vh] md:min-h-[848px] bg-[#F8F7F5]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <AdvisoryTypes />
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8">
          <LegalCard />
          <ManagementAdvisory />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;