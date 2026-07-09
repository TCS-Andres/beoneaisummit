export default function Debate() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(168, 116, 232, 0.16), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Event · 11:00 AM
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The Miami AI Debate
          </h2>
          <p className="mt-4 text-muted">
            A Munk-style debate examining both the promise and the risk of
            artificial intelligence.
          </p>
        </div>
        <blockquote
          data-reveal
          style={{ transitionDelay: "120ms" }}
          className="lift mt-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-8 py-10"
        >
          <p className="font-heading text-2xl font-semibold leading-snug text-mist sm:text-3xl">
            &ldquo;Be it resolved: artificial intelligence will advance human
            flourishing more than it will diminish it.&rdquo;
          </p>
          <footer className="mt-5 text-sm uppercase tracking-[0.2em] text-muted">
            The Motion
          </footer>
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted">
          The objective is not division but thoughtful inquiry. By examining
          both sides, participants gain a deeper appreciation for the choices
          that will shape the future of AI.
        </p>
      </div>
    </section>
  );
}
