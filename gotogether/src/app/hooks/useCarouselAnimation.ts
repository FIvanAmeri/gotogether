import { useState, useEffect } from "react";

const useCarouselAnimation = (itemsLength: number, speed: number, itemWidth: number) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let lastTimestamp: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      setTranslateX((prev) => {
        let newTranslate = prev + (speed * delta) / 1000;
        if (newTranslate >= itemsLength * itemWidth) {
          newTranslate -= itemsLength * itemWidth;
        }
        return newTranslate;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [itemsLength, speed, itemWidth]);

  return translateX;
};

export default useCarouselAnimation;
