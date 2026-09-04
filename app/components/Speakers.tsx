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
    name: "Dr. Sarah Lewis",
    title:
      "Founding Director, Center for Excellence in Teaching and Learning, Barry University",
    session: "The Miami AI Debate",
    photo: "/speakers/sarah-lewis.webp",
    bio: "Sarah Lewis, PhD, is a social work scholar advancing the integration of AI into higher education through principled, systems-level design. As Founding Director of the Center for Excellence in Teaching and Learning and Associate Professor of Social Work at Barry University, she works at the intersection of pedagogy, ethics, and emerging technology. Her AI-informed assessment methods use AI not to replace human judgment but to deepen it, making student learning visible in real time.",
  },
  {
    name: "Sam Shaqour",
    title: "Co-Founder and CEO, Patterned",
    session: "The Miami AI Debate",
    photo: "/speakers/sam-shaqour.webp",
    bio: "Sam Shaqour is Co-Founder and CEO of Patterned, a Miami-based AI platform built on a simple belief: where you start should not determine where you end up. Patterned gives workforce and social service case managers one system to guide people through employment and social services, built on an unapologetically caring approach to technology. The platform is currently piloting with public sector workforce organizations across South Florida.",
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
    name: "Alex Keeble",
    title: "Senior Account Executive, Xero",
    session: "Accountable Intelligence",
    photo: "/speakers/alex-keeble.webp",
    bio: "Alex Keeble is a Senior Account Executive at Xero with a background in accounting, financial management, and business technology. He works with accounting professionals and business leaders to help them adopt technology and build more efficient businesses. Passionate about the intersection of finance and technology, Alex is particularly interested in how AI can make financial information more accessible and actionable for small business owners.",
  },
  {
    name: "Eduardo Frias",
    title: "Director of Professional Services, Shopify",
    session: "The New Rules of Commerce in the Age of AI",
    photo: "/speakers/eduardo-frias.webp",
    bio: "Eduardo Frias is Director of Professional Services at Shopify, with over 30 years in the technology sector. He has served as head of Technology, CIO, and CTO across organizations ranging from startups to Fortune 50 companies, specializing in large-scale digital transformation and scaling technology teams to create new channels and revenue streams. He holds degrees in Computer Science and Software Engineering from Carnegie Mellon University and the Universidad de Buenos Aires, and lives in Miami.",
  },
  {
    name: "Dr. Selen Turner",
    title: "CEO, The Turner Connection",
    session: "Panel Host: Leadership in the Age of AI",
    photo: "/speakers/selen-turner-v2.webp",
    bio: "Dr. Selen Turner is an organizational psychologist and CEO of The Turner Connection, with more than 20 years helping organizations build stronger cultures, develop leaders, and drive innovation. She is a Partner at Advantage Performance Group, founder of Thrive Forward: Leaders' Forum, and author of the forthcoming book Unique Belonging: Shaping Human-Centered Cultures to Unlock Innovation. She teaches at Florida Atlantic University and Barry University and holds a PhD in Industrial and Organizational Psychology.",
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
      "Creator of The Madrinan Playground\u2122 | Redesign, Scale & Multiply for the AI Era",
    session: "Panel: Leadership in the Age of AI",
    photo: "/speakers/adriana-madrinan-v2.webp",
    bio: "Adriana Madrinan is an industrial designer by training who designs how a business actually works and how its owner decides. She is the creator of The Madrinan Playground\u2122, her independent practice under Alineata LLC, where small business owners redesign, scale, and multiply for the AI era. Across the U.S. and Latin America she has partnered with organizations that support small businesses, and her research into how owners think and decide with AI has been supported by Branches and Es Tiempo de Avanzar.",
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
    title: "Senior Director of Innovation and Technology Education, Barry University",
    session: "The Future Is Ours to Build",
    photo: "/speakers/tarik-safouan.webp",
    bio: "Tarik Safouan is Senior Director of Innovation and Technology Education at Barry University, where he leads the AI Center and its work connecting AI education, applied research, and real-world business innovation. He brings more than two decades of experience across technology, digital transformation, and emerging technologies, with a focus on helping organizations turn AI into practical business value. He also teaches AI strategy and analytics in Barry University's MBA program.",
  },
];

// Sessions whose presenters are still being finalized, in program order.
const comingSoon: string[] = [];

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
