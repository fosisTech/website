import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { ArrowLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ihsaan Careers",
  description:
    "Ihsaan is the FOSIS national careers conference series for Muslim students, with expert talks, employer stalls and peer networking in London, the Midlands and the North.",
  alternates: { canonical: "/ihsaan-careers/" },
};

const SERVICES = [
  { label: "MyMuslimMentor", href: "https://mymuslimmentor.com/", body: "Find a mentor in your field." },
  { label: "IHSAAN Website", href: "https://www.ihsaan.network/", body: "The home of the Ihsaan network." },
  {
    label: "IHSAAN Opportunities Tracker",
    href: "https://ihsaannetwork.notion.site/opportunities-tracker",
    body: "Live roles, schemes and deadlines.",
  },
  {
    label: "IHSAAN Career Essentials Guide",
    href: "https://ihsaannetwork.notion.site/careers-essentials?v=31a9a9520ce4818abf91000cb8bdbc71",
    body: "A practical guide to starting your career.",
  },
];

const EXPECT = [
  {
    title: "Expert-Led Talks",
    body: "Industry leaders and professionals share their journeys, insights, and practical guidance across sectors including law, finance, medicine, tech, and more.",
  },
  {
    title: "Employer Stalls",
    body: "Connect directly with employers, graduate schemes, and organisations actively seeking Muslim talent. Bring your CV, ask questions, and make the connections that matter.",
  },
  {
    title: "Peer Networking",
    body: "Meet Muslim students and graduates from across the country who share your ambitions. Build the networks and friendships that will support your career for life.",
  },
];

const REGIONS = [
  { name: "London", host: "UCL Islamic Society" },
  { name: "Midlands", host: "University of Birmingham ISoc" },
  { name: "North", host: "University of Manchester ISoc" },
];

export default function IhsaanCareers() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Ihsaan Careers" image={{ src: "/images/home/ihsaan-careers.jpg", position: "object-top" }} />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-6">
              <SectionHead>What is Ihsaan?</SectionHead>
              <p className="type-body-md">
                Ihsaan is FOSIS’s national careers conference series, a programme built around a single conviction: that
                every Muslim student in the UK and Ireland deserves the support and resources to enter their dream
                career and, in doing so, build a more ethical, God-conscious society for all.
              </p>
              <p className="type-body-md mt-6">
                The name <em>Ihsaan</em>, meaning excellence and virtue in Arabic, reflects the spirit of the programme:
                not just securing a job, but pursuing a career with purpose, integrity, and lasting impact. Supported by
                My Fridays, Ihsaan brings together students, professionals, and employers across the UK in a series of
                regional career conferences each year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>What To Expect</SectionHead>
          <h2 className="type-heading-lg mb-12 max-w-[16ch] lg:mb-20">A Conference Built for Muslim Students</h2>
          <ol className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {EXPECT.map((item, index) => (
              <li key={item.title} className="border-t border-ink py-6 lg:py-8">
                <p aria-hidden="true" className="type-heading-xs text-grey">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-heading-sm mt-4">{item.title}</h3>
                <p className="type-body-md mt-4">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Links to IHSAAN Services</SectionHead>
          <ul className="grid gap-x-[var(--grid-gap)] md:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.href} className="flex flex-col gap-3 border-t border-white/40 py-6 lg:py-8">
                <h2 className="type-heading-xs">{service.label}</h2>
                <p className="type-body-md">{service.body}</p>
                <div className="pt-2">
                  <a href={service.href} target="_blank" rel="noopener noreferrer" className="arrow-link">
                    Visit
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Regional Conferences</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Coming to a City Near You</h2>
          <p className="type-body-md mt-8 max-w-[48ch]">
            Ihsaan runs as a series of regional conferences across the UK, making career support accessible to Muslim
            students wherever they study. Past events have been hosted at UCL (London), the University of Birmingham
            (Midlands), and the University of Manchester (North), with each conference tailored to the specific student
            communities in that region.
          </p>
          <ul className="mt-12 grid gap-[var(--grid-gap)] lg:grid-cols-3">
            {REGIONS.map((region) => (
              <li key={region.name} className="bg-mist p-6 lg:p-10">
                <h3 className="type-heading-sm">{region.name}</h3>
                <p className="type-body-md mt-4">Hosted in partnership with {region.host}</p>
              </li>
            ))}
          </ul>
          <p className="type-body-md mt-12 max-w-[48ch]">
            Keep an eye on our Events page and follow <strong>@ihsaan.fosis</strong> on Instagram for announcements
            about upcoming conference dates and how to register.
          </p>
          <div className="mt-6">
            <ArrowLink href="/events/">FOSIS Events</ArrowLink>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
