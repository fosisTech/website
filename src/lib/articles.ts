export type Article = {
  title: string;
  href: string;
  /** ISO date, also used to build the visible label. */
  date: string;
  readTime: string;
  excerpt: string;
  /** Short standfirst from the source meta description. Falls back to the excerpt. */
  deck?: string;
  /** Only three articles have a source photo. */
  image?: string;
};

/** Colour panel used where an article has no photo. Cycles through the palette. */
export const PANEL_TONES = ["bg-navy", "bg-navy-mid", "bg-gold", "bg-mist"] as const;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatArticleDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** Newest first. Source: docs/fosis-site/content/articles.md and articles-page-2.md. The WordPress "Hello World!" placeholder is left out. */
const SOURCE_ARTICLES: Article[] = [
  {
    title: "Towards an Ummatic Vision: Lessons from FOSIS Annual Conference 2025",
    href: "/2026/04/16/towards-an-ummatic-vision-lessons-from-fosis-annual-conference-2025/",
    date: "2026-04-16",
    readTime: "4 min read",
    image: "/images/articles/ummatic-vision.jpg",
    excerpt:
      "Perhaps one of the biggest challenges facing the Muslim Ummah is our tendency towards ‘reactivism,’ where we mobilise passionately in…",
  },
  {
    title: "The New Face of Islamophobia in Britain.",
    href: "/2026/04/16/the-new-face-of-islamophobia-in-britain/",
    date: "2026-04-16",
    readTime: "6 min read",
    image: "/images/articles/new-face-of-islamophobia.jpg",
    excerpt:
      "The time of sword-bearing crusaders has long gone, but the struggle against Islamophobia remains. Today, a rather more insidious form of Muslim…",
  },
  {
    title: "4 Surprising Truths About Power, Protest, and a Generation Reawakened",
    href: "/2026/04/16/4-surprising-truths-about-power-protest-and-a-generation-reawakened/",
    date: "2026-04-16",
    readTime: "6 min read",
    image: "/images/articles/power-protest-generation.jpg",
    excerpt:
      "It’s a common and logical assumption: as minority communities gain more visibility and representation in mainstream society, acceptance grows, prejudice…",
  },
  {
    title: "When Tyranny Falls: Lessons from Syria for Today’s Students",
    href: "/2026/04/16/when-tyranny-falls-lessons-from-syria-for-todays-students/",
    date: "2026-04-16",
    readTime: "7 min read",
    excerpt:
      "One year ago, the world witnessed one of the most astonishing collapses of a modern authoritarian regime, one that, only…",
  },
  {
    title: "Narrative Warfare and ‘Intifada’: Freedom of Expression and the Policing of Protest",
    href: "/2026/04/16/narrative-warfare-and-intifada-freedom-of-expression-and-the-policing-of-protest/",
    date: "2026-04-16",
    readTime: "4 min read",
    excerpt:
      "On 17 December, two people were arrested in central London for racially aggravated public order offences after allegedly chanting slogans that included calls for “intifada”…",
  },
  {
    title: "The Spiritual Cost of Modern Education and a Muslim Vision for Renewal",
    href: "/2026/04/16/the-spiritual-cost-of-modern-education-and-a-muslim-vision-for-renewal/",
    date: "2026-04-16",
    readTime: "7 min read",
    excerpt:
      "“The heart is never truly alive, except through knowledge.” – Ibn al-Qayyim To speak meaningfully about knowledge in this particular age,…",
  },
  {
    title: "IHSAAN 2024: How 3,000 Muslim Graduates Found Their Path",
    href: "/2024/11/15/ihsaan-2024-how-3000-muslim-graduates-found-their-path/",
    deck: "This year’s IHSAAN Careers Conference was the biggest in FOSIS’s history. Here’s what happened, what we learned, and what it means for the future of Muslim graduates in the UK.",
    date: "2024-11-15",
    readTime: "3 min read",
    excerpt:
      "This year’s IHSAAN Careers Conference was the biggest in FOSIS’s history. Here’s what happened, what we learned, and what it…",
  },
  {
    title: "Islamophobia on Campus: What the Data Tells Us, and What We’re Doing About It",
    href: "/2024/10/02/islamophobia-on-campus-what-the-data-tells-us-and-what-were-doing-about-it/",
    deck: "FOSIS’s latest research into the experiences of Muslim students reveals a campus environment that is improving in some ways, and deteriorating in others. Here is what we found.",
    date: "2024-10-02",
    readTime: "3 min read",
    excerpt:
      "FOSIS’s latest research into the experiences of Muslim students reveals a campus environment that is improving in some ways, and…",
  },
  {
    title: "How to Build a Thriving ISoc: 10 Lessons from the UK’s Best Islamic Societies",
    href: "/2024/09/05/how-to-build-a-thriving-isoc-10-lessons-from-the-uks-best-islamic-societies/",
    deck: "After six decades supporting ISocs across the UK, we know what separates a struggling society from a transformative one. Here are the ten things the best ISocs do differently.",
    date: "2024-09-05",
    readTime: "3 min read",
    excerpt:
      "After six decades supporting ISocs across the UK, we know what separates a struggling society from a transformative one. Here…",
  },
  {
    title: "Ramadan at University: A Complete Guide for Students and ISoc Leaders",
    href: "/2024/03/10/ramadan-at-university-a-complete-guide-for-students-and-isoc-leaders/",
    deck: "From managing fasts during exam season to running suhoor events that actually work — everything you need to know about making Ramadan on campus truly meaningful.",
    date: "2024-03-10",
    readTime: "3 min read",
    excerpt:
      "From managing fasts during exam season to running suhoor events that actually work — everything you need to know about…",
  },
  {
    title: "Faith, Identity and the British Muslim Graduate",
    href: "/2024/01/18/faith-identity-and-the-british-muslim-graduate/",
    deck: "What does it mean to graduate as a British Muslim today? FOSIS reflects on identity, ambition, and the quiet revolution happening in living rooms, offices, and lecture halls across the country.",
    date: "2024-01-18",
    readTime: "3 min read",
    excerpt:
      "What does it mean to graduate as a British Muslim today? FOSIS reflects on identity, ambition, and the quiet revolution…",
  },
  {
    title: "Why Muslim Students Need a National Voice More Than Ever",
    href: "/2023/11/22/why-muslim-students-need-a-national-voice-more-than-ever/",
    deck: "In a political climate that often treats Muslim students as a problem to be managed, FOSIS argues for a different framing — and a more ambitious kind of representation.",
    date: "2023-11-22",
    readTime: "3 min read",
    excerpt:
      "In a political climate that often treats Muslim students as a problem to be managed, FOSIS argues for a different…",
  },
];

export type ListedArticle = Article & { slug: string; tone: (typeof PANEL_TONES)[number] };

/** Adds the URL slug and, for photo-less articles, the next panel colour. */
export const ARTICLES: ListedArticle[] = (() => {
  let panel = 0;
  return SOURCE_ARTICLES.map((article) => {
    const slug = article.href.split("/").filter(Boolean).pop() ?? "";
    const tone = PANEL_TONES[panel % PANEL_TONES.length];
    if (!article.image) panel += 1;
    return { ...article, slug, tone };
  });
})();
