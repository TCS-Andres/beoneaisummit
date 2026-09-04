import Image from "next/image";

const panelists = [
  {
    name: "Tarik Safouan",
    title: "Senior Director, Barry University AI Center",
    photo: "/speakers/tarik-safouan.webp",
  },
  {
    name: "Marcin Ladowski",
    title: "CEO & Co-Founder, HUVA",
    photo: "/speakers/marcin-ladowski.webp",
  },
  {
    name: "Jens Müller",
    title: "Founder and CEO, TBench.Solutions",
    photo: "/speakers/jens-muller.webp",
  },
];

export default function DesignatedAi() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(90, 184, 255, 0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Panel · 12:10 PM
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Designated AI</h2>
          <p className="mt-4 text-muted">
            Practical AI Strategies for Business Growth.
          </p>
        </div>

        <div data-reveal style={{ transitionDelay: "120ms" }} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Moderated By
          </p>
          <div className="mt-6">
            <Image
              src="/speakers/christina-costanzo.webp"
              alt="Christina Costanzo"
              width={160}
              height={160}
              className="mx-auto h-24 w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40"
            />
            <p className="mt-3 font-heading text-sm font-semibold text-ink">
              Christina Costanzo
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted">
              Director, Business Transformation, Embark
            </p>
          </div>
        </div>

        <div data-reveal style={{ transitionDelay: "180ms" }} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            The Panelists
          </p>
          <ul className="mt-6 flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
            {panelists.map((p) => (
              <li key={p.name} className="w-40 shrink-0">
                <Image
                  src={p.photo}
                  alt={p.name}
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40"
                />
                <p className="mt-3 font-heading text-sm font-semibold text-ink">
                  {p.name}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-muted">
                  {p.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
