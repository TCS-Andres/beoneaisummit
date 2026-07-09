import { SUMMIT } from "@/lib/config";

export default function Venue() {
  return (
    <section id="venue" className="scroll-mt-16 bg-frost text-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-iris">
              The Venue
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Barry University, Miami Shores
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate">
              The Summit convenes at Barry University, home of the AI Center
              and a cornerstone of South Florida education. Miami-Dade sits at
              the intersection of entrepreneurship, cultural diversity, and
              international commerce: the right place to model a Human-Centered
              AI Economy.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-wide text-deep">
                  Date
                </dt>
                <dd className="text-slate">{SUMMIT.date}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-wide text-deep">
                  Address
                </dt>
                <dd className="text-slate">
                  Barry University, 11300 NE 2nd Avenue, Miami Shores, FL 33161
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold uppercase tracking-wide text-deep">
                  Details
                </dt>
                <dd className="text-slate">
                  Parking, room assignments, and check-in details will be
                  shared with registered attendees.
                </dd>
              </div>
            </dl>
            <a
              href="https://maps.google.com/?q=Barry+University,+11300+NE+2nd+Ave,+Miami+Shores,+FL+33161"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg border border-night/15 bg-white/60 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-deep transition-colors hover:border-iris hover:text-iris"
            >
              Open in Google Maps
            </a>
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/media/miami-poster.jpg"
            className="aspect-[4/3] w-full rounded-2xl border border-night/10 object-cover"
            aria-label="Aerial view of Miami Shores at sunset"
          >
            <source src="/media/miami.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mt-12 rounded-2xl border border-night/10 bg-white/70 backdrop-blur-md p-8">
          <h3 className="font-heading text-xl font-semibold text-deep">
            Who should attend
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-slate sm:grid-cols-2">
            {[
              "Entrepreneurs and small business owners ready to put AI to work",
              "Students and educators shaping the future workforce",
              "Policymakers and civic leaders guiding responsible adoption",
              "Technologists, researchers, and solution providers",
              "Workforce organizations and community stakeholders",
            ].map((who) => (
              <li key={who} className="flex gap-3">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {who}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
