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
            "radial-gradient(52rem 22rem at 50% 0%, rgba(61, 123, 255, 0.14), transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 sm:pb-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Panel · 11:40 AM
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Leadership in the Age of AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-heading text-lg font-semibold text-mist sm:text-xl">
            Navigating Transformation, Opportunity and Human Impact
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Leaders from higher education, government, and entrepreneurship on
            what it takes to guide people and institutions through AI-driven
            change.
          </p>
        </div>

        <div data-reveal className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Hosted By
          </p>
          <div className="mt-5 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-left backdrop-blur-md">
            <Image
              src="/speakers/selen-turner.webp"
              alt="Dr. Selen Turner"
              width={160}
              height={160}
              className="h-16 w-16 shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40"
            />
            <div>
              <p className="font-heading text-base font-semibold text-ink">
                Dr. Selen Turner
              </p>
              <p className="mt-0.5 text-sm text-muted">
                CEO, The Turner Connection
              </p>
            </div>
          </div>
        </div>

        <p
          data-reveal
          className="mt-12 text-xs font-semibold uppercase tracking-[0.25em] text-glow"
        >
          The Panelists
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {panelists.map((p, i) => (
            <li
              key={p.name}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="lift rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur-md"
            >
              <Image
                src={p.photo}
                alt={p.name}
                width={200}
                height={200}
                className="mx-auto h-24 w-24 rounded-full object-cover object-top ring-2 ring-accent/40"
              />
              <p className="mt-4 font-heading text-base font-semibold text-ink">
                {p.name}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted">{p.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
