import type { Metadata } from "next";
import { ArrowLink, ButtonLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "ISoc Essentials Hub",
  description:
    "Sixty years of FOSIS institutional knowledge for ISoc leaders: leadership, events, finance, advocacy and tarbiyyah in one place.",
  alternates: { canonical: "/isoc-essentials/" },
};

const STATS = [
  { value: "63+", label: "Years of knowledge" },
  { value: "150+", label: "ISocs served" },
  { value: "350K", label: "Students represented" },
];

const PILLARS_DASHBOARD = [
  { name: "Leadership", body: "Handovers and committee culture standards for sustainable societies.", href: "/isoc-essentials/leadership/" },
  { name: "Events", body: "High-impact operational and legacy frameworks for campus events." },
  { name: "Finance", body: "Strategic budgeting and institutional transparency frameworks." },
  { name: "Advocacy", body: "Lobbying strategies and systemic representation across campuses." },
  { name: "Tarbiyyah", body: "Spiritual growth and wellness frameworks for campus leadership roles." },
  { name: "Alumni", body: "Preserving institutional memory across generations of Muslim leaders." },
];

const FOUNDATIONS = [
  {
    title: "Ihsaan",
    subtitle: "Excellence",
    body: "Ihsaan, excellence and beauty in every action, is the governing standard for everything we do in our Islamic Societies. It calls us beyond adequacy toward mastery in our events, meetings, communications, and relationships with students.",
  },
  {
    title: "Amanah",
    subtitle: "Trust",
    body: "Amanah, trust and responsibility, is the foundation of ISoc leadership. Every role carries the trust of your student body. When we treat our positions as a sacred trust, we build societies that outlast any single committee.",
  },
  {
    title: "Ukhuwwah",
    subtitle: "Brotherhood",
    body: "Ukhuwwah, brotherhood and sisterhood, transforms an ISoc from a society into a community. It means creating spaces where every Muslim student feels genuinely welcomed, seen, and supported.",
  },
];

const ROADMAP = [
  {
    year: "2025",
    title: "Institutional Memory",
    body: "Digitising and structuring 60 years of FOSIS knowledge into an accessible hub.",
  },
  {
    year: "2026",
    title: "Regional Empowerment",
    body: "Distributing resources and frameworks across all regions and ISocs.",
  },
  {
    year: "Beyond",
    title: "National Legacy",
    body: "A living archive that grows with every generation of Muslim student leaders.",
  },
];

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 transition-transform duration-300 group-open:rotate-45"
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export default function IsocEssentials() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="ISoc Essentials Hub">
        60 Years of Institutional Knowledge in One Place
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-7">
              <p lang="ar" dir="rtl" className="font-arabic text-4xl leading-normal lg:text-6xl">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <p className="type-label mt-4">In the name of Allah, the Most Gracious, the Most Merciful</p>
              <p className="type-heading-md mt-10">
                “To serve the Muslim students is to serve the future of the Ummah.”
              </p>
            </div>
            <ul className="grid gap-6 lg:col-span-4 lg:col-start-9">
              {STATS.map((stat) => (
                <li key={stat.label} className="border-t border-ink pt-4">
                  <p className="type-heading-lg">{stat.value}</p>
                  <p className="type-label mt-2">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Curated with Ihsaan · Lead with Barakah</SectionHead>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <h2 className="type-heading-lg lg:col-span-6">Welcome to the IE Hub</h2>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="type-body-md">
                Being part of an ISoc is the hardest work on campus. We help you lead with Barakah, not stress.
              </p>
              <p className="type-body-md mt-6">
                The ISoc Essentials Hub centralises over 60 years of FOSIS institutional knowledge, best practices,
                frameworks, and lived experience from Islamic Society leaders across the UK, into one accessible, living
                resource.
              </p>
              <p className="type-body-md mt-6">
                Whether you are a first-year rep or a President inheriting a complex society, this Hub is your
                foundation. Navigate by pillar, search by topic, or follow the structured roadmap.
              </p>
              <p className="type-body-md mt-6">
                Sincerely, <strong>The ISoc Essentials Team</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Your Starting Point</SectionHead>
          <h2 className="type-heading-lg">Dashboard</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            Six pillars. One hub. Everything your ISoc needs to lead with excellence.
          </p>
          <ol className="mt-12 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {PILLARS_DASHBOARD.map((pillar, index) => (
              <li key={pillar.name} className="flex flex-col gap-3 border-t border-white/40 py-6 lg:py-8">
                <p aria-hidden="true" className="type-heading-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-heading-sm">{pillar.name}</h3>
                <p className="type-body-md">{pillar.body}</p>
                <div className="pt-2">
                  {pillar.href ? (
                    <ArrowLink href={pillar.href}>Explore</ArrowLink>
                  ) : (
                    <p className="type-label">Coming Soon</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>A Shared History</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">The Legacy</h2>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-2">
            <blockquote className="flex flex-col gap-6 bg-gold p-6 text-ink lg:p-10">
              <p className="type-heading-xs">
                “Who are we? And what do we want? We agreed on wanting to know our religion, a shared desire for service
                to our faith.”
              </p>
              <footer className="type-label mt-auto">Dr. Ahmad Totonji · FOSIS Founder · 1963</footer>
            </blockquote>
            <blockquote className="flex flex-col gap-6 bg-mist p-6 lg:p-10">
              <p className="type-heading-xs">
                “I finally felt a sense of belonging on campus. I finally found my community, my strength, and my
                home.”
              </p>
              <footer className="type-label mt-auto">ISoc Member · Student Testimonial</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>The Pillars</SectionHead>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <h2 className="type-heading-md max-w-[12ch] lg:col-span-5">Institutional Foundation</h2>
            <div className="lg:col-span-7">
              {FOUNDATIONS.map((item, index) => (
                <details key={item.title} name="foundation" className="faq-item group border-t border-ink last:border-b">
                  <summary className="type-heading-xs flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-6 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")} </span>
                      {item.title} <span className="text-grey">{item.subtitle}</span>
                    </span>
                    <PlusIcon />
                  </summary>
                  <p className="type-body-md pb-6 lg:pb-8">{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Mission &amp; Purpose</SectionHead>
          <h2 className="type-heading-lg">The Vision</h2>
          <p className="type-heading-sm mt-8 max-w-[24ch]">
            “Preserving 60 years of institutional memory to empower a professional, unified, and spiritually resilient
            student body for generations to come.”
          </p>
          <ol className="mt-12 grid gap-x-[var(--grid-gap)] lg:mt-20 lg:grid-cols-3">
            {ROADMAP.map((step) => (
              <li key={step.year} className="border-t border-ink py-6 lg:py-8">
                <p className="type-heading-xs text-grey">{step.year}</p>
                <h3 className="type-heading-sm mt-3">{step.title}</h3>
                <p className="type-body-md mt-4">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="type-label mt-10">Strategic Roadmap · Live</p>
          <p className="type-heading-xs mt-3">FOSIS Vision: “Empowering students through the words of Allah to enrich society.”</p>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>Join the Team</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">Join the IE Hub Team</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            Help us research, write, and edit the future of ISoc leadership for students across the UK.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact-us/" variant="navy">
              Join Now
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
