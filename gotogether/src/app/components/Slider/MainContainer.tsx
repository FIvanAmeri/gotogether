import VideoSlider from "./VideoSlider";
import About from "./About";

const MainContainer = () => {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-8 mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-1/2 ml-auto mr-8">
          <About />
        </div>
        <div className="w-full md:w-1/2">
          <VideoSlider />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;