import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { REGISTRATION_URL, SUMMIT } from "@/lib/config";
import HoloGlobe from "./HoloGlobe";

export default function RegisterCta() {
  return (
    <section id="register" className="relative scroll-mt-16 overflow-hidden">
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      >
        <source src="/media/network.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 22, 41, 0.85) 0%, rgba(20, 22, 41, 0.6) 50%, rgba(20, 22, 41, 0.9) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Card
          data-reveal
          className="relative overflow-hidden rounded-2xl border-white/10 bg-night/80 shadow-[0_20px_80px_rgba(143,76,255,0.15)] backdrop-blur-md"
        >
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="#b65eff"
          />

          <div className="relative z-10 flex flex-col items-center px-6 pt-10 text-center sm:px-12 sm:pt-14">
            <h2 className="text-3xl font-bold sm:text-4xl">
              The Future Is in{" "}
              <span className="bg-gradient-to-r from-glow to-[#85e9ff] bg-clip-text text-transparent">
                Our Hands
              </span>
            </h2>
            <p className="mt-5 max-w-2xl font-medium text-mist">
              Be part of the first AI for Small Business Summit. {SUMMIT.date} at{" "}
              {SUMMIT.venue}, {SUMMIT.city}. Join 200 entrepreneurs, educators,
              and leaders building a Human-Centered AI Economy.
            </p>

            {REGISTRATION_URL ? (
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg bg-gradient-to-r from-accent to-accent2 px-9 py-3.5 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(143,76,255,0.45)] transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Register Now
              </a>
            ) : (
              <span className="mt-8 inline-block rounded-lg border border-accent bg-panel px-9 py-3.5 text-lg font-semibold text-mist">
                Registration opens soon
              </span>
            )}
          </div>

          <div className="relative z-10 px-4 pb-8 pt-10 sm:px-10 sm:pb-10">
            <HoloGlobe />
          </div>
        </Card>
      </div>
    </section>
  );
}
