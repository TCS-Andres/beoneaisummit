const points = [
  {
    title: "More Than a Conference",
    text: "A platform for dialogue, collaboration, learning, and action.",
  },
  {
    title: "Technology That Serves Humanity",
    text: "AI evaluated not by what it can do, but by what it enables people to become.",
  },
  {
    title: "Miami Sets the Model",
    text: "Positioning Miami-Dade as the leading example of a Human-Centered AI Economy.",
  },
];

const framework = [
  { label: "Purpose", value: "Human Flourishing" },
  { label: "Principle", value: "Human-Centered AI" },
  { label: "Philosophy", value: "AI for Good" },
  { label: "Vision", value: "A Human-Centered AI Economy" },
];

const stats = [
  { value: "200", label: "Entrepreneurs, educators, and civic leaders" },
  { value: "1", label: "Day of dialogue, learning, and action" },
  { value: "6", label: "Pillars for a Human-Centered AI Economy" },
  { value: "2026", label: "The first of an annual convening of minds" },
];

export default function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-16 bg-frost text-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-iris">
            The Vision
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            The Future Is Not Predetermined. It Is Ours to Build.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            AI is the defining transformation of our era. This Summit makes
            sure small businesses lead it, not chase it.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-8">
            {points.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-heading text-2xl font-bold">{p.title}</h3>
                <p className="mt-1.5 text-slate">{p.text}</p>
              </div>
            ))}
            <video
              data-reveal
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
            {framework.map((f, i) => (
              <div
                key={f.label}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="lift rounded-xl border border-night/10 bg-white/70 px-5 py-4 backdrop-blur-md"
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

        <div
          data-reveal
          className="mt-14 grid gap-6 rounded-2xl border border-night/10 bg-white/70 p-8 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
        >
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
