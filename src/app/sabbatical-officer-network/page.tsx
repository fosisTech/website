import type { Metadata } from "next";
import { GetInvolvedBand } from "@/components/GetInvolvedBand";
import { MailtoForm } from "@/components/MailtoForm";
import { PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sabbatical Officer Network",
  description:
    "The FOSIS Sabbatical Officer Network connects, supports and empowers Muslim students serving as elected officers in student unions across the UK and Ireland.",
  alternates: { canonical: "/sabbatical-officer-network/" },
};

const OFFERS = [
  {
    title: "Peer Community",
    body: "Connect with Muslim sabbatical officers from across the UK, people who understand the unique dynamics of being a Muslim in a student union leadership role.",
  },
  {
    title: "FOSIS Backing",
    body: "Direct access to FOSIS’s national advocacy team for guidance on Muslim student welfare cases, Islamophobia incidents, and navigating institutional policies including Prevent.",
  },
  {
    title: "Training & Resources",
    body: "Access tailored resources, policy briefings, and training sessions to help you represent Muslim students more effectively within your student union.",
  },
];

export default function SabbaticalOfficerNetwork() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Sabbatical Officer Network" />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Muslim Students Are Shaping Student Unions</SectionHead>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-5">
              <p className="type-heading-xl">53</p>
              <p className="type-heading-xs mt-4">Muslim Sabbatical Officers</p>
              <p className="type-body-md mt-4 max-w-[30ch]">
                Elected across student unions nationwide in a single year, an unprecedented milestone showing the growing
                influence of Muslim students in representative politics.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="type-body-md">
                The FOSIS Sabbatical Officer Network exists to connect, support, and empower Muslim students serving as
                elected officers in student unions across the UK and Ireland. For many Muslim sabbatical officers,
                navigating the intersection of their faith, their community, and institutional student union culture can
                be isolating. This network changes that.
              </p>
              <p className="type-body-md mt-6">
                Through peer connection, shared resources, and FOSIS support, members of the network can advocate more
                effectively for Muslim students at their institutions while drawing on a national community of officers
                who understand their unique position.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>What the Network Offers</SectionHead>
          <h2 className="type-heading-lg mb-12 max-w-[16ch] lg:mb-20">Support Designed Around You</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {OFFERS.map((offer) => (
              <li key={offer.title} className="border-t border-white/40 py-6 lg:py-8">
                <h3 className="type-heading-sm">{offer.title}</h3>
                <p className="type-body-md mt-4">{offer.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Join the Network</SectionHead>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-5">
              <h2 className="type-heading-md">Are You a Muslim Sabbatical Officer?</h2>
              <p className="type-body-md mt-6 max-w-[34ch]">
                If you are a Muslim student currently serving as a sabbatical or part-time officer in your student union,
                we want to hear from you. Email us at{" "}
                <a href="mailto:student.affairs@fosis.org.uk" className="font-bold underline underline-offset-4">
                  student.affairs@fosis.org.uk
                </a>{" "}
                with your name, institution, and role, and we’ll connect you with the network.
              </p>
            </div>
            <div className="bg-paper p-6 lg:col-span-7 lg:p-10">
              <MailtoForm
                to="student.affairs@fosis.org.uk"
                subject="Sabbatical Officer Network"
                submitLabel="Contact us"
                fields={[
                  { name: "name", label: "Name", autoComplete: "name", required: true },
                  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
                  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
                  { name: "union", label: "Your Student’s Union/University", required: true },
                  { name: "role", label: "Your Role", required: true },
                  { name: "message", label: "Message", multiline: true },
                  {
                    name: "consent",
                    label: "By submitting your information, you’re giving us permission to email you. You may unsubscribe at any time.",
                    type: "checkbox",
                  },
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
