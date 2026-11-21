import type { Metadata } from "next";
import { ButtonLink, PageIntro, SectionHead } from "@/components/ui";
import history from "@/content/history.json";

export const metadata: Metadata = {
  title: "FOSIS History",
  description:
    "From a single room in Birmingham in 1963 to a national movement of 350,000 students: the story of the Federation of Student Islamic Societies.",
  alternates: { canonical: "/fosis-history/" },
};

const STATS = [
  { value: "1963", label: "Founded" },
  { value: "63+", label: "Years of service" },
  { value: "350K", label: "Students represented" },
  { value: "150+", label: "ISocs nationwide" },
  { value: "7", label: "Regional committees" },
];

const FOUNDING_SOCIETIES = [
  "University of Birmingham",
  "University of Bristol",
  "Trinity College Dublin",
  "Imperial College London",
  "University of Leeds",
  "London Islamic Circle",
  "Muslim Student Society UK",
  "University of Oxford",
  "SOAS, London",
  "Sheffield Islamic Circle",
  "Wolverhampton Malayan Teachers College",
];

const LEGACY = [
  {
    year: "1960",
    name: "Muslim Students Society UK & Eire (MSS)",
    body: "Co-founded by Ahmad Totonji. The first organised attempt to unify Muslim students across Britain and Ireland, and the direct precursor to FOSIS.",
  },
  {
    year: "1963",
    name: "Muslim Students Association, USA & Canada (MSA)",
    body: "Co-founded at the University of Illinois in January 1963 by Ahmad Totonji and 70 students. Now the largest Muslim student organisation in North America, with chapters at over 600 universities.",
  },
  {
    year: "1969",
    name: "International Islamic Federation of Student Organizations (IIFSO)",
    body: "Formally established in Aachen, Germany. Rooted in a 1966 initiative at the University of Ibadan, Nigeria. FOSIS’s founding generation, especially Totonji, helped shape this global federation spanning five continents.",
  },
  {
    year: "1996",
    name: "Forum of European Muslim Youth and Student Organisations (FEMYSO)",
    body: "Co-founded in Leicester by FOSIS and 18 other organisations from 11 countries, following a 1995 preparatory meeting in Sweden. Now 32 member organisations across 22 European countries, headquartered in Brussels.",
  },
];

const NETWORK = ["FOSIS, UK & Ireland · Est. 1963", "MSA, USA & Canada · Est. 1963", "IIFSO, Global · Est. 1969", "FEMYSO, Europe · Est. 1996"];

const MISSION = [
  {
    title: "Representation",
    body: "The voice of 350,000+ Muslim students in policy, politics, and public life, from campus prayer rooms to Parliament.",
  },
  {
    title: "Knowledge",
    body: "The ISoc Essentials Hub, six decades of institutional knowledge, codified and made accessible to every ISoc in the country.",
  },
  {
    title: "Leadership",
    body: "Annual conferences, training programmes, and regional committees developing the next generation of Muslim leaders in Britain.",
  },
  {
    title: "Community",
    body: "From blood drives to food banks, FOSIS unites Muslim students in service to the wider British community, on every campus in the land.",
  },
];

export default function FosisHistory() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Our Story">
        From a single room in Birmingham to a national movement spanning 350,000 students, six decades of service,
        scholarship, and sacrifice.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <ul className="grid grid-cols-2 gap-x-[var(--grid-gap)] gap-y-8 lg:grid-cols-5">
            {STATS.map((stat) => (
              <li key={stat.label} className="border-t border-ink pt-4">
                <p className="type-heading-md">{stat.value}</p>
                <p className="type-label mt-2">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>The Beginning · 1963</SectionHead>
          <h2 className="type-heading-lg max-w-[18ch]">A Meeting that Changed Muslim Student Life in Britain</h2>
          <div className="mt-12 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-6">
              <p className="type-body-md">
                In July 1963, representatives from eleven Islamic societies gathered in the Cadbury Room at the
                University of Birmingham. What they agreed to that day would shape Muslim student life in the UK and
                Ireland for generations.
              </p>
              <p className="type-body-md mt-6">
                The need was clear: Muslim students across British and Irish universities were isolated, lacking a
                unified voice and the resources to practise their faith on campus and represent their interests
                nationally. Individual Islamic societies existed, but they operated alone. A national body was long
                overdue.
              </p>
              <p className="type-body-md mt-6">
                At that meeting, the Federation of Islamic Student Societies, FOISS, was formally established, later
                renamed the Federation of Student Islamic Societies (FOSIS). The organisation was built on a conviction
                that Muslim students, united, could be a force for good on every campus in the country.
              </p>
              <p className="type-body-md mt-6">
                In the early 1960s, FOSIS was the only support group that many young Muslims in the UK and Ireland could
                look to for support and advice. The eleven founding societies represented the entirety of organised
                Muslim student life in Britain at the time.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <blockquote className="bg-navy p-6 text-white lg:p-10">
                <p className="type-label">The Cadbury Room · University of Birmingham · July 1963</p>
                <p className="type-heading-sm mt-6">
                  “Who are we? And what do we want? We agreed on wanting to know our religion, a shared desire for
                  service to our faith.”
                </p>
              </blockquote>
              <h3 className="type-heading-xs mt-10">The 11 founding member societies</h3>
              <ul className="type-body-md mt-4">
                {FOUNDING_SOCIETIES.map((society) => (
                  <li key={society} className="border-t border-ink py-2 last:border-b">
                    {society}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>Six Decades of History</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">The FOSIS Timeline</h2>
          <ol>
            {history.timeline.map((entry) => (
              <li
                key={`${entry.date}-${entry.title}`}
                className="grid gap-4 border-t border-ink py-6 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)] lg:py-8"
              >
                <p className="type-heading-xs lg:col-span-3">{entry.date}</p>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h3 className="type-heading-sm">{entry.title}</h3>
                  <p className="type-body-md mt-4 text-pretty">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Defining Moments</SectionHead>
          <h2 className="type-heading-lg mb-4 max-w-[16ch]">Chapters that Shaped History</h2>
          <p className="type-body-md mb-12 max-w-[40ch] lg:mb-20">
            From hosting world leaders to launching landmark campaigns, the moments that defined FOSIS.
          </p>
          <ol className="grid gap-[var(--grid-gap)] md:grid-cols-2">
            {history.chapters.map((chapter, index) => (
              <li
                key={chapter.title}
                className={`flex flex-col gap-4 p-6 lg:p-10 ${index % 3 === 0 ? "bg-navy text-white" : index % 3 === 1 ? "bg-gold text-ink" : "bg-mist text-ink"}`}
              >
                <p className="type-label">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")} · </span>
                  {chapter.date}
                </p>
                <h3 className="type-heading-sm">{chapter.title}</h3>
                <p className="type-body-md">{chapter.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>The Founders &amp; Pioneers</SectionHead>
          <h2 className="type-heading-lg mb-12 max-w-[14ch] lg:mb-20">People Who Built FOSIS</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {history.people.map((person) => (
              <li key={person.name} className="border-t border-ink py-6 lg:py-8">
                <p aria-hidden="true" className="type-heading-sm flex size-16 items-center justify-center bg-navy text-white">
                  {person.initials}
                </p>
                <h3 className="type-heading-sm mt-6">{person.name}</h3>
                <p className="type-label mt-2">{person.role}</p>
                <p className="type-body-sm mt-4">{person.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>A Global Legacy</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">Born in Britain, Built for the World</h2>
          <ol className="mt-12 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:mt-20">
            {LEGACY.map((item) => (
              <li key={item.year} className="border-t border-white/40 py-6 lg:py-8">
                <p className="type-heading-xs">{item.year}</p>
                <h3 className="type-heading-xxs mt-3">{item.name}</h3>
                <p className="type-body-sm mt-3">{item.body}</p>
              </li>
            ))}
          </ol>
          <h3 className="type-heading-md mt-12 max-w-[16ch] lg:mt-20">A Network That Spans the Globe</h3>
          <p className="type-body-md mt-6 max-w-[44ch]">
            The generation that founded FOSIS in 1963 didn’t just build a national body, they seeded a worldwide network
            of Muslim student organisations that today represents millions of students across every continent.
          </p>
          <ul className="type-label mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {NETWORK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Then &amp; Now</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">The Mission Continues</h2>
          <blockquote className="mt-8">
            <p className="type-heading-sm max-w-[24ch]">“Empowering students through the words of Allah to enrich society.”</p>
            <footer className="type-label mt-4">FOSIS Vision, unchanged since 1963</footer>
          </blockquote>
          <ul className="mt-12 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {MISSION.map((item) => (
              <li key={item.title} className="border-t border-ink py-6">
                <h3 className="type-heading-sm">{item.title}</h3>
                <p className="type-body-sm mt-3">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>The Story Continues</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">Be Part of the Next Chapter</h2>
          <p className="type-body-md mt-8 max-w-[44ch]">
            Sixty years in, the mission is the same. If you lead an ISoc, or aspire to, you are the living continuation
            of this legacy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/isoc-essentials/" variant="navy">
              Explore ISoc Essentials
            </ButtonLink>
            <ButtonLink href="/about-us/" variant="outline-ink">
              About FOSIS
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
