import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { ArrowIcon, ButtonLink, PageIntro, SectionHead } from "@/components/ui";
import { JOB_GROUPS, type Job } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Join Team FOSIS",
  description:
    "FOSIS is powered by Muslim students, for Muslim students. See the volunteer roles open across regional teams, operations, projects and the SEAD team.",
  alternates: { canonical: "/join-team-fosis/" },
};

const APPLY_URL = "https://fosis.uk/joinfosis";

const WAYS = [
  {
    title: "Join Team FOSIS",
    body: "Stand for election for Team FOSIS and take on a strategic leadership role. Positions include regional ISoc Reps, media reps, student affair officers and more!",
  },
  {
    title: "Project Volunteer",
    body: "Contribute your skills to a specific FOSIS project, from Ihsaan Careers to Discover Islam Week, communications, design, research, or event management.",
  },
  {
    title: "Support Us Financially",
    body: "FOSIS is a charity. Your donation directly funds freshers packs, training programmes, advocacy work, and career support for Muslim students.",
  },
];

/** A short line without a full stop is a sub-heading inside a role description. */
function isHeading(paragraph: string): boolean {
  return paragraph.length < 60 && !/[.!?]$/.test(paragraph);
}

function RoleCard({ job }: { job: Job }) {
  return (
    <li className="border-t border-ink">
      <details name="role" className="faq-item group">
        <summary className="flex cursor-pointer list-none flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-8 [&::-webkit-details-marker]:hidden">
          <div>
            <h3 className="type-heading-xs">{job.title}</h3>
            <p className="type-label mt-3 flex flex-wrap gap-x-4 gap-y-1 text-grey">
              <span>{job.team}</span>
              <span>{job.type}</span>
              <span>{job.commitment}</span>
              <span>{job.hours}</span>
            </p>
          </div>
          <span className="arrow-link self-start">
            See details
            <span className="transition-transform duration-300 group-open:rotate-90">
              <ArrowIcon />
            </span>
          </span>
        </summary>
        <div className="grid gap-6 pb-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)] lg:pb-12">
          <div className="flex flex-col gap-4 lg:col-span-8">
            {job.description.map((paragraph) =>
              isHeading(paragraph) ? (
                <h4 key={paragraph} className="type-heading-xxs mt-4">
                  {paragraph}
                </h4>
              ) : (
                <p key={paragraph} className="type-body-md text-pretty">
                  {paragraph}
                </p>
              ),
            )}
            {job.readMore && (
              <p className="type-body-md">
                <a href={job.readMore} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Read the full role description
                </a>
              </p>
            )}
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <ButtonLink href={job.apply} variant="navy" external>
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </details>
    </li>
  );
}

export default function JoinTeamFosis() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Join Team FOSIS" image={{ src: "/images/home/brothers.jpg", position: "object-top" }}>
        <span className="block">
          <ButtonLink href={APPLY_URL} variant="navy" external>
            Apply to Team FOSIS now
          </ButtonLink>
        </span>
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Get Involved</SectionHead>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <h2 className="type-heading-lg lg:col-span-6">Be Part of Something Bigger</h2>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="type-body-md">
                FOSIS is powered by Muslim students, for Muslim students. Every year, passionate individuals from across
                the UK and Ireland give their time, skills, and energy to serve the national student community, and we
                are always looking for the next generation of leaders to join us.
              </p>
              <p className="type-body-md mt-6">
                Whether you join as a National Executive Committee member, a regional representative, a project
                volunteer, or a campaign contributor, your contribution will directly shape the experience of hundreds of
                thousands of Muslim students across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Open Roles</SectionHead>
          <div className="flex flex-col gap-16 lg:gap-24">
            {JOB_GROUPS.map((group) => (
              <div key={group.name}>
                <h2 className="type-heading-md mb-6">
                  {group.name} <span className="type-label align-middle text-grey">({group.roles.length} roles)</span>
                </h2>
                <ul className="border-b border-ink">
                  {group.roles.map((job) => (
                    <RoleCard key={job.title} job={job} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Ways to Get Involved</SectionHead>
          <h2 className="type-heading-lg mb-12 max-w-[14ch] lg:mb-20">How You Can Contribute</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {WAYS.map((way) => (
              <li key={way.title} className="border-t border-white/40 py-6 lg:py-8">
                <h3 className="type-heading-sm">{way.title}</h3>
                <p className="type-body-md mt-4">{way.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Contact</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Ready to Join?</h2>
          <p className="type-body-md mt-8 max-w-[50ch]">
            Send us a message at{" "}
            <a href="mailto:info@fosis.org.uk" className="font-bold underline underline-offset-4">
              info@fosis.org.uk
            </a>{" "}
            with a brief introduction and what you’d like to contribute. We review applications throughout the year and
            will be in touch as soon as an opportunity that fits your skills becomes available.
          </p>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
