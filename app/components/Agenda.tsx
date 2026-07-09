import FrostTexture from "./FrostTexture";
type AgendaItem = {
  time: string;
  title: string;
  detail?: string;
  highlight?: boolean;
};

const agenda: AgendaItem[] = [
  {
    time: "8:30 AM",
    title: "Registration, Networking & Expo",
    detail:
      "Registration, networking, the Human-Centered AI Innovation Expo & Trade Fair, coffee and refreshments.",
  },
  {
    time: "10:00 AM",
    title: "Opening Plenary",
    detail:
      "Welcome remarks from Brent McLaughlin and Dr. Bogdan Daraban, followed by the opening address from Steve Arman: The Day Ahead.",
  },
  {
    time: "10:20 AM",
    title: "Signature Keynote Address",
    detail:
      "Building a Human-Centered AI Economy: why human flourishing must guide the AI era.",
    highlight: true,
  },
  {
    time: "10:40 AM",
    title: "Coffee & Networking Break",
  },
  {
    time: "11:00 AM",
    title: "The Miami AI Debate",
    detail:
      "Munk-style debate. Motion: be it resolved, artificial intelligence will advance human flourishing more than it will diminish it.",
    highlight: true,
  },
  {
    time: "12:30 PM",
    title: "Lunch & Networking",
  },
  {
    time: "1:30 PM",
    title: "Concurrent Learning Sessions",
    detail:
      "Entrepreneur Learning Track: AI systems for entrepreneurs, automating the work that slows you down, and building your first AI employee.",
  },
  {
    time: "3:05 PM",
    title: "TED-Style Presentations",
    detail:
      "Human Flourishing in the Age of AI. AI and the Future of Economic Opportunity. The Next Frontier: Human-Centered Innovation. The Future Is Ours to Build.",
    highlight: true,
  },
  {
    time: "4:40 PM",
    title: "Closing Reflections",
  },
  {
    time: "5:00 PM",
    title: "Networking Reception",
    detail:
      "Innovation Expo & Trade Fair reception, speaker meet-and-greet, sponsor engagement, partnership discussions, and the student innovation showcase.",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="scroll-mt-16 relative bg-frost text-deep">
      <FrostTexture />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-iris">
            September 14, 2026
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Program & Agenda
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            A full day at Barry University, from morning expo to evening
            reception. Times and sessions may be refined as the program is
            finalized.
          </p>
        </div>

        <ol className="mt-12 space-y-0 border-l border-night/15 pl-0">
          {agenda.map((item) => (
            <li
              key={`${item.time}-${item.title}`}
              data-reveal
              className="relative flex flex-col gap-1 py-5 pl-8 sm:flex-row sm:gap-8"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-7 h-2.5 w-2.5 -translate-x-[calc(50%+0.5px)] rounded-full ${
                  item.highlight ? "bg-iris" : "bg-night/20"
                }`}
              />
              <p className="w-24 shrink-0 font-heading text-sm font-semibold text-iris">
                {item.time}
              </p>
              <div>
                <h3 className="font-heading text-lg font-semibold text-deep">
                  {item.title}
                </h3>
                {item.detail && (
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate">
                    {item.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
