"use client";

import React, { useRef } from "react";
import useSetVideoTime from "../../hooks/useSetVideoTime";

const VideoContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useSetVideoTime(videoRef, 1);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[560px] h-[891px]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls
          src="https://gotogether-videos.s3.us-east-1.amazonaws.com/agro+gab.mp4" // Acá debe ir el video cuando lo tengan
        >
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default VideoContainer;