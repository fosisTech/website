import type { Metadata } from "next";
import { ArrowLink, ButtonLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Islamic Resources",
  description: "Guides, companion reads, and spiritual resources curated by FOSIS for Muslim students across the UK.",
  alternates: { canonical: "/islamic-resources/" },
};

const RESOURCES = [
  {
    tag: "Dhul Hijjah",
    title: "Day of Arafat",
    body: "A companion guide to the holiest day of the Islamic year, its significance, virtues, recommended acts, and supplications.",
    href: "/day-of-arafat/",
    cta: "Read Guide",
    tone: "bg-navy text-white",
  },
  {
    tag: "Friday Khutbahs",
    title: "Khutbah Library",
    body: "Thirty-six ready-to-deliver Friday khutbahs with standardised Arabic openings and full English, built for schools, colleges and campuses.",
    href: "/khutbah-library/",
    cta: "Open Library",
    tone: "bg-gold text-ink",
  },
];

export default function IslamicResources() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Islamic Resources">
        Guides, companion reads, and spiritual resources curated by FOSIS for Muslim students across the UK.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Resource Library</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Curated for Muslim Students</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            Practical, thoughtful resources to support your spiritual journey throughout the academic year.
          </p>
          <div className="mt-12 grid gap-[var(--grid-gap)] lg:mt-20 lg:grid-cols-2">
            {RESOURCES.map((resource) => (
              <article key={resource.href} className={`flex flex-col gap-5 p-6 lg:p-10 ${resource.tone}`}>
                <p className="type-label">{resource.tag}</p>
                <h3 className="type-heading-md">{resource.title}</h3>
                <p className="type-body-md max-w-[34ch]">{resource.body}</p>
                <div className="mt-auto pt-4">
                  <ArrowLink href={resource.href}>{resource.cta}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>Got a Suggestion?</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Help Us Grow This Library.</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            If you have a resource idea or would like to contribute to our Islamic resources hub, we’d love to hear from
            you.
          </p>
          <div className="mt-8">
            <ButtonLink href="/join-team-fosis/" variant="navy">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
