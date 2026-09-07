/* Expo exhibitors: business support organizations offering capital,
   coaching, contracts, legal help, talent, and technology. */
const organizations = [
  "PNC",
  "Seacoast Bank",
  "Citi",
  "Barry U. DX Lab & AI Center",
  "Florida SBDC@FIU",
  "MDCC",
  "Prospera",
  "Ascendus",
  "Strive 305",
  "Operation Hope",
  "Branches",
  "Dade County Federal Credit Union",
  "Miami-Dade County Strategic Procurement, Small & Local Business Development",
  "Patterned.work & Cognition",
  "CareerSource",
  "Miami Dade Economic Advisory Council",
  "Legal Services of Greater Miami",
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
            Your Business Support Network,{" "}
            <span className="bg-gradient-to-r from-glow to-[#85e9ff] bg-clip-text text-transparent">
              All in One Room
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted">
            The Expo brings together the organizations that exist to help small
            businesses grow: access to capital, coaching and training,
            contracting and procurement opportunities, legal support, talent and
            workforce programs, and the technology to put it all to work. Come
            with a question, leave with a connection.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((name, i) => (
            <li
              key={name}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              className="lift flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md hover:border-accent"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span className="text-sm font-medium leading-snug text-ink">
                {name}
              </span>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-8 text-center text-sm text-muted">
          Exhibitors continue to be added as the program is finalized.
        </p>
      </div>
    </section>
  );
}
