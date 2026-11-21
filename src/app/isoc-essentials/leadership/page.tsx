import type { Metadata } from "next";
import { ArrowLink, PageIntro, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership & Planning",
  description:
    "ISoc Essentials: committee roles, lessons in leadership and the handover documents every Islamic Society needs.",
  alternates: { canonical: "/isoc-essentials/leadership/" },
};

const BIG_THREE = [
  {
    title: "President",
    body: "Overall responsibility for the society. Provides vision, chairs meetings, oversees the committee, and serves as the primary contact for the Students’ Union.",
  },
  {
    title: "Secretary",
    body: "The administrative lead. Manages bookings, communication, and membership lists. Responsible for taking minutes and keeping the ISoc organised.",
  },
  {
    title: "Treasurer",
    body: "Financial guardian. Oversees the budget, manages reimbursements, ensures financial transparency, and handles fundraising and SU grant applications.",
  },
];

const SUPPORTING = [
  {
    title: "Media & Marketing",
    body: "Manages the ISoc’s external image. Responsible for branding, social media content, and promotional campaigns to engage the student body.",
  },
  {
    title: "Events Lead",
    body: "Delivers the ISoc’s activity calendar. Manages event logistics, speaker requests, and ensures all activities provide value to the student body.",
  },
];

const QA = [
  {
    question: "What do you expect from your team?",
    answer:
      "Prompt task completion, upholding Islamic values & consistent attendance. Empowering individuals with well-defined roles streamlines work and builds confidence. Don’t burn out by doing everything yourself.",
  },
  {
    question: "How do we improve our communication as Muslim leaders?",
    answer:
      "With effective communication techniques from the Sunnah. Learn how to convey the message of Islam clearly & compassionately, drawing inspiration from the Prophet’s (SAW) methods.",
  },
];

const PRINCIPLES = [
  {
    title: "Lead by Example",
    body: "Serve your people and the Muslim community with humility and sincerity. Lead with genuine care and inspire through your actions, your team will naturally follow and respect your guidance.",
  },
  {
    title: "Communicate with Clarity",
    body: "Clear and consistent communication is vital for team cohesion. Ensure information flows freely, expectations are understood, and feedback is encouraged.",
  },
  {
    title: "Defining Roles",
    body: "Defining clear roles and reporting structures: everyone knows their responsibilities, who to report to, and where decisions are made.",
  },
];

const HANDOVER = [
  { title: "Annual Report", body: "A summary of the year’s accomplishments and activities." },
  { title: "Constitution", body: "The formal governing document explaining how the ISoc runs." },
  { title: "Meeting Minutes", body: "An archive of all previous meeting minutes and key decisions." },
  { title: "Access & Passwords", body: "Securely hand over email, social media, and website credentials." },
  { title: "Finance & Accounts", body: "Budgets, sponsor info, and comprehensive financial reports." },
  { title: "SU Relations", body: "Key information on room bookings and relationship history." },
  { title: "Prayer Room Guidance", body: "University rules and best practices for managing the prayer room." },
  { title: "Inventory of Assets", body: "A full list of ISoc property, from banners to sports equipment." },
];

export default function IsocLeadership() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Leadership & Planning" size="lg" />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <p lang="ar" dir="rtl" className="font-arabic text-3xl leading-[1.8] lg:col-span-7 lg:text-5xl">
              فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۚ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ ۖ فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ
            </p>
            <blockquote className="lg:col-span-4 lg:col-start-9">
              <p className="type-heading-xs">
                “It is out of Allah’s mercy that you have been lenient with them. Once you make a decision, put your
                trust in Allah. Surely Allah loves those who trust in Him.”
              </p>
              <footer className="type-label mt-4">Surah Ali-Imran · 3:159</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Building Your Committee</SectionHead>
          <p className="type-body-md mb-12 max-w-[50ch] lg:mb-20">
            Knowing your role directly affects how well the society functions day to day. When roles are clear, tasks
            don’t get missed and decisions are made faster. It helps committee members know what they are responsible
            for, who to go to for support or approval, and when to step in or step back.
          </p>
          <h2 className="type-heading-md mb-6">The Big Three</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {BIG_THREE.map((role) => (
              <li key={role.title} className="border-t border-ink py-6">
                <h3 className="type-heading-sm">{role.title}</h3>
                <p className="type-body-md mt-4">{role.body}</p>
              </li>
            ))}
          </ul>
          <h2 className="type-heading-md mt-12 mb-6">Supporting Roles</h2>
          <ul className="grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {SUPPORTING.map((role) => (
              <li key={role.title} className="border-t border-ink py-6">
                <h3 className="type-heading-sm">{role.title}</h3>
                <p className="type-body-md mt-4">{role.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="page-wrap">
          <SectionHead>Official FOSIS Guide</SectionHead>
          <h2 className="type-heading-lg max-w-[14ch]">Lessons in Leadership</h2>
          <p className="type-body-md mt-8 max-w-[44ch]">
            A strong leader is the cornerstone of any effective team. True leadership in an ISoc is about serving your
            people and the Muslim community with humility and sincerity.
          </p>
          <dl className="mt-12 grid gap-[var(--grid-gap)] lg:mt-20 lg:grid-cols-2">
            {QA.map((item) => (
              <div key={item.question} className="border-t border-white/40 pt-6">
                <dt className="type-heading-xs">{item.question}</dt>
                <dd className="type-body-md mt-4">{item.answer}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-12 grid gap-x-[var(--grid-gap)] lg:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <li key={item.title} className="border-t border-white/40 py-6">
                <h3 className="type-heading-sm">{item.title}</h3>
                <p className="type-body-md mt-4">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Records</SectionHead>
          <h2 className="type-heading-md max-w-[16ch]">Key Handover Documentation</h2>
          <p className="type-label mt-6">The Final Transition</p>
          <ul className="mt-12 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {HANDOVER.map((item) => (
              <li key={item.title} className="border-t border-ink py-6">
                <h3 className="type-heading-xs">{item.title}</h3>
                <p className="type-body-sm mt-3">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ArrowLink href="/isoc-essentials/">Back to the ISoc Essentials Hub</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
