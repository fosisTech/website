import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink, ButtonLink, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about-us/" },
};

const STATS = [
  { value: "63+", label: "Years of Service", description: "Serving Muslim students since our foundation in 1963." },
  { value: "350K", label: "Students Represented", description: "The largest Muslim student network across the UK." },
  { value: "100+", label: "Affiliated ISocs", description: "Islamic Societies united under one national body." },
  { value: "50+", label: "Events Per Year", description: "National and regional events for students across the UK." },
];

const PILLARS = [
  {
    title: "Development",
    description:
      "Training, resources, and leadership programmes that equip students for success in their careers and communities.",
    href: "/fosis-services/",
    image: "/images/home/conference.jpg",
    tone: "bg-navy text-white",
  },
  {
    title: "Unity",
    description:
      "Bridging ISocs from every corner of the UK into one powerful, unified network of Muslim student excellence.",
    href: "/isoc-affiliations/",
    image: "/images/home/brothers.jpg",
    tone: "bg-navy-mid text-white",
  },
  {
    title: "Advocacy",
    description:
      "Championing the rights and welfare of Muslim students at every level, from individual campuses to parliament.",
    href: "/fosis-report/",
    image: "/images/home/crowd.jpg",
    tone: "bg-gold text-ink",
  },
];

function Chip({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      role="presentation"
      width={256}
      height={160}
      className="mx-[0.12em] inline-block h-[0.62em] w-[1em] -translate-y-[0.04em] object-cover align-middle"
    />
  );
}

export default function AboutUs() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="bg-white">
        <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-[3.75rem] lg:pb-20">
          <h1 className="type-heading-xl">About FOSIS</h1>
          <p className="type-body-lg mt-8 max-w-[28ch] lg:mt-12">
            The Federation of Student Islamic Societies, the national voice for Muslim students across the UK &amp;
            Ireland since 1963.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Our Mission</SectionHead>
          <h2 className="type-heading-lg">
            We have been <Chip src="/images/home/lecture-hall.jpg" />
            serving Muslim students <Chip src="/images/home/crowd.jpg" />
            since 1963.
          </h2>
          <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="type-body-md">
                FOSIS connects, empowers, and advocates for Islamic Societies across every university in the United
                Kingdom. From spiritual development to career guidance, from national campaigns to grassroots community
                building, we are the infrastructure behind Muslim student excellence.
              </p>
              <div className="mt-8">
                <ButtonLink href="/fosis-history/" variant="outline-ink">
                  FOSIS History
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>By The Numbers</SectionHead>
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col gap-3 border-t border-white/40 pt-6 lg:border-t-0 lg:border-l lg:pl-[var(--grid-gap)] lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="type-heading-lg">{stat.value}</p>
                <p className="type-heading-xs">{stat.label}</p>
                <p className="type-body-sm max-w-[22ch]">{stat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>What We Do</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">Three Pillars of Our Work</h2>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <article key={pillar.title} className={`flex flex-col p-2 ${pillar.tone}`}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt=""
                    role="presentation"
                    fill
                    sizes="(min-width: 1200px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-4 pb-6 lg:p-6 lg:pb-8">
                  <h3 className="type-heading-sm">{pillar.title}</h3>
                  <p className="type-body-md">{pillar.description}</p>
                  <div className="mt-auto pt-4">
                    <ArrowLink href={pillar.href}>Learn more</ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
