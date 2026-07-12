import Image from "next/image";
import { UserRound } from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  session: string;
  photo: string;
  bio: string;
  imgClassName?: string;
};

const speakers: Speaker[] = [
  {
    name: "Brent McLaughlin",
    title: "President and CEO, Branches Inc.",
    session: "Welcome Remarks",
    photo: "/speakers/brent-mclaughlin.webp",
    bio: "As President and CEO of Branches Inc., Brent leads an organization that walks alongside Miami-Dade entrepreneurs every day, understanding the real challenges of building a business and providing the tools and guidance they need to grow.",
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
    name: "Tarik Safouan",
    title: "Director, Barry AI Center",
    session: "The Future Is Ours to Build",
    photo: "/speakers/tarik-safouan.webp",
    bio: "As Director of Barry University's AI Center, Tarik bridges cutting-edge AI research with practical business applications. He specializes in making AI accessible and actionable for organizations of all sizes.",
  },
  {
    name: "Andres Diaz",
    title: "Fractional Chief Marketing Officer",
    session: "Building Your First AI Employee",
    photo: "/speakers/andres-diaz.webp",
    bio: "Andres helps small businesses cut through marketing noise to connect authentically with customers. His approach focuses on clarity, consistency, and maintaining trust, even while leveraging AI tools.",
  },
];

// Sessions whose presenters are still being finalized, in program order.
const comingSoon = [
  "Signature Keynote Address",
  "AI Systems for Entrepreneurs",
  "Human Flourishing in the Age of Artificial Intelligence",
  "AI and the Future of Economic Opportunity",
  "The Next Frontier: Human-Centered Innovation",
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
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 ${s.imgClassName ?? ""}`}
                />
                <div className="absolute inset-0 hidden items-center bg-night/85 p-5 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
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
