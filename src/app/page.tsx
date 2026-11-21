import Image from "next/image";
import Link from "next/link";
import { ContactCard } from "@/components/ContactCard";
import { FaqSection } from "@/components/FaqSection";
import { HeroVideo } from "@/components/HeroVideo";
import { NewsletterBand } from "@/components/NewsletterBand";
import { ArrowIcon, ArrowLink, ButtonLink, SectionHead } from "@/components/ui";
import { ARTICLES, formatArticleDate } from "@/lib/articles";

const FEATURES = [
  {
    title: "FOSIS Events Across the UK",
    description:
      "Over 100 national and regional events each year, from conferences and training days to socials and Islamic camps.",
    href: "/events/",
    cta: "View Events",
    image: "/images/home/crowd.jpg",
    external: false,
  },
  {
    title: "Meet IHSAAN",
    description:
      "IHSAAN is a grassroots organisation helping Muslim students and graduates across the UK and Ireland bridge the gap between university and professional life.",
    href: "https://ihsaan.network",
    cta: "Explore IHSAAN",
    image: "/images/home/ihsaan-careers.jpg",
    external: true,
  },
  {
    title: "Resources for Your Faith Journey",
    description:
      "Guides, companion reads, and spiritual resources curated by FOSIS for Muslim students across the UK.",
    href: "/islamic-resources/",
    cta: "Explore Resources",
    image: "/images/home/seminar.jpg",
    external: false,
  },
  {
    title: "Making Campuses Safer for Muslim Students",
    description:
      "Interactive Islamophobia Awareness Training for Student Union leaders, sabbatical officers, and university staff.",
    href: "/book-islamophobia-training/",
    cta: "Book Training",
    image: "/images/home/brothers.jpg",
    external: false,
  },
];

const PROJECTS = [
  { label: "IHSAAN Careers", href: "/ihsaan-careers/" },
  { label: "ISoc Essentials", href: "/isoc-essentials/" },
  { label: "FOSIS Services", href: "/fosis-services/" },
  { label: "FOSIS Report", href: "/fosis-report/" },
  { label: "Islamic Resources", href: "/islamic-resources/" },
  { label: "Sabbatical Officer Network", href: "/sabbatical-officer-network/" },
  { label: "Book Islamophobia Training", href: "/book-islamophobia-training/" },
  { label: "Events", href: "/events/" },
];

const ISOC_LOGOS = [
  { src: "/images/isocs/Cambridge.jpg", name: "Cambridge University Islamic Society" },
  { src: "/images/isocs/Cardiff.jpg", name: "Cardiff University Islamic Society" },
  { src: "/images/isocs/Dundee-1.jpg", name: "University of Dundee Islamic Society" },
  { src: "/images/isocs/Durham.jpg", name: "Durham University Islamic Society" },
  { src: "/images/isocs/HeriotWatt.jpg", name: "Heriot-Watt University Islamic Society" },
  { src: "/images/isocs/Imperial.jpg", name: "Imperial College London Islamic Society" },
  { src: "/images/isocs/KCL.jpg", name: "King’s College London Islamic Society" },
  { src: "/images/isocs/LSE.jpg", name: "LSE Islamic Society" },
  { src: "/images/isocs/Newcastle.jpg", name: "Newcastle University Islamic Society" },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section data-hero className="relative isolate bg-navy text-white lg:min-h-svh">
        <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-[3.75rem] lg:absolute lg:inset-x-0 lg:bottom-0 lg:z-10 lg:pt-0 lg:pb-12">
          <h1 className="type-heading-lg max-w-[14ch] lg:max-w-none lg:!text-[4.5rem] xl:!text-[5.625rem]">Empowering Muslim Students.</h1>
          <div className="mt-10 flex flex-wrap gap-4 lg:mt-8">
            <ButtonLink href="/isoc-affiliations/" variant="white">
              Affiliate Your ISoc
            </ButtonLink>
            <ButtonLink href="/support-us/" variant="outline-white">
              Support Us
            </ButtonLink>
          </div>
        </div>
        <HeroVideo />
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionHead>Get Started</SectionHead>
          <div className="grid gap-x-[var(--grid-gap)] gap-y-12 lg:grid-cols-12 lg:gap-y-16">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="flex flex-col lg:col-span-6">
                <div className="relative h-72 overflow-hidden lg:h-[28rem]">
                  <Image
                    src={feature.image}
                    alt=""
                    role="presentation"
                    fill
                    sizes="(min-width: 1200px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 pt-6 lg:pt-8">
                  <h2 className="type-heading-md max-w-[16ch]">{feature.title}</h2>
                  <p className="type-body-md max-w-[40ch]">{feature.description}</p>
                  <div className="mt-auto pt-4">
                    <ButtonLink href={feature.href} variant="outline-ink" external={feature.external}>
                      {feature.cta}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Our Network</SectionHead>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <div className="relative flex flex-col overflow-hidden bg-gold p-6 text-ink lg:col-span-5 lg:p-10">
              <h2 className="type-heading-md relative z-10">Affiliated ISocs</h2>
              <p className="type-body-md relative z-10 mt-6">
                Over 110 Islamic Societies from universities and colleges across the UK and Ireland, united under one
                national body.
              </p>
              <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/find-your-isoc/" variant="ink">
                  Find Your ISoc
                </ButtonLink>
                <ButtonLink href="/isoc-affiliations/" variant="outline-ink">
                  Affiliate Your ISoc
                </ButtonLink>
              </div>
              <div aria-hidden="true" className="burst absolute inset-x-0 bottom-0 h-1/2" />
            </div>
            <ul className="grid grid-cols-3 gap-px bg-ink/15 lg:col-span-7">
              {ISOC_LOGOS.map((logo) => (
                <li key={logo.src} className="flex aspect-square items-center justify-center bg-white p-4 lg:p-8">
                  <Image src={logo.src} alt={logo.name} width={150} height={150} className="h-full w-full object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
        <div className="page-wrap">
          <SectionHead>Latest</SectionHead>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <div className="relative flex flex-col overflow-hidden bg-navy p-6 text-white lg:col-span-4 lg:p-10">
              <h2 className="type-heading-md relative z-10">News &amp; Updates</h2>
              <p className="type-body-md relative z-10 mt-6">
                The latest from FOSIS, perspectives on Muslim student life, advocacy, careers, and community.
              </p>
              <div className="relative z-10 mt-8">
                <ArrowLink href="/articles/">View all articles</ArrowLink>
              </div>
              <div aria-hidden="true" className="burst absolute inset-x-0 bottom-0 h-1/2" />
            </div>
            <div className="grid gap-[var(--grid-gap)] md:grid-cols-3 lg:col-span-8">
              {ARTICLES.slice(0, 3).map((article) => (
                <article key={article.href} className="group relative flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {article.image && (
                      <Image
                        src={article.image}
                        alt=""
                        role="presentation"
                        fill
                        sizes="(min-width: 1200px) 20vw, (min-width: 680px) 30vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <p className="type-label mt-4 flex gap-3 text-grey">
                    <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                    <span>{article.readTime}</span>
                  </p>
                  <h3 className="type-heading-xs mt-3">
                    <Link href={article.href} prefetch={false} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="type-body-sm mt-3 line-clamp-4">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterBand />

      <section className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
        <div className="page-wrap">
          <SectionHead>Projects</SectionHead>
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <div className="relative flex flex-col overflow-hidden bg-gold p-6 text-ink lg:col-span-5 lg:p-10">
              <h2 className="type-heading-md relative z-10">Explore FOSIS Projects</h2>
              <div className="relative z-10 mt-8">
                <ButtonLink href="/join-team-fosis/" variant="ink">
                  Explore Our Projects
                </ButtonLink>
              </div>
              <div aria-hidden="true" className="burst absolute inset-x-0 bottom-0 h-1/2" />
            </div>
            <ul className="lg:col-span-7">
              {PROJECTS.map((project) => (
                <li key={project.href} className="border-t border-ink last:border-b">
                  <Link
                    href={project.href}
                    prefetch={false}
                    className="type-heading-xs flex items-center justify-between gap-4 py-5 lg:py-6"
                  >
                    {project.label}
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <SectionHead>Contact</SectionHead>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <h2 className="type-heading-md max-w-[14ch] lg:col-span-5">Have a question or want to work with us?</h2>
            <ContactCard />
          </div>
        </div>
      </section>
    </main>
  );
}
