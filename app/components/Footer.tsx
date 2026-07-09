import Image from "next/image";
import { SUMMIT } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-edge/60 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h3 className="font-heading text-lg font-semibold text-mist">
              {SUMMIT.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {SUMMIT.theme}: {SUMMIT.tagline}.
            </p>
            <p className="mt-3 text-sm text-muted">
              {SUMMIT.date} · {SUMMIT.venue}, {SUMMIT.city}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {SUMMIT.hosts}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Image
                src="/logos/branches.png"
                alt="Branches, Trish & Dan Bell Family Empowerment Centers"
                width={205}
                height={70}
                className="h-11 w-auto"
              />
              <Image
                src="/logos/be-one.png"
                alt="BE ONE"
                width={140}
                height={44}
                className="h-8 w-auto"
              />
              <Image
                src="/logos/barry-ai-center.png"
                alt="AI Center at Barry University"
                width={165}
                height={45}
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-edge/60 pt-6 text-xs text-muted">
          <p>
            © 2026 Branches, Trish & Dan Bell Family Empowerment Centers and
            the AI Center at Barry University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
