import Image from "next/image";

/** `logoClassName` optically balances square marks against wide wordmarks. */
type Sponsor = {
  name: string;
  logo: string;
  url: string;
  blurb: string;
  logoClassName?: string;
};

const tiers: { tier: string; blurb: string; sponsors: Sponsor[] }[] = [
  {
    tier: "Visionary Partner",
    blurb: "Leading the way in building a Human-Centered AI Economy.",
    sponsors: [
      {
        name: "PNC",
        logo: "/sponsors/pnc.webp",
        url: "https://www.pnc.com",
        blurb:
          "PNC offers a wide range of services for individuals, small businesses, corporations, and government entities. Whether their financial needs are simple or complex, customers can access the products, knowledge, and resources needed to support their financial success.",
      },
    ],
  },
  {
    tier: "Impact Partners",
    blurb: "Expanding access and opportunity for Miami-Dade businesses.",
    sponsors: [
      {
        name: "City National Bank",
        logo: "/sponsors/city-national-bank.webp",
        url: "https://www.citynational.com",
        blurb:
          "City National Bank is Florida's iconic community bank with a global reach, trusted and admired by our clients for our people-centric culture.",
      },
      {
        name: "Seacoast Bank",
        logo: "/sponsors/seacoast.webp",
        url: "https://www.seacoastbank.com",
        blurb:
          "Seacoast Bank is among the largest publicly traded community banks headquartered in Florida, with growing presence in both Florida and Georgia's most vibrant markets. Seacoast Bank makes banking easy and convenient by offering solutions that allow you to bank anywhere, anytime.",
      },
      {
        name: "Xero",
        logo: "/sponsors/xero.webp",
        url: "https://www.xero.com",
        logoClassName: "max-h-[4.5rem]",
        blurb:
          "Xero is a global small business platform and trusted financial operating system for the AI era. The platform unifies accounting, payroll, payments, and a robust ecosystem into autonomous workflows, empowering customers to move from managing records to taking action.",
      },
    ],
  },
  {
    tier: "Community Partners",
    blurb: "Standing with the entrepreneurs who power our community.",
    sponsors: [
      {
        name: "Citi",
        logo: "/sponsors/citi.webp",
        url: "https://www.citi.com",
        blurb:
          "Citi's mission is to serve as a trusted partner to its clients by responsibly providing financial services that enable growth and economic progress. Its core activities include safeguarding assets, lending money, making payments, and accessing capital markets on behalf of clients.",
      },
      {
        name: "Dade County Federal Credit Union",
        logo: "/sponsors/dade-county-fcu.webp",
        url: "https://www.dcfcu.org",
        blurb:
          "Dade County Federal Credit Union is a community-focused, CDFI-certified financial institution that provides a full range of consumer and business financial services designed to promote economic opportunity and financial well-being. Key services include personal banking, auto loans, business banking and lending, home loans, and its new business resource initiative, the Blue Shell Hub.",
      },
      {
        name: "Devin",
        logo: "/sponsors/devin.webp",
        url: "https://devin.ai",
        blurb:
          "Devin believes the purpose of technology is to expand human capacity, not by replacing meaningful work but by working alongside people as an exponential collaborator, helping them think deeper and move faster. Cognition builds tools for software creation, helping engineers operate more like architects while agents handle the repetitive engineering work.",
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

/** Keeps one- and two-sponsor tiers centered instead of stranded at the left. */
function gridClass(count: number) {
  if (count === 1) return "mx-auto max-w-xl";
  if (count === 2) return "mx-auto max-w-4xl sm:grid-cols-2";
  return "sm:grid-cols-2 lg:grid-cols-3";
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:pb-12 sm:pt-24">
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
        className="marquee relative overflow-hidden pb-16"
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

      {/* Tiers with sponsor detail */}
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20 sm:px-6 sm:pb-24">
        {tiers.map((t) => (
          <div key={t.tier}>
            <div data-reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glow">
                {t.tier}
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
                {t.blurb}
              </p>
            </div>

            <ul className={`mt-7 grid gap-5 ${gridClass(t.sponsors.length)}`}>
              {t.sponsors.map((s, i) => (
                <li
                  key={s.name}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 90}ms` }}
                  className="lift flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
                >
                  <div className="flex h-20 items-center justify-center rounded-xl bg-white px-5">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={240}
                      height={80}
                      className={`w-auto object-contain ${s.logoClassName ?? "max-h-11"}`}
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-glow transition-colors hover:text-accent2"
                  >
                    Learn more
                    <span aria-hidden>&rarr;</span>
                    <span className="sr-only">about {s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
