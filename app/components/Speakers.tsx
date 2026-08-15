import Image from "next/image";
import { UserRound } from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  session: string;
  /** Omit while a headshot is still pending; the card falls back to a silhouette. */
  photo?: string;
  bio: string;
  imgClassName?: string;
};

const speakers: Speaker[] = [
  {
    name: "Brent McLaughlin",
    title: "President and CEO, Branches Inc.",
    session: "Welcome Remarks",
    photo: "/speakers/brent-mclaughlin.webp",
    bio: "As President and CEO of Branches, Brent leads an organization that partners with families to help them build education and financial assets, and serving the small business community in Miami is a top priority. Branches is proud to walk alongside entrepreneurs every day, understanding the real challenges of building a business and providing the tools and guidance they need to grow.",
  },
  {
    name: "Dr. Bogdan Daraban",
    title:
      "Dean, Andreas School of Business and Vice Provost of Technology, Barry University",
    session: "Welcome Remarks",
    photo: "/speakers/bogdan-daraban.webp",
    imgClassName: "scale-[1.15] object-[50%_30%]",
    bio: "As Dean of the Andreas School of Business and Vice Provost of Technology at Barry University, Dr. Daraban champions academic leadership that drives innovation in AI, entrepreneurship, and technology education to empower future leaders.",
  },
  {
    name: "Steve Arman",
    title: "Program Director, BE ONE",
    session: "Opening Address: The Day Ahead",
    photo: "/speakers/steve-arman.webp",
    bio: "Steve has spent years empowering underserved entrepreneurs in Miami-Dade. As Program Director of the BE ONE business development platform within Branches Inc., he understands the unique challenges micro-businesses face and how to overcome them.",
  },
  {
    name: "Christina Costanzo",
    title: "Director, Business Transformation, Embark",
    session: "The Miami AI Debate",
    photo: "/speakers/christina-costanzo.webp",
    bio: "Christina leads digital transformation, data and analytics, and AI implementation at Embark, helping private equity-backed and mid-market companies replace fragmented, manual processes with integrated systems built on data and automation. Her background spans accounting and advisory, giving her fluency in both business strategy and technical implementation.",
  },
  {
    name: "Luis Pagán",
    title: "Director of Organizational Effectiveness, Branches",
    session: "The Miami AI Debate",
    photo: "/speakers/luis-pagan.webp",
    bio: "Luis Pagán is Director of Organizational Effectiveness at Branches, a Miami nonprofit that partners with families to build educational and financial assets, community, and hope. He leads the organization's AI adoption on the conviction that people are the priority and technology exists so we can reclaim time for deep human connection. A natural bridge-builder guided by curiosity and wonder, he helps teams see each other clearly enough to collaborate.",
  },
  {
    name: "Marcin Ladowski",
    title: "CEO & Co-Founder, HUVA",
    session: "Panel: Practical AI Strategies for Business Growth",
    photo: "/speakers/marcin-ladowski.webp",
    bio: "An entrepreneur and transformation leader, Marcin empowers businesses to scale with AI, innovation, and forward-thinking leadership.",
  },
  {
    name: "Jens Müller",
    title: "Founder and CEO, TBench.Solutions",
    session: "Panel: Practical AI Strategies for Business Growth",
    photo: "/speakers/jens-muller.webp",
    bio: "Jens brings deep engineering expertise from the automotive industry, holding multiple patents and years of experience designing scalable, mission-critical systems. He is founder and CEO of TBench.Solutions, a gold-certified Preferred Design House of Infineon Technologies that provides consulting and system development for automotive and industrial applications and builds its own advanced boards for MCUs, APUs, and FPGAs.",
  },
  {
    name: "Lilia Restrepo",
    title: "Director, Business Intelligence, Kaufman Rossin",
    session: "AI Systems for Entrepreneurs",
    photo: "/speakers/lilia-restrepo.webp",
    bio: "Lilia leads analytics and automation at Kaufman Rossin and helps clients navigate AI implementation, turning data into clear, actionable insight that drives smarter decisions and sustainable growth.",
  },
  {
    name: "Andres Diaz",
    title: "Fractional Chief Marketing Officer, The Creative Strategist",
    session: "Building Your First AI Employee",
    photo: "/speakers/andres-diaz.webp",
    bio: "Andres helps small businesses cut through marketing noise to connect authentically with customers. His approach focuses on clarity, consistency, and maintaining trust, even while leveraging AI tools.",
  },
  {
    name: "Dr. Camille Samuel",
    title: "Campus Registrar, UWI",
    session: "Panel: Leadership in the Age of AI",
    photo: "/speakers/camille-samuel.webp",
    bio: "As Campus Registrar at The University of the West Indies, Five Islands Campus, Dr. Camille Samuel champions institutional transformation, digital innovation, and student success across the Caribbean. An experienced higher education administrator, she has led major organizational and digital transformation initiatives, with research focused on leadership, institutional resilience, and systems that help organizations thrive.",
  },
  {
    name: "Adriana Madrinan",
    title:
      "AI-Enabled Business Model Innovation Strategist & Entrepreneurship Program Architect",
    session: "Panel: Leadership in the Age of AI",
    photo: "/speakers/adriana-madrinan-v2.webp",
    bio: "With 15+ years in corporate America and 8+ years supporting entrepreneurs across the U.S. and Latin America, Adriana helps small business owners redesign business models, clarify strategy, and build growth systems for the AI era. She has trained 1,500+ entrepreneurs and designed 100+ experiential courses, including her framework The Business Model Canvas Reimagined with AI.",
  },
  {
    name: "Ria Karim",
    title: "Chairman, iGovTT",
    session: "Panel: Leadership in the Age of AI",
    photo: "/speakers/ria-karim.webp",
    bio: "Ria Karim is an executive leader, strategist, and governance professional with over 20 years across government, technology, and national development. A cum laude graduate of Georgetown University and creator of the D'Junction Carnival platform, she has mentored startups through George Washington University's Lean Startup programme and lectured at UWI and Lok Jack GSB. She serves as Chairman of iGovTT, advancing Trinidad & Tobago's digital transformation.",
  },
  {
    name: "Dr. Katsiaryna Matusevich",
    title: "Professor of Human Resource Development, Barry University",
    session: "Human Relevance Development: The Missing Piece in AI Strategy",
    photo: "/speakers/katsiaryna-matusevich.webp",
    bio: "Katsiaryna Matusevich, PhD, is Professor of Human Resource Development and Program Director of the MS in HRD at Barry University's Andreas School of Business. Her research examines work-related flow and the effects of AI on employee flourishing. She coined the term Human Relevance Development, championing the shift from Human Resources to human relevance and helping organizations adopt AI while keeping human agency central.",
  },
  {
    name: "Tarik Safouan",
    title: "Director, Barry AI Center",
    session: "The Future Is Ours to Build",
    photo: "/speakers/tarik-safouan.webp",
    bio: "As Director of Barry University's AI Center, Tarik bridges cutting-edge AI research with practical business applications. He specializes in making AI accessible and actionable for organizations of all sizes.",
  },
];

// Sessions whose presenters are still being finalized, in program order.
const comingSoon = [
  "AI and the Future of Small Business Finance",
  "AI and the Future of Economic Opportunity",
];

export default function Speakers() {
  return (
    <section id="speakers" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            The Voices
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Speakers</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Leaders and practitioners working directly with Miami-Dade
            entrepreneurs, from the classroom to the community. Hover a card to
            read more.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <article
              key={s.name}
              data-reveal
              tabIndex={0}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="group lift overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md outline-none focus-visible:border-accent hover:border-accent"
            >
              <div className="relative aspect-square overflow-hidden">
                {s.photo ? (
                  <Image
                    src={s.photo}
                    alt={s.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={`object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 ${s.imgClassName ?? ""}`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-panel to-night">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(24rem_24rem_at_50%_40%,rgba(143,76,255,0.12),transparent_70%)]"
                    />
                    <UserRound
                      aria-hidden
                      className="h-32 w-32 text-muted/30"
                      strokeWidth={0.9}
                    />
                  </div>
                )}
                <div className="absolute inset-0 hidden items-start overflow-y-auto bg-night/85 p-5 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
                  <p className="text-sm leading-relaxed text-mist">{s.bio}</p>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {s.name}
                </h3>
                <p className="mt-0.5 text-sm text-muted">{s.title}</p>
                <p className="mt-3 inline-block rounded-md border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-glow">
                  {s.session}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:hidden">
                  {s.bio}
                </p>
              </div>
            </article>
          ))}

          {comingSoon.map((session, i) => (
            <article
              key={session}
              data-reveal
              style={{ transitionDelay: `${((speakers.length + i) % 3) * 80}ms` }}
              className="lift overflow-hidden rounded-2xl border border-white/10 border-dashed bg-white/[0.02] backdrop-blur-md"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-b from-panel to-night">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(24rem_24rem_at_50%_40%,rgba(143,76,255,0.12),transparent_70%)]"
                />
                <UserRound
                  aria-hidden
                  className="h-32 w-32 text-muted/30"
                  strokeWidth={0.9}
                />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  To Be Announced
                </h3>
                <p className="mt-0.5 text-sm text-muted">
                  Speaker announcement coming soon
                </p>
                <p className="mt-3 inline-block rounded-md border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-glow">
                  {session}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
