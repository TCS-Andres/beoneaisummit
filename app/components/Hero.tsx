import Image from "next/image";
import { REGISTRATION_URL, SUMMIT } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="/media/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 7, 15, 0.35) 0%, rgba(5, 7, 15, 0.15) 45%, rgba(5, 7, 15, 0.85) 100%), radial-gradient(52rem 30rem at 78% 0%, rgba(124, 92, 255, 0.22), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <p className="inline-flex flex-wrap items-center gap-x-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide text-mist sm:text-sm">
          <span className="text-glow">{SUMMIT.date}</span>
          <span aria-hidden className="text-muted">|</span>
          <span>
            {SUMMIT.venue}, {SUMMIT.city}
          </span>
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
          AI for Small Business{" "}
          <span className="bg-gradient-to-r from-glow to-[#6ec1ff] bg-clip-text text-transparent">
            Summit 2026
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-xl font-medium text-mist sm:text-2xl">
          {SUMMIT.theme}
        </p>
        <p className="mt-2 max-w-2xl text-base text-muted sm:text-lg">
          {SUMMIT.tagline}. One day of keynotes, learning tracks, an innovation
          expo, and the Miami AI Debate, built for the people who power our
          economy.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={REGISTRATION_URL ?? "#register"}
            {...(REGISTRATION_URL
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="rounded-lg bg-gradient-to-r from-accent to-accent2 px-7 py-3 text-base font-semibold text-white transition-colors hover:brightness-110"
          >
            Register now
          </a>
          <a
            href="#agenda"
            className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-glow hover:text-glow"
          >
            View the agenda
          </a>
        </div>

        <div className="mt-14 border-t border-edge/60 pt-7">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Hosted by
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-5">
            <Image
              src="/logos/branches.png"
              alt="Branches, Trish & Dan Bell Family Empowerment Centers"
              width={244}
              height={83}
              className="h-12 w-auto sm:h-14"
            />
            <Image
              src="/logos/be-one.png"
              alt="BE ONE"
              width={165}
              height={52}
              className="h-9 w-auto sm:h-10"
            />
            <Image
              src="/logos/barry-ai-center.png"
              alt="AI Center at Barry University"
              width={198}
              height={54}
              className="h-10 w-auto sm:h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
