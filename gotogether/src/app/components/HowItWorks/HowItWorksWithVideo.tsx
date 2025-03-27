import VideoContainer from "./VideoContainer";
import HowItWorks from "./HowItWorks";

const HowItWorksWithVideo = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-4 gap-8 sm:gap-12">
        <div className="w-full max-w-[560px]">
          <VideoContainer />
        </div>
        <div className="w-full max-w-[418px]">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithVideo;