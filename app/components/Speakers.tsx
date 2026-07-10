import Image from "next/image";

const speakers = [
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
    bio: "As Dean of the Andreas School of Business and Vice Provost of Technology at Barry University, Dr. Daraban champions academic leadership that drives innovation in AI, entrepreneurship, and technology education to empower future leaders.",
  },
  {
    name: "Steve Arman",
    title: "Program Director, BE ONE",
    session: "The AI-Enabled MBA Mindset",
    photo: "/speakers/steve-arman.webp",
    bio: "Steve has spent years empowering underserved entrepreneurs in Miami-Dade. As Program Director of the BE ONE business development platform within Branches Inc., he understands the unique challenges micro-businesses face and how to overcome them.",
  },
  {
    name: "Tarik Safouan",
    title: "Director, Barry AI Center",
    session: "The AI-Enabled Small Business Lifecycle",
    photo: "/speakers/tarik-safouan.webp",
    bio: "As Director of Barry University's AI Center, Tarik bridges cutting-edge AI research with practical business applications. He specializes in making AI accessible and actionable for organizations of all sizes.",
  },
  {
    name: "Andres Diaz",
    title: "Fractional Chief Marketing Officer",
    session: "AI-Powered Marketing for Micro-Businesses",
    photo: "/speakers/andres-diaz.webp",
    bio: "Andres helps small businesses cut through marketing noise to connect authentically with customers. His approach focuses on clarity, consistency, and maintaining trust, even while leveraging AI tools.",
  },
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
            entrepreneurs, from the classroom to the community.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <div
              key={s.name}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="lift overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-accent"
            >
              <Image
                src={s.photo}
                alt={s.name}
                width={800}
                height={800}
                className="aspect-square w-full object-cover object-top"
              />
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {s.name}
                </h3>
                <p className="mt-0.5 text-sm text-muted">{s.title}</p>
                <p className="mt-3 inline-block rounded-md border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-glow">
                  {s.session}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
