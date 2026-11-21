import type { Metadata } from "next";
import { ButtonLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Your generosity helps FOSIS serve over 350,000 Muslim students across every campus in the UK. Give once, give monthly or contribute to the FOSIS Waqf.",
  alternates: { canonical: "/support-us/" },
};

const IMPACT = [
  {
    title: "National Advocacy",
    body: "Funding our policy work and representation of Muslim students at government level, universities, and the media.",
  },
  {
    title: "Student Programmes",
    body: "Powering Ihsaan Careers, ISoc leadership training, mental health initiatives, and annual national events.",
  },
  {
    title: "ISoc Infrastructure",
    body: "Providing resources, toolkits, and support to 150+ Islamic Societies so they can thrive on their campuses.",
  },
];

const OTHER_WAYS = [
  { title: "Volunteer with FOSIS", body: "Join our national team and contribute your skills and time." },
  {
    title: "Corporate Partnership",
    body: "Partner with us to reach and support the next generation of Muslim professionals.",
  },
  { title: "Spread the Word", body: "Share our mission with your network, ISoc, or mosque." },
];

const REACH = [
  { value: "63+", label: "Years of Service", description: "Serving Muslim students since our foundation in 1963." },
  { value: "350K", label: "Students Represented", description: "The largest Muslim student network across the UK." },
  { value: "150+", label: "Affiliated ISocs", description: "Islamic Societies united under one national body." },
  { value: "100+", label: "Events Per Year", description: "National and regional events for students across the UK." },
];

export default function SupportUs() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Support FOSIS" tone="gold">
        Your generosity helps us serve over 350,000 Muslim students across every campus in the UK. Every contribution
        strengthens our advocacy, programmes, and community.
        <span className="mt-8 block">
          <ButtonLink href="#fosis-donate-options" variant="navy">
            Donate Now
          </ButtonLink>
        </span>
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Your Impact</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">What Your Support Enables</h2>
          <ol className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {IMPACT.map((item, index) => (
              <li key={item.title} className="border-t border-ink py-6 lg:py-8">
                <p aria-hidden="true" className="type-heading-xs text-grey">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-heading-sm mt-4">{item.title}</h3>
                <p className="type-body-md mt-4 max-w-[28ch]">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="fosis-donate-options" className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Give Today</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Choose How You Give</h2>
          <p className="type-body-md mt-8 max-w-[34ch]">
            Whether a one-off gift or a monthly commitment, your support goes directly toward our work for Muslim
            students.
          </p>
          <div className="mt-12 grid gap-[var(--grid-gap)] lg:mt-20 lg:grid-cols-2">
            <article className="flex flex-col gap-5 bg-white p-6 text-ink lg:p-10">
              <p className="type-label">One-Off Donation</p>
              <p className="type-body-md">
                Make a single donation of any amount to support FOSIS and the work we do for Muslim students across the
                UK.
              </p>
              <div className="mt-auto pt-4">
                <ButtonLink href="https://www.zeffy.com/en-GB/donation-form/donate-to-fosis" variant="navy" external>
                  Donate Now
                </ButtonLink>
              </div>
            </article>
            <article className="flex flex-col gap-5 bg-gold p-6 text-ink lg:p-10">
              <p className="type-label">Sadaqah Jariyah</p>
              <h3 className="type-heading-xs">Donate to the FOSIS Waqf</h3>
              <p className="type-body-md">
                Contribute to our endowment fund, a lasting Sadaqah Jariyah that sustains FOSIS and Muslim student life
                for generations to come.
              </p>
              <div className="mt-auto pt-4">
                <ButtonLink href="https://www.zeffy.com/en-GB/donation-form/fosis-waqf" variant="ink" external>
                  Donate to Waqf
                </ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Other Ways to Help</SectionHead>
          <p className="type-body-md mb-10 max-w-[34ch]">Volunteering, partnerships, and in-kind support.</p>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {OTHER_WAYS.map((item) => (
              <li key={item.title} className="border-t border-ink py-6 lg:py-8">
                <h3 className="type-heading-xs">{item.title}</h3>
                <p className="type-body-md mt-3">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ButtonLink href="/contact-us/" variant="outline-ink">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionHead>Our Reach</SectionHead>
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {REACH.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col gap-3 border-t border-ink pt-6 lg:border-t-0 lg:border-l lg:pl-[var(--grid-gap)] lg:first:border-l-0 lg:first:pl-0"
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
          <SectionHead>Transparency &amp; Trust</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">A Registered Charity You Can Trust</h2>
          <p className="type-body-md mt-8 max-w-[40ch]">
            FOSIS is a registered charity in England and Wales. Your donation is used solely to support Muslim students
            and Islamic Societies across the UK.
          </p>
          <p className="type-body-md mt-4">
            Registered Charity Number: <strong>1040360</strong>
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact-us/" variant="navy">
              Contact Our Team
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
