import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the right FOSIS team: general enquiries, media, ISoc affiliations, IHSAAN careers, Islamophobia training and the President's office.",
  alternates: { canonical: "/contact-us/" },
};

const CONTACTS = [
  { label: "General Enquiries", email: "info@fosis.org.uk" },
  { label: "Media & Press", email: "head.media@fosis.org.uk" },
  { label: "ISoc Affiliations", email: "vp.highereducation@fosis.org.uk" },
  { label: "IHSAAN Careers", email: "head.ihsaan@fosis.org.uk" },
  { label: "Islamophobia Training", email: "studentaffairs@fosis.org.uk" },
  { label: "President’s Office", email: "president@fosis.org.uk" },
];

export default function ContactUs() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Contact Us">
        We would love to hear from you. Whether you are a student, an ISoc leader, a media professional, or a prospective
        partner, get in touch with the right team using the details below.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Send Us a Message</SectionHead>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <ContactCard />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Direct Contacts</SectionHead>
          <ul className="grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3">
            {CONTACTS.map((contact) => (
              <li key={contact.email} className="border-t border-ink py-6 lg:py-8">
                <h2 className="type-heading-xs">{contact.label}</h2>
                <a href={`mailto:${contact.email}`} className="type-body-md mt-3 inline-block break-all underline underline-offset-4">
                  {contact.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Find Us</SectionHead>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-6">
              <p className="type-body-md">
                FOSIS operates nationally across the UK and Ireland. Our team is distributed, for postal correspondence
                please reach out by email first to obtain the current mailing address.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="type-body-md">Follow us on social media for the latest news, events, and announcements:</p>
              <ul className="type-heading-xxs mt-6 flex flex-col gap-3">
                <li>
                  Instagram:{" "}
                  <a href="https://instagram.com/fosischannel" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    @fosischannel
                  </a>
                </li>
                <li>
                  Twitter / X:{" "}
                  <a href="https://twitter.com/FOSIS_" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    @FOSIS_
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://linkedin.com/company/fosis" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                    FOSIS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
