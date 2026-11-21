import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { ARTICLES, formatArticleDate } from "@/lib/articles";

type Params = { year: string; month: string; day: string; slug: string };

// Only the articles in the list exist. Any other date path is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return ARTICLES.map((article) => {
    const [year, month, day] = article.date.split("-");
    return { year, month, day, slug: article.slug };
  });
}

function find({ year, month, day, slug }: Params) {
  return ARTICLES.findIndex((article) => article.href === `/${year}/${month}/${day}/${slug}/`);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const route = await params;
  const article = ARTICLES[find(route)];
  if (!article) return {};
  return {
    title: article.title,
    description: article.deck ?? article.excerpt,
    alternates: { canonical: article.href },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const route = await params;
  const index = find(route);
  if (index < 0) notFound();
  const article = ARTICLES[index];
  const source = await readFile(path.join(process.cwd(), "src/content/articles", `${article.slug}.md`), "utf8");
  const newer = ARTICLES[index - 1];
  const older = ARTICLES[index + 1];

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <article>
        <header className="bg-mist">
          <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-12 lg:pb-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
              <div className="flex flex-col lg:col-span-6">
                <div aria-hidden="true" className="rule" />
                <h1 className="type-heading-md mt-6 lg:mt-8">{article.title}</h1>
                {article.deck && <p className="type-body-lg mt-8 max-w-[28ch]">{article.deck}</p>}
                <p className="type-heading-xxs mt-auto flex flex-wrap gap-x-3 pt-12">
                  <Link href="/articles/" prefetch={false} className="underline-offset-4 hover:underline">
                    Articles
                  </Link>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt=""
                      role="presentation"
                      fill
                      priority
                      sizes="(min-width: 1200px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden ${article.tone}`}>
                      <div className="burst absolute inset-x-0 bottom-0 h-3/4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white">
          <div className="page-wrap">
            <div className="mx-auto max-w-[39rem] py-12 lg:py-20">
              <ArticleBody source={source} />
            </div>
          </div>
        </div>
      </article>

      <nav aria-label="More articles" className="bg-white pb-[6.25rem] md:pb-[7.5rem] lg:pb-[10rem]">
        <div className="page-wrap">
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-[var(--grid-gap)]">
            {older ? (
              <div className="border-t border-ink pt-4">
                <p className="type-label text-grey">Older article</p>
                <Link href={older.href} prefetch={false} className="type-heading-xxs mt-3 block underline-offset-4 hover:underline">
                  {older.title}
                </Link>
              </div>
            ) : (
              <div aria-hidden="true" className="hidden md:block" />
            )}
            {newer && (
              <div className="border-t border-ink pt-4">
                <p className="type-label text-grey">Newer article</p>
                <Link href={newer.href} prefetch={false} className="type-heading-xxs mt-3 block underline-offset-4 hover:underline">
                  {newer.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
