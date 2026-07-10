import {
  Compass,
  Eye,
  HeartHandshake,
  MapPin,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

const points: { title: string; text: string; icon: LucideIcon }[] = [
  {
    icon: Users,
    title: "More Than a Conference",
    text: "A platform for dialogue, collaboration, learning, and action.",
  },
  {
    icon: HeartHandshake,
    title: "Technology That Serves Humanity",
    text: "AI evaluated not by what it can do, but by what it enables people to become.",
  },
  {
    icon: MapPin,
    title: "Miami Sets the Model",
    text: "Positioning Miami-Dade as the leading example of a Human-Centered AI Economy.",
  },
];

const framework: { label: string; value: string; icon: LucideIcon }[] = [
  { icon: Sprout, label: "Purpose", value: "Human Flourishing" },
  { icon: Compass, label: "Principle", value: "Human-Centered AI" },
  { icon: Sparkles, label: "Philosophy", value: "AI for Good" },
  { icon: Eye, label: "Vision", value: "A Human-Centered AI Economy" },
];

const stats = [
  { value: "200", label: "Entrepreneurs, educators, and civic leaders" },
  { value: "1", label: "Day of dialogue, learning, and action" },
  { value: "6", label: "Pillars for a Human-Centered AI Economy" },
  { value: "2026", label: "The second annual convening of minds" },
];

export default function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-16 bg-frost text-deep">
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
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
          <div className="space-y-7">
            {points.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-iris">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-slate">{p.text}</p>
                </div>
              </div>
            ))}
            <video
              data-reveal
              autoPlay
              muted
              loop
              playsInline
              className="mt-1 aspect-[4/3] w-full rounded-2xl border border-night/10 object-cover"
              aria-label="Highlights from the AI for Small Business Summit"
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
                className="lift flex items-start gap-4 rounded-xl border border-night/10 bg-white/70 px-5 py-4 backdrop-blur-md"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-iris/10 text-iris">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-heading text-lg font-semibold text-deep">
                    {f.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div
          data-reveal
          className="mt-14 grid gap-8 rounded-2xl border border-night/10 bg-white/70 p-8 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
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
