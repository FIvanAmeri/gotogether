"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useVideoRefs, useVideoNavigation } from "../../hooks/useVideoSlider";

const videos = [
  "https://gotogether-videos.s3.us-east-1.amazonaws.com/agro+gab.mp4",
  "https://gotogether-videos.s3.us-east-1.amazonaws.com/autos+facu.mp4",
  "https://gotogether-videos.s3.us-east-1.amazonaws.com/autos131.mp4",
  "https://gotogether-videos.s3.us-east-1.amazonaws.com/testimonials.mp4",
  "https://gotogether-videos.s3.us-east-1.amazonaws.com/berissense.mp4",
];

const VideoSlider = () => {
  const { currentIndex, nextVideo, prevVideo } = useVideoNavigation(videos);
  const videoRefs = useVideoRefs(videos, currentIndex);

  const handleVideoClick = (videoRef: HTMLVideoElement | null) => {
    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play();
      } else {
        videoRef.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden ml-5 md:-ml-30">
      <div className="flex items-center justify-center w-full h-full relative md:mt-20 sm:mt-20">
        {videos.map((video, index) => {
          const position = (index - currentIndex + videos.length) % videos.length;
          const isCenter = position === 0;
          const isLeft = position === videos.length - 1;
          const isRight = position === 1;

          return (
            <video
              key={index}
              src={video}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              onClick={() => handleVideoClick(videoRefs.current[index])}
              className={`absolute transition-all duration-500 ease-in-out ${
                isCenter
                  ? "w-full h-full z-20 scale-100 opacity-100 cursor-default"
                  : isLeft
                  ? "w-1/2 h-1/2 opacity-50 z-10 scale-90 left-0"
                  : isRight
                  ? "w-1/2 h-1/2 opacity-50 z-10 scale-90 right-0"
                  : "hidden"
              }`}
            />
          );
        })}
      </div>

      <button
        onClick={prevVideo}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextVideo}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default VideoSlider;