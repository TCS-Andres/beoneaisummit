"use client";

import { useRef, useState } from "react";

/* The hands-and-globe graphic presented as a floating panel: a soft violet
   glow behind it, a gentle float, and a subtle 3D tilt toward the cursor. */
export default function HoloGlobe() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative mx-auto w-full max-w-3xl"
      style={{ perspective: "1400px" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 inset-y-6 rounded-full bg-accent/25 blur-3xl"
        style={{ animation: "holo-pulse 5s ease-in-out infinite" }}
      />
      <div
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ animation: "holo-float 7s ease-in-out infinite" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/hands-globe-banner.webp"
            alt="Robotic hands holding a holographic globe, presented by Branches, BE ONE, and the AI Center at Barry University"
            className="w-full rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(143,76,255,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}
