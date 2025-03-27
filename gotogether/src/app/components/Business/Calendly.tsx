"use client"

import { InlineWidget } from "react-calendly";

const Calendly: React.FC = () => {
  return (
    <div id="calendly" className="w-full max-w-[1000px] h-[600px] bg-white mx-auto">
      <InlineWidget
        url="https://calendly.com/ldecesare-consultoria/30min?month=2025-03"
        styles={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Calendly;