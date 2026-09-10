import Image from "next/image";

/** `logos` holds one entry, or two when a single booth represents two brands. */
type Exhibitor = {
  name: string;
  logos: string[];
  blurb: string;
  logoClassName?: string;
  /** Two-logo booths span two columns so both marks stay legible. */
  wide?: boolean;
};

const exhibitors: Exhibitor[] = [
  {
    name: "Branches & BE ONE",
    logos: ["/expo/branches-full.webp", "/expo/be-one.webp"],
    wide: true,
    blurb:
      "A South Florida nonprofit operating the Trish & Dan Bell Family Empowerment Centers, home to BE ONE, its business development platform for micro and small businesses. Branches leads the Miami Tax Pros VITA coalition and is the largest provider of free financial coaching in Miami.",
  },
  {
    name: "Barry University AI Center",
    logos: ["/expo/barry-university.webp"],
    blurb:
      "Barry University's AI Center and Digital Transformation Lab are the university's hub for applied AI and digital strategy, pairing faculty and student consulting teams with local businesses and nonprofits on real AI, data analytics, and digital transformation projects.",
  },
  {
    name: "Xero",
    logos: ["/sponsors/xero.webp"],
    logoClassName: "max-h-[4rem]",
    blurb:
      "A global small business platform and trusted financial operating system for the AI era, unifying accounting, payroll, payments, and a robust ecosystem into autonomous workflows.",
  },
  {
    name: "PNC",
    logos: ["/sponsors/pnc.webp"],
    blurb:
      "A wide range of services for individuals, small businesses, corporations, and government entities, giving customers access to the products, knowledge, and resources to support their financial success.",
  },
  {
    name: "Seacoast Bank",
    logos: ["/sponsors/seacoast.webp"],
    blurb:
      "Among the largest publicly traded community banks headquartered in Florida, making banking easy and convenient with solutions that let you bank anywhere, anytime.",
  },
  {
    name: "Citi",
    logos: ["/sponsors/citi.webp"],
    blurb:
      "A trusted partner to its clients, responsibly providing financial services that enable growth and economic progress, from lending and payments to access to capital markets.",
  },
  {
    name: "Dade County Federal Credit Union",
    logos: ["/sponsors/dade-county-fcu.webp"],
    blurb:
      "A member-owned credit union founded in 1939, offering business and personal banking, RISE small business loans, commercial real estate loans, and free financial education seminars.",
  },
  {
    name: "Florida SBDC at FIU",
    logos: ["/expo/sbdc-fiu.webp"],
    blurb:
      "Part of the statewide Florida SBDC Network hosted by FIU's College of Business, giving Miami-Dade owners no-cost confidential consulting, business plan development, loan packaging guidance, market research, and government contracting help.",
  },
  {
    name: "Miami-Dade Chamber of Commerce",
    logos: ["/expo/mdcc.webp"],
    blurb:
      "Founded in 1974, MDCC helps entrepreneurs strengthen operations, build relationships, and access growth opportunities through personalized business assistance, educational workshops, weekly Small Business Meet-ups, and connections to trusted resource partners, spanning business planning, marketing, financial management, certifications, capital, and government contracting.",
  },
  {
    name: "Prospera",
    logos: ["/expo/prospera.webp"],
    blurb:
      "A nonprofit that has provided bilingual assistance to Hispanic entrepreneurs since 1991, delivering free one-on-one consulting, seminars and training, business plan development, and help with loan applications and credit improvement.",
  },
  {
    name: "Ascendus",
    logos: ["/expo/ascendus.webp"],
    blurb:
      "A nonprofit small business lender and certified CDFI that has delivered more than $200 million to over 23,000 small business owners, with microloans from $500 to $100,000 plus financial coaching and credit building.",
  },
  {
    name: "Strive305",
    logos: ["/expo/strive305.webp"],
    blurb:
      "Miami-Dade County's small business initiative, anchored by the Strive305 Hub: a directory of county resources, the no-cost Micro Business Academy, guidance on RISE loans, workshops, mentorship, and grant listings.",
  },
  {
    name: "Miami-Dade County Strategic Procurement",
    logos: ["/expo/miamidade-county.webp"],
    blurb:
      "The Small Business Development division certifies and supports small and local firms so they can compete for and win county contracts, including Small Business Enterprise and Local Developing Business certification and vendor registration.",
  },
  {
    name: "Patterned.work & Cognition",
    logos: ["/expo/patterned.webp"],
    blurb:
      "An AI-powered workforce readiness and talent verification platform built for the gap between training and hiring, using short structured behavioral interviews to measure whether candidates are genuinely job ready.",
  },
  {
    name: "CareerSource South Florida",
    logos: ["/expo/careersource.webp"],
    blurb:
      "The regional workforce development board for Miami-Dade and Monroe Counties, connecting job seekers and employers at no cost through career centers, skills training, recruitment, and job placement.",
  },
  {
    name: "Miami-Dade Economic Advocacy Trust",
    logos: ["/expo/mdeat.webp"],
    blurb:
      "A county trust advancing economic equity, with the Business Resource and Educational Grant Program providing $2,500 capital infusions to startup entrepreneurs, plus technical assistance and business expos.",
  },
  {
    name: "Legal Services of Greater Miami",
    logos: ["/expo/legal-services.webp"],
    blurb:
      "A nonprofit civil legal aid provider serving low income residents for nearly 60 years, with free civil legal help and a dedicated practice serving small businesses and nonprofit organizations.",
  },
];

export default function Expo() {
  return (
    <section id="expo" className="relative scroll-mt-16 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44rem 22rem at 50% 0%, rgba(143, 76, 255, 0.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            All Day · Innovation Expo &amp; Trade Fair
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-glow to-[#85e9ff] bg-clip-text text-transparent">
              Expo Exhibitors
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            The Expo floor is your business support network in one room. Every
            exhibitor is here to connect you with resources, tools, and
            opportunities to grow: capital and lending, free consulting,
            certification and contracts, financial coaching, legal help,
            workforce talent, and technology. Come with a question, leave with a
            connection.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exhibitors.map((e, i) => (
            <li
              key={e.name}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className={`lift flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md hover:border-accent ${
                e.wide ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex h-20 items-center justify-center gap-6 rounded-xl bg-white px-5">
                {e.logos.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt={e.name}
                    width={240}
                    height={80}
                    className={`w-auto object-contain ${e.logoClassName ?? "max-h-11"}`}
                  />
                ))}
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                {e.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {e.blurb}
              </p>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-10 text-center text-sm text-muted">
          Exhibitors continue to be added as the program is finalized.
        </p>
      </div>
    </section>
  );
}
