const pillars = [
  {
    name: "Access",
    text: "Ensuring meaningful access to AI tools and infrastructure for every business and community.",
  },
  {
    name: "Capability",
    text: "Building the skills and confidence needed to participate in the AI economy.",
  },
  {
    name: "Innovation",
    text: "Encouraging entrepreneurship and value creation across Miami-Dade and beyond.",
  },
  {
    name: "Participation",
    text: "Creating pathways for meaningful engagement in the opportunities AI creates.",
  },
  {
    name: "Shared Prosperity",
    text: "Expanding economic opportunity and mobility so the benefits of AI are broadly felt.",
  },
  {
    name: "Responsible Stewardship",
    text: "Advancing innovation while weighing its long-term impact on society.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-16 bg-frost text-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-iris">
          The Strategy
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          The Six Pillars Framework
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          Six pillars provide the strategic foundation for building a
          Human-Centered AI Economy.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-night/10 bg-white/70 backdrop-blur-md p-6 transition-colors hover:border-accent"
            >
              <p className="font-heading text-sm font-semibold text-iris">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-deep">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
