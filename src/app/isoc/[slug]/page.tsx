import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink, SectionHead } from "@/components/ui";
import { findIsoc, ISOCS } from "@/lib/isocs";

type Params = { slug: string };

// Only the affiliated ISocs in the directory exist. Any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return ISOCS.map((isoc) => ({ slug: isoc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const isoc = findIsoc(slug);
  if (!isoc) return {};
  return {
    title: isoc.name,
    description: `${isoc.name} at ${isoc.institution}, an ISoc affiliated with FOSIS.`,
    alternates: { canonical: `/isoc/${isoc.slug}/` },
  };
}

export default async function IsocProfile({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const isoc = findIsoc(slug);
  if (!isoc) notFound();

  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section className="bg-mist">
        <div className="page-wrap pt-[calc(var(--nav-height)+3.75rem)] pb-12 lg:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <div className="lg:col-span-8">
              <h1 className="type-heading-lg">{isoc.name}</h1>
              <p className="type-body-lg mt-8">{isoc.institution}</p>
            </div>
            {isoc.logo && (
              <div className="relative size-40 overflow-hidden bg-white lg:col-span-3 lg:col-start-10 lg:size-64">
                <Image
                  src={isoc.logo}
                  alt={`${isoc.name} logo`}
                  fill
                  sizes="(min-width: 1200px) 16rem, 10rem"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
            <dl className="lg:col-span-5">
              <div className="border-t border-ink py-5">
                <dt className="type-label">Region</dt>
                <dd className="type-heading-xs mt-2">{isoc.region || isoc.group}</dd>
              </div>
              <div className="border-t border-ink py-5">
                <dt className="type-label">Institution</dt>
                <dd className="type-heading-xs mt-2">{isoc.institution}</dd>
              </div>
            </dl>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHead>Find Them Online</SectionHead>
              {isoc.links.length > 0 ? (
                <ul className="flex flex-col">
                  {isoc.links.map((link) => (
                    <li key={link.href} className="border-t border-ink py-4 last:border-b">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-heading-xs underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="type-body-md">This society has no public links listed yet.</p>
              )}
              <div className="mt-8">
                <ButtonLink href="/find-your-isoc/" variant="outline-ink">
                  All ISocs
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="page-wrap py-[3.75rem] md:py-20 lg:py-[7.5rem]">
          <h2 className="type-heading-lg max-w-[16ch]">Is your ISoc not listed here?</h2>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-12">
            <ButtonLink href="/isoc-affiliations/" variant="navy">
              Affiliate Your ISoc
            </ButtonLink>
            <ButtonLink href="/contact-us/" variant="outline-ink">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
