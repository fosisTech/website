import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
import { ARTICLES, formatArticleDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  alternates: { canonical: "/articles/" },
};

export default function Articles() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="bg-white">
        <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-12 lg:pb-16">
          <h1 className="type-heading-xl">All Articles</h1>
          <p className="type-body-lg mt-8 max-w-[34ch] lg:mt-12">
            The latest from FOSIS, perspectives on Muslim student life, advocacy, careers, and community.
          </p>
        </div>
      </section>

      <section className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
        <div className="page-wrap">
          <div className="grid gap-x-[var(--grid-gap)] gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {ARTICLES.map((article) => {
              return (
                <article key={article.href} className="group relative flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt=""
                        role="presentation"
                        fill
                        sizes="(min-width: 1200px) 30vw, (min-width: 680px) 45vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div aria-hidden="true" className={`absolute inset-0 overflow-hidden ${article.tone}`}>
                        <div className="burst absolute inset-x-0 bottom-0 h-3/4" />
                      </div>
                    )}
                  </div>
                  <p className="type-label mt-5 flex gap-3 text-grey">
                    <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                    <span>{article.readTime}</span>
                  </p>
                  <h2 className="type-heading-xs mt-3">
                    <Link href={article.href} prefetch={false} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="type-body-sm mt-3 line-clamp-4">{article.excerpt}</p>
                  <p aria-hidden="true" className="arrow-link mt-5 self-start">
                    Read More
                    <ArrowIcon />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="page-wrap py-[3.75rem] md:py-20 lg:py-[7.5rem]">
          <p className="type-label">Stay Informed</p>
          <h2 className="type-heading-lg mt-4 max-w-[18ch]">Follow FOSIS for the latest updates.</h2>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-12">
            <a
              href="https://www.instagram.com/fosischannel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy"
            >
              Instagram
              <ArrowIcon />
            </a>
            <Link href="/contact-us/" prefetch={false} className="btn btn-outline-ink">
              Contact Us
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
