import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Renders the small Markdown subset used by the article sources in
 * `src/content/articles`: paragraphs, ## and ### headings, bullet lists,
 * standalone images, **bold**, *italic* and [links](url).
 */

const SITE_ORIGIN = "https://fosis.org.uk";
const INLINE = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|\[((?:[^[\]]|\[[^\]]*\])*)\]\(([^)\s]+)\)/;

function Link({ href, children }: { href: string; children: ReactNode }) {
  const internal = href.startsWith(SITE_ORIGIN) ? href.slice(SITE_ORIGIN.length) || "/" : null;
  if (internal) {
    return (
      <a href={internal} className="underline underline-offset-4">
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="break-words underline underline-offset-4">
      {children}
    </a>
  );
}

function inline(text: string, key = "i"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  let index = 0;
  while (rest) {
    const match = INLINE.exec(rest);
    if (!match) {
      nodes.push(rest);
      break;
    }
    if (match.index > 0) nodes.push(rest.slice(0, match.index));
    const id = `${key}-${index++}`;
    const [, boldItalic, bold, italic, linkText, linkHref] = match;
    if (boldItalic !== undefined) {
      nodes.push(
        <strong key={id}>
          <em>{inline(boldItalic, id)}</em>
        </strong>,
      );
    } else if (bold !== undefined) {
      nodes.push(<strong key={id}>{inline(bold, id)}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={id}>{inline(italic, id)}</em>);
    } else {
      nodes.push(
        <Link key={id} href={linkHref}>
          {inline(linkText, id)}
        </Link>,
      );
    }
    rest = rest.slice(match.index + match[0].length);
  }
  return nodes;
}

const plain = (text: string) => text.replace(/\*/g, "").trim();

/** A short quoted line with an attribution, or a paragraph set entirely in bold italic. */
function isPullQuote(block: string): boolean {
  if (/^\*\*\*.+\*\*\*$/.test(block)) return true;
  return block.length < 220 && /^“[^”]+” \u2013 .+$/.test(block);
}

function Figure({ block }: { block: string }) {
  const match = /^!\[(.*)\]\((\S+?)\)$/.exec(block);
  if (!match) return null;
  const [, alt, src] = match;
  const size = /_(\d+)x(\d+)\.\w+$/.exec(src);
  const width = size ? Number(size[1]) : 1200;
  const height = size ? Number(size[2]) : 800;
  return (
    <figure className="my-10 lg:my-14">
      <Image
        src={src}
        alt={alt}
        {...(alt ? {} : { role: "presentation" })}
        width={width}
        height={height}
        sizes="(min-width: 1200px) 40rem, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}

export function ArticleBody({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/);
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, position) => {
        const key = `b-${position}`;
        if (block.startsWith("![")) return <Figure key={key} block={block} />;
        if (block.startsWith("## ")) {
          return (
            <h2 key={key} className="type-heading-xs mt-8 lg:mt-12">
              {plain(block.slice(3))}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={key} className="type-heading-xxs mt-6 lg:mt-8">
              {plain(block.slice(4))}
            </h3>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={key} className="flex list-disc flex-col gap-4 pl-6 type-body-md">
              {block.split("\n").map((item, row) => (
                <li key={`${key}-${row}`}>{inline(item.replace(/^- /, ""), `${key}-${row}`)}</li>
              ))}
            </ul>
          );
        }
        if (isPullQuote(block)) {
          return (
            <blockquote key={key} className="type-heading-xs my-6 border-y border-ink py-8 lg:my-10">
              {inline(block.replace(/^\*\*\*(.+)\*\*\*$/, "$1"), key)}
            </blockquote>
          );
        }
        return (
          <p key={key} className="type-body-md">
            {inline(block.replace(/\n/g, " "), key)}
          </p>
        );
      })}
    </div>
  );
}
