import Image from "next/image";
import { REGISTRATION_URL, SUMMIT } from "@/lib/config";
import AutoplayVideo from "./AutoplayVideo";

const details = [
  { label: "Date", value: SUMMIT.date },
  { label: "Venue", value: "Barry University, Andreas School of Business" },
  { label: "Time", value: SUMMIT.time },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <AutoplayVideo
        src="/media/hero-bg.mp4"
        poster="/media/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 22, 41, 0.3) 0%, rgba(20, 22, 41, 0.1) 45%, rgba(20, 22, 41, 0.82) 100%), radial-gradient(52rem 30rem at 50% 0%, rgba(143, 76, 255, 0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <div data-reveal>
          <p className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md [text-shadow:0_1px_10px_rgba(20,22,41,0.9)]">
            2nd Annual
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] [text-shadow:0_2px_24px_rgba(20,22,41,0.85)] sm:text-7xl">
            AI for Small Business{" "}
            <span className="bg-gradient-to-r from-glow to-[#85e9ff] bg-clip-text text-transparent [text-shadow:none]">
              Summit 2026
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-2xl font-semibold text-white [text-shadow:0_2px_18px_rgba(20,22,41,0.9)] sm:text-3xl">
            {SUMMIT.theme}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-mist [text-shadow:0_1px_14px_rgba(20,22,41,0.9)] sm:text-xl">
            {SUMMIT.tagline}. One day of keynotes, learning tracks, an
            innovation expo, and the Miami AI Debate.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={REGISTRATION_URL ?? "#register"}
              {...(REGISTRATION_URL
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-lg bg-gradient-to-r from-accent to-accent2 px-8 py-3.5 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(143,76,255,0.45)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Register Now
            </a>
            <a
              href="#agenda"
              className="rounded-lg border border-white/15 bg-white/5 px-8 py-3.5 text-lg font-semibold text-ink backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-glow hover:text-glow"
            >
              View the Agenda
            </a>
          </div>
        </div>

        <div data-reveal style={{ transitionDelay: "150ms" }} className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            Presented By
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
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

        <div
          data-reveal
          style={{ transitionDelay: "250ms" }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {details.map((d) => (
            <div key={d.label} className="px-7 py-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
                {d.label}
              </p>
              <p className="mt-1.5 font-heading text-base font-semibold text-mist">
                {d.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
