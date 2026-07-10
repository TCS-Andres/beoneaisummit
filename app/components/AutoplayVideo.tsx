"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  "aria-label"?: string;
};

/* React omits the muted attribute from server-rendered HTML, so browsers
   with strict autoplay policies refuse to start these videos. Set muted
   imperatively and kick off playback, retrying on first interaction. */
export default function AutoplayVideo({
  src,
  className,
  poster,
  "aria-label": ariaLabel,
}: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    const play = () => video.play().catch(() => {});
    play();

    const retry = () => play();
    document.addEventListener("touchstart", retry, {
      once: true,
      passive: true,
    });
    document.addEventListener("click", retry, { once: true });
    return () => {
      document.removeEventListener("touchstart", retry);
      document.removeEventListener("click", retry);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
      aria-label={ariaLabel}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
