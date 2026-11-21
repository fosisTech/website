import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { ButtonLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "FOSIS Services",
  description:
    "One affiliation, everything your Islamic Society needs to thrive: training, advocacy, resources, and a national network of ISocs behind you.",
  alternates: { canonical: "/fosis-services/" },
};

const STATS = [
  { value: "350K", label: "Students represented" },
  { value: "100+", label: "Affiliated ISocs" },
  { value: "60+", label: "Years of legacy" },
  { value: "£25", label: "To join for the year" },
];

const PILLARS = [
  {
    title: "Training & Development",
    lead: "We invest in your committee.",
    items: [
      "ISoc leadership training: strategy, event planning, and succession",
      "Role-specific training for Presidents, Welfare Officers, and Events leads",
      "Public speaking and SU relationship management",
      "Khateeb (Jumu’ah) training",
      "Regional Kickstarters: in-person collaborative workshops",
      "A year-round webinar series on the challenges ISocs actually face",
    ],
  },
  {
    title: "Student Affairs & Advocacy",
    lead: "We stand with you when it matters.",
    items: [
      "Support on prayer space, halal food, and campus access",
      "Strategy for engaging your SU and university management",
      "Islamophobia reporting and full case support",
      "Guidance on Palestine advocacy and current student affairs",
      "FOI and SAR support for surveillance or monitoring concerns",
      "Co-signing and amplifying your open letters and public statements",
    ],
    note: "The support most ISocs never see: confidential SEAD help behind the scenes, navigating sensitive situations and welfare cases that need a national body’s involvement, quietly, whenever you need it.",
  },
  {
    title: "Resources & Services",
    lead: "Practical tools that save your committee time.",
    items: [
      "Fresher Packs tailored to your fresher campaign",
      "isoc.link: your ISoc’s own branded platform and mini-website",
      "The ISoc Essentials site: centralised guides and templates",
      "Discover Islam Week: resources, speakers, and event guides",
      "Regional speaker lists and booking support",
      "Project Ihsaan: careers webinars, mentorship, and networking",
    ],
  },
  {
    title: "Community & Events",
    lead: "You join a national network of ISoc leaders.",
    items: [
      "Priority access to the FOSIS Annual Summer and Winter Conferences",
      "Regional retreats for committee development and connection",
      "Networking across 100+ ISocs in the UK and Ireland",
      "Your own allocated FOSIS regional rep for ongoing shura and support",
      "Access to the full national and regional events calendar",
    ],
  },
];

const COMMITMENTS = [
  { title: "Advocacy", body: "Representing your voice to government and institutions." },
  { title: "Activism", body: "Standing against Islamophobia and discrimination." },
  { title: "Tarbiyyah", body: "Nurturing Islamic identity and character." },
  { title: "Development", body: "Equipping ISoc committees to lead effectively." },
];

const FEES = [
  { label: "Standard", price: "£25", who: "All Higher Education ISocs" },
  { label: "FE Concession", price: "£10", who: "Further Education ISocs" },
  { label: "Hardship Rate", price: "£10", who: "ISocs without current access to funds" },
];

const IN_RETURN = [
  "Share FOSIS content, campaigns, and events with your members",
  "Send at least one committee member to our Annual Summer and Winter Conferences",
  "Engage with your region where you can, the peer connections are worth it",
  "Keep your committee’s contact details current so support never breaks",
  "Signpost students to FOSIS when they face discrimination or welfare concerns",
];

function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item} className="flex gap-3 border-t border-current/30 py-3 first:border-t-0">
          <span aria-hidden="true">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FosisServices() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="FOSIS Services">
        One affiliation, everything your Islamic Society needs to thrive: training, advocacy, resources, and a national
        network of 110+ ISocs behind you.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <p className="type-heading-md max-w-[20ch]">Your Islamic Society should never have to figure it out alone.</p>
          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col gap-2 border-t border-ink pt-6 lg:border-t-0 lg:border-l lg:pl-[var(--grid-gap)] lg:first:border-l-0 lg:first:pl-0"
              >
                <p className="type-heading-lg">{stat.value}</p>
                <p className="type-body-sm">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Included in Full</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">What every affiliated ISoc receives</h2>
          <p className="type-body-md mt-8 max-w-[44ch]">
            Four pillars of support, included in full the moment you affiliate. No tiers, no add-ons, no hidden extras.
          </p>
          <ol className="mt-12 grid gap-[var(--grid-gap)] lg:mt-20 lg:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <li key={pillar.title} className="flex flex-col gap-5 border-t border-white pt-6 lg:pt-8">
                <p aria-hidden="true" className="type-heading-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-heading-sm">{pillar.title}</h3>
                <p className="type-heading-xxs">{pillar.lead}</p>
                <div className="type-body-md">
                  <Ticks items={pillar.items} />
                </div>
                {pillar.note && <p className="type-body-sm bg-white p-4 text-ink">{pillar.note}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Our Commitments</SectionHead>
          <h2 className="type-heading-lg mb-4 max-w-[16ch]">Built on four commitments to the Ummah</h2>
          <p className="type-body-md mb-12 max-w-[40ch] lg:mb-20">
            Everything above flows from how FOSIS serves Muslim students.
          </p>
          <ul className="grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((commitment) => (
              <li key={commitment.title} className="border-t border-ink py-6 lg:py-8">
                <h3 className="type-heading-sm">{commitment.title}</h3>
                <p className="type-body-md mt-3">{commitment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gold text-ink">
        <div className="page-wrap">
          <SectionHead>Affiliation Fees</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">One fee. Everything included.</h2>
          <p className="type-body-md mt-8 max-w-[44ch]">
            FOSIS is a non-profit. Every penny from affiliation is reinvested into the services on this page.
          </p>
          <ul className="mt-12 grid gap-[var(--grid-gap)] lg:mt-20 lg:grid-cols-3">
            {FEES.map((fee) => (
              <li key={fee.label} className="flex flex-col gap-2 bg-white p-6 lg:p-10">
                <p className="type-label">{fee.label}</p>
                <p className="type-heading-lg">{fee.price}</p>
                <p className="type-body-md">{fee.who}</p>
              </li>
            ))}
          </ul>
          <p className="type-body-md mt-8 max-w-[44ch]">
            No ISoc is ever turned away over cost. If the fee is a barrier, the hardship rate is there for you.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>In Return</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">A partnership, not a transaction</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-5">
              <p className="type-body-md">Affiliation works best both ways. In return, we simply ask that you:</p>
            </div>
            <div className="type-body-md lg:col-span-6 lg:col-start-7">
              <Ticks items={IN_RETURN} />
              <p className="mt-6">
                None of it is a checklist. It is the foundation of a relationship that makes your ISoc stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <h2 className="type-heading-lg max-w-[18ch]">Give your ISoc everything for the year ahead.</h2>
          <p className="type-body-md mt-8 max-w-[44ch]">
            Join 100+ Islamic Societies who never have to ask what FOSIS does, because FOSIS is already behind them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-12">
            <ButtonLink href="/isoc-affiliations/" variant="white">
              Affiliate Your ISoc
            </ButtonLink>
            <ButtonLink href="/contact-us/" variant="outline-white">
              Talk to Your Regional Rep
            </ButtonLink>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
