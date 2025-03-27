import { useEffect, useRef, useState } from "react";

export const useVideoRefs = (videos: string[], currentIndex: number) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const visibleVideos = [
      videoRefs.current[currentIndex],
      videoRefs.current[(currentIndex - 1 + videos.length) % videos.length],
      videoRefs.current[(currentIndex + 1) % videos.length],
    ];

    visibleVideos.forEach((videoRef) => {
      if (videoRef) {
        videoRef.currentTime = 2;
      }
    });
  }, [currentIndex, videos]);

  return videoRefs;
};

export const useVideoNavigation = (videos: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return { currentIndex, nextVideo, prevVideo };
};