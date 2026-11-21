import type { Metadata } from "next";
import { ArafatPlanner } from "@/components/ArafatPlanner";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Day of Arafat, A Companion Guide",
  description:
    "A gentle companion guide to the Day of Arafat: its virtues, how to prepare, a suggested timetable, and trusted places to give.",
  alternates: { canonical: "/day-of-arafat/" },
};

const VIRTUES = [
  {
    title: "The day the religion was perfected",
    body: [
      "In Al-Sahihayn it was reported from ‘Umar ibn al-Khattab (RA) that a Jewish man said to him, “O Amir al-Muminin, there is a verse in your Book which you recite; if it had come to us Jews, we would have taken that day as an ‘Eid (festival).”",
      "‘Umar said, “Which verse?” He said:",
    ],
    quote: {
      text: "“This day I have perfected your religion for you, completed My favour upon you, and have chosen for you Islam as your religion.”",
      source: "al-Maidah 5:3 (interpretation of the meaning)",
    },
    after: [
      "‘Umar said, “We know on which day and in which place that was revealed to the Prophet ﷺ. It was when he was standing in ‘Arafah on a Friday.”",
    ],
  },
  {
    title: "A day by which Allah swore an oath",
    quote: { text: "“By the witnessing day [Friday] and by the witnessed day [the Day of ‘Arafah].”", source: "al-Buruj 85:3" },
    after: [
      "Abu Hurayrah (RA) reported that the Prophet ﷺ said: “The promised day is the Day of Resurrection, the witnessed day is the Day of ‘Arafah, and the witnessing day is Friday.”",
      "Narrated by al-Tirmidhi and classed as sahih by al-Albani",
    ],
  },
  {
    title: "The covenant from the progeny of Adam",
    body: [
      "Ibn ‘Abbas (RA) said: the Messenger of Allah ﷺ said: “Allah took the covenant from the loins of Adam in Na’man, i.e., ‘Arafah. He brought forth from his loins all his offspring and spread them before Him, then He addressed them, and said: Am I not your Lord? They said, ‘Yes, we testify,’ lest you should say on the Day of Resurrection: ‘Verily, we have been unaware of this.’”",
    ],
    quote: {
      text: "“…Or lest you should say: ‘It was only our fathers aforetime who took others as partners in worship along with Allah, and we were (merely their) descendents after them; will You then destroy us because of the deeds of men who practiced Al-Batil…?’”",
      source: "al-A’raf 7:172-173",
    },
    after: [
      "Narrated by Ahmad and classed as sahih by al-Albani. And there is no greater day than this, and no greater covenant than this.",
    ],
  },
  {
    title: "Forgiveness, freedom from the Fire",
    body: [
      "In Sahih Muslim it was narrated from ‘Aishah (RA) that the Prophet ﷺ said: “There is no day on which Allah frees more people from the Fire than the Day of ‘Arafah. He comes close and expresses His pride to the angels, saying, ‘What do these people want?’”",
      "Ibn ‘Umar narrated that the Prophet ﷺ said: “Allah expresses His pride to His angels at the last part of the day on the Day of ‘Arafah, about the people of ‘Arafah. He says, ‘Look at My slaves who have come unkempt and dusty.’”",
      "Narrated by Ahmad and classed as sahih by al-Albani",
    ],
  },
  {
    title: "Fasting expiates two years of sins",
    body: [
      "Abu Qatadah (RA) narrated that the Messenger of Allah ﷺ was asked about fasting on the Day of ‘Arafah. He said:",
    ],
    quote: { text: "“It expiates for the sins of the previous year and of the coming year.”", source: "Narrated by Muslim" },
    after: ["This (fasting) is recommended for those who are not on Hajj."],
  },
];

const APPEALS = [
  { region: "General", links: [{ label: "maacharity.org", href: "https://maacharity.org/" }] },
  {
    region: "Gaza",
    links: [
      { label: "Action for Humanity, Palestine Emergency", href: "https://actionforhumanity.org/appeals/palestine-emergency/" },
      { label: "SKT Welfare, Food for Palestine", href: "https://www.sktwelfare.org/food-for-palestine/" },
      { label: "Waqf Forever, Waqf for Palestine", href: "https://waqforever.org/projects/" },
    ],
  },
  {
    region: "Sudan",
    links: [
      {
        label: "Human Appeal, Sudan Emergency Fund",
        href: "https://humanappeal.org.uk/donate/projects/emergencies/sudan-emergency-fund",
      },
    ],
  },
];

const APPS = [
  { platform: "iOS", label: "Dhikr & Dua on the App Store", href: "https://apps.apple.com/gb/app/dhikr-dua/id1561598617" },
  {
    platform: "Android",
    label: "Dhikr & Dua on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.alifewithallah.app&hl=en_GB&gl=US",
  },
];

export default function DayOfArafat() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="The Day of Arafat">
        A gentle, gathered space to prepare for, and walk through, the most blessed day of the year. Take what nourishes
        you, leave what doesn’t.
      </PageIntro>

      <section className="section section-flush bg-white">
        <div className="page-wrap grid gap-[var(--grid-gap)] lg:grid-cols-2">
          <div className="bg-gold p-6 text-ink lg:p-10">
            <p className="type-heading-xs">Disclaimer.</p>
            <p className="type-body-md mt-3">
              This is just for inspiration, don’t feel pressured to do everything. Focus on what feels right for you and
              adjust as needed. Do what helps you connect with Allah, and don’t compare yourself to others. Just try
              your best.
            </p>
          </div>
          <div className="bg-mist p-6 lg:p-10">
            <p className="type-heading-xs">How to use this page.</p>
            <p className="type-body-md mt-3">
              Tick items off as you move through the day, the progress bar will fill as you go. Your ticks are saved in
              this browser, so you will not lose your place if you refresh.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <div className="mb-10 lg:mb-16">
            <h2 className="type-heading-lg">Virtues of the Day</h2>
          </div>
          <ol className="grid gap-x-[var(--grid-gap)] gap-y-12 lg:grid-cols-2">
            {VIRTUES.map((virtue) => (
              <li key={virtue.title} className="border-t-[8px] border-ink pt-4 lg:border-t-[12px]">
                <h3 className="type-heading-sm">{virtue.title}</h3>
                <div className="type-body-md mt-4 flex flex-col gap-4">
                  {virtue.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {virtue.quote && (
                    <blockquote className="border-l-4 border-ink pl-4">
                      <p>{virtue.quote.text}</p>
                      <footer className="type-label mt-2">{virtue.quote.source}</footer>
                    </blockquote>
                  )}
                  {virtue.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ArafatPlanner />

      <section className="section bg-white">
        <div className="page-wrap">
          <div className="mb-10 lg:mb-16">
            <h2 className="type-heading-lg">Useful Links</h2>
          </div>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-2">
            <div className="border-t-[8px] border-ink pt-4 lg:border-t-[12px]">
              <h3 className="type-heading-sm">Looking somewhere to donate?</h3>
              <p className="type-body-md mt-3">A few trusted appeals, give what you can, however small.</p>
              {APPEALS.map((group) => (
                <div key={group.region} className="mt-6">
                  <p className="type-label">{group.region}</p>
                  <ul className="type-body-md mt-2">
                    {group.links.map((link) => (
                      <li key={link.href} className="border-t border-ink py-2 last:border-b">
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="type-body-md mt-6 font-bold">Donating today is among the most beloved acts.</p>
            </div>
            <div className="border-t-[8px] border-ink pt-4 lg:border-t-[12px]">
              <h3 className="type-heading-sm">App for Dua and Dhikr</h3>
              <p className="type-body-md mt-3">
                You can use this for morning and evening adkhar, it also includes many other duas from the sunnah.
              </p>
              {APPS.map((app) => (
                <div key={app.platform} className="mt-6">
                  <p className="type-label">{app.platform}</p>
                  <p className="type-body-md mt-2 border-y border-ink py-2">
                    <a href={app.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      {app.label} ↗
                    </a>
                  </p>
                </div>
              ))}
              <p className="type-body-md mt-6 font-bold">A few minutes of dhikr in the morning carries the whole day.</p>
            </div>
          </div>
          <p lang="ar" dir="rtl" className="font-arabic mt-16 text-center text-4xl leading-normal lg:text-6xl">
            تَقَبَّلَ ٱللَّٰهُ مِنَّا وَمِنْكُمْ
          </p>
          <p className="type-label mt-3 text-center">May Allah accept from us, and from you.</p>
        </div>
      </section>
    </main>
  );
}
