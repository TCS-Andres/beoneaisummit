import Image from "next/image";

const debaters = [
  {
    name: "Christina Costanzo",
    title: "Director, Business Transformation, Embark",
    photo: "/speakers/christina-costanzo.webp",
  },
  {
    name: "Luis Pagán",
    title: "Director of Organizational Effectiveness, Branches",
    photo: "/speakers/luis-pagan.webp",
  },
  {
    name: "Dr. Sarah Lewis",
    title: "Founding Director, CETL, Barry University",
    photo: "/speakers/sarah-lewis.webp",
  },
  {
    name: "Sam Shaqour",
    title: "Co-Founder and CEO, Patterned",
    photo: "/speakers/sam-shaqour.webp",
  },
];

export default function Debate() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(143, 76, 255, 0.16), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Event · 10:40 AM
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

        <div data-reveal style={{ transitionDelay: "150ms" }} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Moderated By
          </p>
          <div className="mt-6">
            <span className="relative mx-auto block h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/40">
              <Image
                src="/speakers/bogdan-daraban.webp"
                alt="Dr. Bogdan Daraban"
                fill
                sizes="96px"
                className="scale-[1.15] object-cover object-[50%_30%]"
              />
            </span>
            <p className="mt-3 font-heading text-sm font-semibold text-ink">
              Dr. Bogdan Daraban
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted">
              Dean, Andreas School of Business
            </p>
          </div>
        </div>

        <div data-reveal style={{ transitionDelay: "180ms" }} className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            The Debaters
          </p>
          <ul className="mt-6 flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
            {debaters.map((d) => (
              <li key={d.name} className="w-40 shrink-0">
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40"
                />
                <p className="mt-3 font-heading text-sm font-semibold text-ink">
                  {d.name}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-muted">
                  {d.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          The objective is not division but thoughtful inquiry. By examining
          both sides, participants gain a deeper appreciation for the choices
          that will shape the future of AI.
        </p>
      </div>
    </section>
  );
}
