type SubSession = { time: string; title: string; speaker?: string };

type AgendaItem = {
  time: string;
  title: string;
  detail?: string;
  location?: string;
  sessions?: SubSession[];
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
    sessions: [
      {
        time: "10:00 AM",
        title: "Welcome Remarks",
        speaker: "Brent McLaughlin, President & CEO, Branches Inc.",
      },
      {
        time: "10:05 AM",
        title: "Welcome Remarks",
        speaker: "Dr. Bogdan Daraban, Dean, Andreas School of Business",
      },
      {
        time: "10:10 AM",
        title: "Opening Address: The Day Ahead",
        speaker: "Steve Arman, Program Director, BE ONE",
      },
    ],
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
    title: "Entrepreneur Learning Track",
    location: "Andreas 111, Plenary Room",
    sessions: [
      {
        time: "1:35 PM",
        title: "AI Systems for Entrepreneurs: automating the work that slows you down",
      },
      {
        time: "2:15 PM",
        title: "Building Your First AI Employee",
        speaker: "Andres Diaz, Fractional Chief Marketing Officer",
      },
    ],
  },
  {
    time: "3:05 PM",
    title: "TED-Style Presentations",
    location: "Plenary Room",
    highlight: true,
    sessions: [
      {
        time: "3:05 PM",
        title: "Human Flourishing in the Age of Artificial Intelligence",
      },
      {
        time: "3:30 PM",
        title: "AI and the Future of Economic Opportunity",
      },
      {
        time: "4:00 PM",
        title: "The Next Frontier: Human-Centered Innovation",
      },
      {
        time: "4:20 PM",
        title: "The Future Is Ours to Build",
        speaker: "Tarik Safouan, Director, Barry AI Center",
      },
    ],
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
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-semibold text-deep">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-iris/80">
                    {item.location}
                  </p>
                )}
                {item.detail && (
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate">
                    {item.detail}
                  </p>
                )}
                {item.sessions && (
                  <ul className="mt-3 space-y-2.5 border-l border-night/10 pl-4">
                    {item.sessions.map((s) => (
                      <li
                        key={`${s.time}-${s.title}`}
                        className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
                      >
                        <span className="w-20 shrink-0 font-heading text-xs font-semibold text-slate">
                          {s.time}
                        </span>
                        <span className="text-sm text-deep">
                          <span className="font-medium">{s.title}</span>
                          {s.speaker && (
                            <span className="block text-slate">{s.speaker}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
