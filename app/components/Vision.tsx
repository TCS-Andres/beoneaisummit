const framework = [
  { label: "Purpose", value: "Human Flourishing" },
  { label: "Principle", value: "Human-Centered AI" },
  { label: "Philosophy", value: "AI for Good" },
  { label: "Vision", value: "A Human-Centered AI Economy" },
];

const stats = [
  { value: "200", label: "Entrepreneurs, students, educators, and civic leaders" },
  { value: "1", label: "Day of dialogue, learning, and action" },
  { value: "6", label: "Pillars for a Human-Centered AI Economy" },
  { value: "2026", label: "The first of an annual convening of minds" },
];

export default function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-16 bg-frost text-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-iris">
          The Vision
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
          The future is not predetermined. It is ours to build.
        </h2>
        <div className="mt-6 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate sm:text-lg">
            <p>
              Artificial intelligence represents one of the most significant
              technological transformations in human history. The defining
              question is not whether AI will transform society. It is how we
              ensure that transformation expands opportunity, strengthens
              communities, and contributes to broad-based prosperity.
            </p>
            <p>
              The AI for Small Business Summit is more than a conference. It is
              a platform for dialogue, collaboration, learning, and action,
              grounded in the belief that AI should be evaluated not only by
              what it can do, but by what it enables humanity to become.
            </p>
            <p>
              Micro and small businesses are among the most important drivers
              of innovation, ownership, and community resilience. The Summit
              seeks to position Miami-Dade County as a leading model for
              building a Human-Centered AI Economy, one where small businesses
              help shape the future rather than watch it happen.
            </p>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full rounded-2xl border border-night/10 object-cover"
              aria-label="An entrepreneur working with AI tools"
            >
              <source src="/media/entrepreneur.mp4" type="video/mp4" />
            </video>
          </div>

          <dl className="grid content-start gap-4">
            {framework.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-night/10 bg-white/70 backdrop-blur-md px-5 py-4"
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                  {f.label}
                </dt>
                <dd className="mt-1 font-heading text-lg font-semibold text-deep">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-night/10 bg-white/70 backdrop-blur-md p-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl font-bold text-iris">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
