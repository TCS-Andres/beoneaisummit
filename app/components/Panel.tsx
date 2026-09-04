import Image from "next/image";

const panelists = [
  {
    name: "Dr. Camille Samuel",
    title: "Campus Registrar, UWI",
    photo: "/speakers/camille-samuel.webp",
  },
  {
    name: "Adriana Madrinan",
    title: "Creator of The Madrinan Playground™",
    photo: "/speakers/adriana-madrinan-v2.webp",
  },
  {
    name: "Ria Karim",
    title: "Chairman, iGovTT",
    photo: "/speakers/ria-karim.webp",
  },
];

export default function Panel() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(61, 123, 255, 0.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Panel · 11:40 AM
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Leadership in the Age of AI
          </h2>
          <p className="mt-4 text-muted">
            Navigating Transformation, Opportunity and Human Impact.
          </p>
        </div>

        <div data-reveal style={{ transitionDelay: "120ms" }} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Panel Host
          </p>
          <div className="mt-6">
            <Image
              src="/speakers/selen-turner-v2.webp"
              alt="Dr. Selen Turner"
              width={160}
              height={160}
              className="mx-auto h-24 w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40"
            />
            <p className="mt-3 font-heading text-sm font-semibold text-ink">
              Dr. Selen Turner
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted">
              CEO, The Turner Connection
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
