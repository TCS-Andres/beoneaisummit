import Image from "next/image";

/** `logoClassName` optically balances square marks against wide wordmarks. */
type Sponsor = { name: string; logo: string; logoClassName?: string };

const tiers: { tier: string; blurb: string; sponsors: Sponsor[] }[] = [
  {
    tier: "Visionary Partner",
    blurb: "Leading the way in building a Human-Centered AI Economy.",
    sponsors: [{ name: "PNC", logo: "/sponsors/pnc.webp" }],
  },
  {
    tier: "Impact Partner",
    blurb: "Expanding access and opportunity for Miami-Dade businesses.",
    sponsors: [{ name: "Seacoast Bank", logo: "/sponsors/seacoast.webp" }],
  },
  {
    tier: "Community Partners",
    blurb: "Standing with the entrepreneurs who power our community.",
    sponsors: [
      { name: "Citi", logo: "/sponsors/citi.webp" },
      {
        name: "Dade County Federal Credit Union",
        logo: "/sponsors/dade-county-fcu.webp",
      },
      {
        name: "Xero",
        logo: "/sponsors/xero.webp",
        logoClassName: "max-h-[4.5rem]",
      },
    ],
  },
];

const allSponsors = tiers.flatMap((t) => t.sponsors);

function LogoChip({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex h-24 w-52 shrink-0 items-center justify-center rounded-xl bg-white px-6 shadow-[0_4px_20px_rgba(0,0,0,0.25)] sm:h-28 sm:w-60">
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={240}
        height={80}
        className={`w-auto object-contain ${sponsor.logoClassName ?? "max-h-14"}`}
      />
    </div>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Made Possible By
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our Sponsors</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            The Summit is powered by partners who believe small businesses
            belong at the center of the AI economy.
          </p>
        </div>
      </div>

      {/* Continuous logo carousel, full-bleed with faded edges */}
      <div
        data-reveal
        className="marquee relative -mt-6 overflow-hidden pb-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex gap-6">
          {allSponsors.map((s) => (
            <LogoChip key={s.name} sponsor={s} />
          ))}
          {allSponsors.map((s) => (
            <div key={`dup-${s.name}`} aria-hidden>
              <LogoChip sponsor={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Tier acknowledgement */}
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={t.tier}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="lift rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glow">
                {t.tier}
              </p>
              <ul className="mt-4 space-y-2">
                {t.sponsors.map((s) => (
                  <li
                    key={s.name}
                    className="font-heading text-lg font-semibold text-ink"
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
