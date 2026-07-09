"use client";

import { useRef, useState } from "react";

/* Interactive 2.5D hologram: the artwork tilts in 3D toward the cursor,
   floats gently, and breathes a violet glow. Rendered with
   mix-blend-screen so its black background melts into the dark section. */
export default function HoloGlobe() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -16, y: px * 16 });
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative h-full w-full"
      style={{ perspective: "1100px" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[12%] rounded-full bg-accent/25 blur-3xl"
        style={{ animation: "holo-pulse 5s ease-in-out infinite" }}
      />
      <div
        className="relative h-full w-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="h-full w-full"
          style={{ animation: "holo-float 7s ease-in-out infinite" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/holo-globe.webp"
            alt="Robotic hands holding a holographic globe"
            className="h-full w-full object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(143,76,255,0.4)]"
            style={{ transform: "translateZ(50px)" }}
          />
        </div>
      </div>
    </div>
  );
}
