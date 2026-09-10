import Image from "next/image";

type Student = { name: string; photo: string };

type Team = {
  name: string;
  role: string;
  pitch?: string;
  students: Student[];
};

const teams: Team[] = [
  {
    name: "Fan Fever",
    role: "Student Startup",
    students: [
      { name: "Britney Mapang", photo: "/pitch/britney-mapang.webp" },
      { name: "Marco Mani", photo: "/pitch/marco-mani.webp" },
      { name: "Martin Rasmussen", photo: "/pitch/martin-rasmussen.webp" },
      { name: "Jhanille Smith", photo: "/pitch/jhanille-smith.webp" },
    ],
  },
  {
    name: "MEALO",
    role: "Student Startup",
    pitch:
      "MEALO makes every menu personal. It understands your needs, applies real nutrition intelligence, and reads menus wherever you go, helping you make the right choice, wherever you eat.",
    students: [{ name: "Milosz Mencel", photo: "/pitch/milosz-mencel.webp" }],
  },
];

export default function PitchCompetition() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(182, 94, 255, 0.15), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Signature Event · 3:15 PM
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            DX Lab AI Startup Pitch Competition
          </h2>
          <p className="mt-4 text-muted">
            Barry University student founders pitch their AI startups live from
            the main stage. Two teams, two ideas, one room to win over.
          </p>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "120ms" }}
          className="lift mt-8 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-8 backdrop-blur-md"
        >
          <p className="font-heading text-2xl font-semibold leading-snug text-mist sm:text-3xl">
            You Are The Judges.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            After both teams pitch, the audience votes on who made the stronger
            case. Bring your instincts. The room decides the winner.
          </p>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "150ms" }}
          className="mt-12 grid gap-6 text-left sm:grid-cols-2"
        >
          {teams.map((t) => (
            <div
              key={t.name}
              className="lift flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md hover:border-accent"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-glow">
                {t.role}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                {t.name}
              </h3>
              {t.pitch && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.pitch}
                </p>
              )}
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
                {t.students.map((s) => (
                  <li key={s.name} className="text-center">
                    <Image
                      src={s.photo}
                      alt={s.name}
                      width={160}
                      height={160}
                      className="mx-auto h-20 w-20 rounded-full object-cover object-top ring-2 ring-accent/40"
                    />
                    <p className="mt-2.5 font-heading text-xs font-semibold leading-snug text-ink">
                      {s.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          Presented by the Barry University DX Lab, where student teams build
          real ventures with AI at the core.
        </p>
      </div>
    </section>
  );
}
