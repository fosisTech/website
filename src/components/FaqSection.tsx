import { ArrowLink, SectionHead } from "@/components/ui";

type Faq = { question: string; answer: string; links: { href: string; label: string }[] };

/** Answers are drawn from the old FOSIS site content in docs/fosis-site/content. */
const FAQS: Faq[] = [
  {
    question: "What is FOSIS?",
    answer:
      "The Federation of Student Islamic Societies is the national voice for Muslim students across the UK and Ireland. Founded in 1963, we are the UK’s largest Muslim student organisation and represent more than 350,000 students.",
    links: [{ href: "/about-us/", label: "About FOSIS" }],
  },
  {
    question: "How do I find my ISoc?",
    answer:
      "Wherever you study in the UK or Ireland, there is almost certainly an Islamic Society on your campus. Search the directory of affiliated societies to find yours.",
    links: [{ href: "/find-your-isoc/", label: "Find Your ISoc" }],
  },
  {
    question: "How can my ISoc affiliate with FOSIS?",
    answer:
      "Applying takes about five minutes and is free to apply. Joining for the year costs £25. Affiliated societies get national representation, committee and Da’wah training, ongoing advice, and freshers packs for their Freshers Fair.",
    links: [{ href: "/isoc-affiliations/", label: "Affiliate Your ISoc" }],
  },
  {
    question: "Where can ISoc leaders find guidance?",
    answer:
      "The ISoc Essentials Hub brings together decades of FOSIS knowledge on leadership and handovers, events, finance, advocacy, and spiritual wellbeing for committees. It suits a first-year rep as much as a President inheriting a society.",
    links: [{ href: "/isoc-essentials/", label: "ISoc Essentials" }],
  },
  {
    question: "What events does FOSIS run?",
    answer:
      "Over 100 national and regional events each year. They include careers conferences, Discover Islam Week, speaker tours, Da’wah training days, regional dinners, sports tournaments, charity fundraisers, and Islamic camps. Our Luma calendar lists the latest dates.",
    links: [{ href: "/events/", label: "View Events" }],
  },
  {
    question: "What is IHSAAN?",
    answer:
      "IHSAAN is our careers programme for Muslim students and graduates. It runs regional conferences with expert talks, employer stalls, and peer networking across sectors such as law, finance, medicine, and tech. Follow @ihsaan.fosis on Instagram for dates and how to register.",
    links: [{ href: "/ihsaan-careers/", label: "IHSAAN Careers" }],
  },
  {
    question: "How do I report Islamophobia or a problem with my ISoc or Students’ Union?",
    answer:
      "Use the FOSIS Report, a confidential portal for ISoc issues, Students’ Union problems, and Islamophobia on campus. You can submit anonymously. Our national team reviews every report and may follow up, escalate it to your university or Students’ Union, or use it in our national advocacy work.",
    links: [{ href: "/fosis-report/", label: "Make a Report" }],
  },
  {
    question: "Can FOSIS train our Student Union on Islamophobia?",
    answer:
      "Yes. We deliver an interactive Islamophobia Awareness Training programme for Student Union leaders, sabbatical officers, and university staff. It covers what Islamophobia is, how it shows up in education, and how students experience it.",
    links: [{ href: "/book-islamophobia-training/", label: "Book Training" }],
  },
  {
    question: "I am a Muslim sabbatical officer. Is there a network for me?",
    answer:
      "Yes. The Sabbatical Officer Network connects Muslim students serving as elected officers in student unions across the UK and Ireland. Members get a peer community, FOSIS advocacy backing, and training and resources.",
    links: [{ href: "/sabbatical-officer-network/", label: "Join the Network" }],
  },
  {
    question: "How can I get involved or support FOSIS?",
    answer:
      "You can volunteer on Team FOSIS, from regional roles that need a few hours a week around your studies to national projects. You can also give a one-off donation or contribute to the FOSIS Waqf, a lasting Sadaqah Jariyah. Partnerships and in-kind support are welcome too.",
    links: [
      { href: "/join-team-fosis/", label: "Join Team FOSIS" },
      { href: "/support-us/", label: "Donate Now" },
    ],
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

/** Home FAQ: ruled accordion rows built on native details elements, one open at a time. */
export function FaqSection() {
  return (
    <section className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
      <div className="page-wrap">
        <SectionHead>FAQ</SectionHead>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
          <h2 className="type-heading-md max-w-[12ch] lg:col-span-5">Frequently asked questions</h2>
          <div className="lg:col-span-7">
            {FAQS.map((faq) => (
              <details key={faq.question} name="faq" className="faq-item group border-t border-ink last:border-b">
                <summary className="type-heading-xs flex cursor-pointer list-none items-center justify-between gap-6 py-5 lg:py-6 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <PlusIcon />
                </summary>
                <div className="pb-6 lg:pb-8">
                  <p className="type-body-md text-pretty">{faq.answer}</p>
                  <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                    {faq.links.map((link) => (
                      <ArrowLink key={link.href} href={link.href}>
                        {link.label}
                      </ArrowLink>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
