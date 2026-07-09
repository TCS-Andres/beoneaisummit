import { REGISTRATION_URL, SUMMIT } from "@/lib/config";

export default function RegisterCta() {
  return (
    <section id="register" className="relative scroll-mt-16 overflow-hidden">
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/media/network.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 22, 41, 0.6) 0%, rgba(20, 22, 41, 0.25) 50%, rgba(20, 22, 41, 0.8) 100%), radial-gradient(50rem 26rem at 50% 100%, rgba(143, 76, 255, 0.22), transparent 70%)",
        }}
      />
      <div
        data-reveal
        className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28"
      >
        <h2 className="text-3xl font-bold sm:text-5xl">
          Be Part of the First{" "}
          <span className="bg-gradient-to-r from-glow to-[#85e9ff] bg-clip-text text-transparent">
            AI for Small Business Summit
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-medium text-mist [text-shadow:0_1px_14px_rgba(20,22,41,0.9)] sm:text-lg">
          {SUMMIT.date} at {SUMMIT.venue}, {SUMMIT.city}. Join 200
          entrepreneurs, educators, and leaders building a Human-Centered AI
          Economy.
        </p>

        {REGISTRATION_URL ? (
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-lg bg-gradient-to-r from-accent to-accent2 px-9 py-3.5 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(143,76,255,0.45)] transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Register Now
          </a>
        ) : (
          <div className="mt-9">
            <span className="inline-block rounded-lg border border-accent bg-panel px-9 py-3.5 text-lg font-semibold text-mist">
              Registration opens soon
            </span>
            <p className="mt-4 text-sm text-muted">
              Registration details are being finalized. Check back here for the
              official sign-up link.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
