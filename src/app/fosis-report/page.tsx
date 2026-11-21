import type { Metadata } from "next";
import Link from "next/link";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "FOSIS Report",
  description:
    "A reporting portal for ISocs and Muslim students to submit incidents regarding ISoc issues, SU problems, or Islamophobia.",
  alternates: { canonical: "/fosis-report/" },
};

const CATEGORIES = [
  {
    title: "ISoc Issues",
    subtitle: "Internal Society Concerns",
    body: "Disputes within your ISoc, committee misconduct, governance failures, or issues with how your society is being run.",
  },
  {
    title: "SU Problems",
    subtitle: "Students’ Union Concerns",
    body: "Unfair treatment by your Students’ Union, barriers to ISoc recognition or funding, or SU policies that disproportionately affect Muslim students.",
  },
  {
    title: "Islamophobia",
    subtitle: "On-Campus Incidents",
    body: "Verbal abuse, discrimination, microaggressions, or structural Islamophobia experienced or witnessed on campus or in university settings.",
  },
];

export default function FosisReport() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="FOSIS Report">
        A reporting portal for ISocs and Muslim students to submit incidents regarding ISoc issues, SU problems, or
        Islamophobia.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <p className="type-body-md max-w-[50ch]">
            The FOSIS Report is a confidential reporting portal for ISocs and Muslim students across the UK and Ireland.
            If you have experienced or witnessed issues relating to your Islamic Society, your Students’ Union, or
            Islamophobia on campus, this is where you can tell us about it.
          </p>
          <p className="type-body-md mt-6 max-w-[50ch]">
            Reports submitted through this portal are reviewed by FOSIS’s national team. Depending on the nature of the
            incident, we may follow up directly, escalate to the relevant university or SU, or incorporate findings into
            our national advocacy work and annual report.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>What Can I Report?</SectionHead>
          <p className="type-body-md mb-10 max-w-[44ch]">This portal is for reporting three categories of incident:</p>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <li key={category.title} className="border-t border-ink py-6 lg:py-8">
                <p className="type-label text-grey">{category.subtitle}</p>
                <h2 className="type-heading-sm mt-3">{category.title}</h2>
                <p className="type-body-md mt-4">{category.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Submit a Report</SectionHead>
          <p className="type-body-md mb-8 max-w-[50ch]">
            Use the form below to submit your report. All submissions are treated with strict confidentiality. You may
            submit anonymously if you prefer, simply leave the name and email fields blank.
          </p>
          <iframe
            title="FOSIS Report form"
            src="https://tally.so/embed/w5QE4d?hideTitle=1&alignLeft=1"
            loading="lazy"
            className="h-[48rem] w-full border border-ink"
          />
          <p className="type-body-sm mt-4">
            <a
              href="https://tally.so/r/w5QE4d"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Can’t see the form? Click here to access FOSIS Report
            </a>
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>What Happens Next?</SectionHead>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <p className="type-body-md lg:col-span-6">
              Once your report is received, our team will review it and determine the appropriate response. This may
              include direct follow-up with you (if you provided contact details), liaison with your university or SU,
              formal escalation through our advocacy channels, or inclusion in our anonymised national data to support
              systemic change.
            </p>
            <p className="type-body-md lg:col-span-5 lg:col-start-8">
              If your situation is urgent or you require immediate support, please contact us directly at{" "}
              <a href="mailto:student.affairs@fosis.org.uk" className="font-bold underline underline-offset-4">
                student.affairs@fosis.org.uk
              </a>{" "}
              or reach out to your Regional Chair, listed on the{" "}
              <Link href="/about-us/" prefetch={false} className="underline underline-offset-4">
                About Us
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
