"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Person = { name: string; title?: string; photo: string };

/** `lg` portraits are for the student founders, who lead their own slide. */
type Group = { label: string; people: Person[]; size?: "lg" };

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  groups: Group[];
  note?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Signature Panel · 11:40 AM",
    title: "Leadership in the Age of AI",
    subtitle: "Navigating Transformation, Opportunity and Human Impact.",
    groups: [
      {
        label: "Panel Host",
        people: [
          {
            name: "Dr. Selen Turner",
            title: "CEO, The Turner Connection",
            photo: "/speakers/selen-turner-v2.webp",
          },
        ],
      },
      {
        label: "The Panelists",
        people: [
          {
            name: "Dr. Camille Samuel",
            title: "Campus Registrar, UWI",
            photo: "/speakers/camille-samuel.webp",
          },
          {
            name: "Adriana Madrinan",
            title: "Creator of The Madrinan Playground™",
            photo: "/speakers/adriana-madrinan-v2.webp",
          },
          {
            name: "Ria Karim",
            title: "Chairman, iGovTT",
            photo: "/speakers/ria-karim.webp",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Signature Panel · 12:10 PM",
    title: "Designated AI",
    subtitle: "Practical AI Strategies for Business Growth.",
    groups: [
      {
        label: "Moderated By",
        people: [
          {
            name: "Christina Costanzo",
            title: "Director, Business Transformation, Embark",
            photo: "/speakers/christina-costanzo.webp",
          },
        ],
      },
      {
        label: "The Panelists",
        people: [
          {
            name: "Tarik Safouan",
            title: "Senior Director, Barry University AI Center",
            photo: "/speakers/tarik-safouan.webp",
          },
          {
            name: "Marcin Ladowski",
            title: "CEO & Co-Founder, HUVA",
            photo: "/speakers/marcin-ladowski.webp",
          },
          {
            name: "Jens Müller",
            title: "Founder and CEO, TBench.Solutions",
            photo: "/speakers/jens-muller.webp",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Signature Event · 3:15 PM",
    title: "DX Lab AI Startup Pitch Competition",
    subtitle:
      "Barry University student founders pitch their AI startups live. You are the judges, and the audience votes on the winner.",
    groups: [
      {
        label: "Team Fan Fever",
        size: "lg",
        people: [
          { name: "Britney Mapang", photo: "/pitch/britney-mapang-v2.webp" },
          { name: "Marco Mani", photo: "/pitch/marco-mani-v2.webp" },
          { name: "Martin Rasmussen", photo: "/pitch/martin-rasmussen-v2.webp" },
          { name: "Jhanille Smith", photo: "/pitch/jhanille-smith-v2.webp" },
        ],
      },
      {
        label: "Team MEALO",
        size: "lg",
        people: [{ name: "Milosz Mencel", photo: "/pitch/milosz-mencel-v2.webp" }],
      },
    ],
    note: "Presented by the Barry University DX Lab.",
  },
];

function People({ group }: { group: Group }) {
  const big = group.size === "lg";
  return (
    <div className="mt-8 first:mt-0">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
        {group.label}
      </p>
      <ul className="mt-6 flex flex-wrap items-start justify-center gap-x-4 gap-y-8 sm:gap-x-10">
        {group.people.map((p) => (
          <li key={p.name} className={big ? "w-28 sm:w-36" : "w-40"}>
            <Image
              src={p.photo}
              alt={p.name}
              width={240}
              height={240}
              className={`mx-auto shrink-0 rounded-full object-cover object-top ring-2 ring-accent/40 ${
                big ? "h-28 w-28 sm:h-32 sm:w-32" : "h-24 w-24"
              }`}
            />
            <p
              className={`mt-3 font-heading font-semibold text-ink ${
                big ? "text-base" : "text-sm"
              }`}
            >
              {p.name}
            </p>
            {p.title && (
              <p className="mt-0.5 text-xs leading-snug text-muted">{p.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({
  dir,
  onClick,
  disabled,
  className,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  className: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous session" : "Next session"}
      className={`items-center justify-center rounded-full border border-accent/60 bg-accent/85 text-white shadow-[0_6px_24px_rgba(143,76,255,0.45)] backdrop-blur-md transition hover:bg-accent hover:shadow-[0_8px_30px_rgba(143,76,255,0.6)] disabled:border-white/15 disabled:bg-navy/70 disabled:text-ink disabled:opacity-30 disabled:shadow-none ${className}`}
    >
      <span aria-hidden className="text-xl leading-none">
        {dir === "prev" ? "\u2190" : "\u2192"}
      </span>
    </button>
  );
}

export default function SessionsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  }, []);

  // Keep the dots in sync with swipes as well as button presses.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      setActive(Math.max(0, Math.min(slides.length - 1, i)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 24rem at 50% 50%, rgba(61, 123, 255, 0.13), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <div data-reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
            Also On The Main Stage
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Panels & The Pitch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Two panels and a live student pitch competition. Swipe through to
            meet the people leading each one.
          </p>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "120ms" }}
          className="relative mt-12"
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((s) => (
              <div
                key={s.title}
                className="w-full shrink-0 snap-center px-0.5"
                aria-roledescription="slide"
              >
                <article className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-10 py-10 text-center backdrop-blur-md sm:px-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-glow">
                    {s.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    {s.subtitle}
                  </p>
                  <div className="mt-10">
                    {s.groups.map((g) => (
                      <People key={g.label} group={g} />
                    ))}
                  </div>
                  {s.note && (
                    <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted">
                      {s.note}
                    </p>
                  )}
                </article>
              </div>
            ))}
          </div>

          <Arrow
            dir="prev"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 sm:left-2 lg:left-3 lg:h-12 lg:w-12"
          />
          <Arrow
            dir="next"
            onClick={() => goTo(Math.min(slides.length - 1, active + 1))}
            disabled={active === slides.length - 1}
            className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 sm:right-2 lg:right-3 lg:h-12 lg:w-12"
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.title}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-accent2"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
