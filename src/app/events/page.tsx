import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events",
  description:
    "FOSIS runs over 100 national and regional events each year, from careers conferences and Da’wah training to socials, sports tournaments and Islamic camps.",
  alternates: { canonical: "/events/" },
};

const TYPES = [
  {
    title: "Careers & Professional",
    body: "The Ihsaan National Careers Conference Series, employer networking events, and professional development workshops across London, the Midlands, and the North.",
    tone: "bg-navy text-white",
  },
  {
    title: "Faith & Da’wah",
    body: "Discover Islam Week, national speaker tours featuring world-class Islamic scholars, Da’wah training days, and spiritual development retreats and camps.",
    tone: "bg-gold text-ink",
  },
  {
    title: "Community & Social",
    body: "Regional dinners, sports tournaments, charity fundraisers including the national Charity Week for Orphans, and community gatherings that bring students together beyond the campus.",
    tone: "bg-mist text-ink",
  },
];

export default function Events() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Events" image={{ src: "/images/home/conference.jpg" }} lede="md">
        FOSIS runs over 100 national and regional events each year, from large-scale conferences to intimate training
        days, socials, dinners, sports tournaments, and Islamic camps. Our events bring Muslim students together from
        every corner of the UK and Ireland, building the connections and community that define the FOSIS experience.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Calendar</SectionHead>
          <h2 className="type-heading-md mb-8 max-w-[20ch]">See our Luma Page below for all the Latest FOSIS Events</h2>
          <iframe
            title="FOSIS events calendar on Luma"
            src="https://luma.com/embed/calendar/cal-U05Qd0a3Ri06jpT/events"
            loading="lazy"
            className="h-[34rem] w-full border border-ink lg:h-[44rem]"
            allowFullScreen
          />
          <p className="type-body-sm mt-4">
            <a
              href="https://luma.com/calendar/cal-U05Qd0a3Ri06jpT"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Open the calendar on Luma
            </a>
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Types of Events</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">Something for Every Student</h2>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-3">
            {TYPES.map((type) => (
              <article key={type.title} className={`flex flex-col gap-5 p-6 lg:p-10 ${type.tone}`}>
                <h3 className="type-heading-sm">{type.title}</h3>
                <p className="type-body-md">{type.body}</p>
              </article>
            ))}
          </div>
          <p className="type-body-md mt-12 max-w-[50ch]">
            Follow <strong>@fosischannel</strong> on Instagram and X to stay up to date with upcoming events. If you’d
            like to host or partner on a FOSIS event at your university, get in touch at{" "}
            <a href="mailto:info@fosis.org.uk" className="font-bold underline underline-offset-4">
              info@fosis.org.uk
            </a>
            .
          </p>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
