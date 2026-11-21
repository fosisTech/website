import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { MailtoForm } from "@/components/MailtoForm";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book Islamophobia Training",
  description:
    "FOSIS delivers interactive Islamophobia Awareness Training for Student Union leaders, sabbatical officers and university staff.",
  alternates: { canonical: "/book-islamophobia-training/" },
};

const TOPICS = [
  {
    title: "Defining Islamophobia",
    body: "A rigorous examination of what Islamophobia is, how it manifests in educational settings, and why the APPG definition matters for institutional policy.",
  },
  {
    title: "Student Experiences",
    body: "Real accounts of how Islamophobia affects Muslim students, from micro-aggressions to structural discrimination, helping leaders develop genuine empathy and awareness.",
  },
  {
    title: "Institutional Response",
    body: "Practical steps Student Unions and universities can take, from policy reform to complaints procedures, to create genuinely inclusive campuses for Muslim students.",
  },
  {
    title: "Prevent & Policy",
    body: "An examination of the Prevent strategy’s impact on Muslim students and how Student Unions can advocate for students navigating counter-terrorism policies on campus.",
  },
];

export default function BookIslamophobiaTraining() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Book Islamophobia Training" size="lg" />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-7">
              <h2 className="type-heading-lg">Making Campuses Safer for Muslim Students</h2>
              <p className="type-body-md mt-8 max-w-[50ch]">
                Islamophobia is a lived reality for many Muslim students across UK campuses. FOSIS delivers a
                comprehensive, interactive Islamophobia Awareness Training programme specifically designed for Student
                Union leaders, sabbatical officers, and university staff, equipping them with the knowledge, language,
                and tools to better support Muslim students and drive institutional change.
              </p>
            </div>
            <blockquote className="border-t-[8px] border-ink pt-6 lg:col-span-4 lg:col-start-9 lg:border-t-[12px]">
              <p className="type-heading-xs">
                “When Student Unions are formally trained in understanding Islamophobia and the experiences of Muslim
                students, it makes them feel safer, heard, and represented.”
              </p>
              <footer className="type-label mt-4">FOSIS</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>The Training</SectionHead>
          <h2 className="type-heading-lg mb-12 lg:mb-20">What the Session Covers</h2>
          <ol className="grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((topic, index) => (
              <li key={topic.title} className="border-t border-ink py-6 lg:py-8">
                <p aria-hidden="true" className="type-heading-xs text-grey">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-heading-sm mt-4">{topic.title}</h3>
                <p className="type-body-sm mt-4">{topic.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Who It’s For</SectionHead>
          <h2 className="type-heading-lg max-w-[16ch]">Designed for Student Union Leaders</h2>
          <p className="type-body-md mt-8 max-w-[50ch]">
            The training is tailored for sabbatical officers, welfare staff, diversity leads, and anyone in a student
            union who works to support Muslim students. Sessions are interactive, evidence-based, and delivered by FOSIS
            representatives with direct experience of Muslim student welfare.
          </p>
        </div>
      </section>

      <section id="book" className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Book a Session</SectionHead>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-5">
              <h2 className="type-heading-md">Get in Touch to Arrange Training</h2>
              <p className="type-body-md mt-6 max-w-[34ch]">
                Please fill out the enquiries form and we will do our best to get back to you. Include your institution
                name, estimated number of attendees, and preferred dates.
              </p>
            </div>
            <div className="bg-paper p-6 lg:col-span-7 lg:p-10">
              <MailtoForm
                to="student.affairs@fosis.org.uk"
                subject="Islamophobia Awareness Training enquiry"
                submitLabel="Book Training"
                fields={[
                  { name: "name", label: "Name", autoComplete: "name", required: true },
                  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
                  { name: "date", label: "Date (DD/MM/YYYY)" },
                  { name: "time", label: "Time", type: "radio", options: ["Morning", "Afternoon"], required: true },
                  { name: "notes", label: "Notes", multiline: true, required: true },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <GetInvolvedBand />
    </main>
  );
}
