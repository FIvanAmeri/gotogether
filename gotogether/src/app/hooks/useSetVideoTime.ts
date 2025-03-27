import { useEffect, RefObject } from "react";

const useSetVideoTime = (videoRef: RefObject<HTMLVideoElement | null>, time: number = 1) => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  }, [videoRef, time]);
};

export default useSetVideoTime;
