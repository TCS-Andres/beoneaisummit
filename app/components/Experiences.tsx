const experiences = [
  {
    name: "Entrepreneur Learning Track",
    text: "Practical AI adoption for entrepreneurs: automating the work that slows you down and building your first AI employee.",
    icon: (
      <path
        d="M4 19V9.5L12 4l8 5.5V19h-5.5v-5.5h-5V19H4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Innovation Expo & Trade Fair",
    text: "A showcase of technologies, innovators, entrepreneurs, ecosystem partners, and solution providers.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path
          d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    name: "TED-Style Presentations",
    text: "Fast, practical AI concepts and perspectives for every attendee, from economic opportunity to the next frontier.",
    icon: (
      <path
        d="M8 20h8M12 16v4M4 4h16v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm5 8 3-5 3 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "The Summit Report",
    text: "A permanent record of insights, recommendations, and participant perspectives from a defining moment in history.",
    icon: (
      <path
        d="M6 3.5h9.5L19 7v13.5H6V3.5Zm9 0V7h4M9 11h6M9 14.5h6M9 18h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-16 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            The Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Signature Summit Experiences
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Designed to move attendees from awareness to understanding,
            application, and alignment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {experiences.map((e, i) => (
            <div
              key={e.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="lift group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md hover:border-accent/60"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent/25 to-accent2/25 text-glow">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                  {e.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{e.name}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {e.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
