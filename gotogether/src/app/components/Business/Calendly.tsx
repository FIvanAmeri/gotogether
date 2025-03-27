"use client"

import { InlineWidget } from "react-calendly";

const Calendly: React.FC = () => {
  return (
    <div id="calendly" className="w-full max-w-[1000px] h-[600px] bg-white mx-auto">
      <div className="w-full h-full px-4 sm:px-0 overflow-hidden">
        <InlineWidget
          url="https://calendly.com/ldecesare-consultoria/30min?month=2025-03"
          styles={{
            height: "700px",
            width: "100%",
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;