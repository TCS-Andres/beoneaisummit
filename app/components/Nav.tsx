"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { REGISTRATION_URL } from "@/lib/config";

const registerHref = REGISTRATION_URL ?? "#register";
const registerExternal = REGISTRATION_URL
  ? { target: "_blank", rel: "noopener noreferrer" }
  : {};

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#pillars", label: "Pillars" },
  { href: "#experiences", label: "Experiences" },
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#venue", label: "Venue" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/logos/branches.png"
            alt="Branches, Trish & Dan Bell Family Empowerment Centers"
            width={146}
            height={50}
            priority
            className="h-9 w-auto"
          />
          <span aria-hidden className="hidden h-7 w-px bg-edge sm:block" />
          <Image
            src="/logos/barry-ai-center.png"
            alt="AI Center at Barry University"
            width={110}
            height={30}
            priority
            className="hidden h-6 w-auto sm:block"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={registerHref}
            {...registerExternal}
            className="rounded-lg bg-gradient-to-r from-accent to-accent2 px-5 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110"
          >
            Register
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-edge text-ink lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-edge/60 bg-night px-4 pb-6 pt-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={registerHref}
            {...registerExternal}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-center text-base font-semibold text-white"
          >
            Register
          </a>
        </nav>
      )}
    </header>
  );
}
