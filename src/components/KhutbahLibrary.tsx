"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import packs from "@/content/khutbahs.json";

type Part = { kind: string; text: string };
type Khutbah = { n: number; title: string; first: Part[]; second: Part[] };
type Pack = { id: string; theme: string; khutbahs: Khutbah[] };

const PACKS: Pack[] = packs;
const ALL = "all";

const OPENING = [
  { src: "/khutbah/open-1.png", width: 957, height: 422 },
  { src: "/khutbah/open-2.png", width: 955, height: 351 },
  { src: "/khutbah/open-3.png", width: 961, height: 130 },
  { src: "/khutbah/open-4.png", width: 961, height: 344 },
  { src: "/khutbah/open-5.png", width: 961, height: 314 },
];

const DUAS = [
  "اللّٰهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً، وَفِي الآخِرَةِ حَسَنَةً، وَقِنَا عَذَابَ النَّار",
  "اللّٰهُمَّ إِنَّا نَسْأَلُكَ الْجَنَّةَ وَنَعُوذُ بِكَ مِنَ النَّار",
  "اللّٰهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِين، وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِين",
  "اللّٰهُمَّ انْصُرْ دِينَكَ وَكِتَابَكَ وَسُنَّةَ نَبِيِّكَ وَعِبَادَكَ الْمُؤْمِنِين",
  "اللّٰهُمَّ انْصُرْ إِخْوَانَنَا الْمُسْتَضْعَفِينَ فِي كُلِّ مَكَان",
];

const FLAT = PACKS.flatMap((pack) => pack.khutbahs.map((khutbah) => ({ pack, khutbah })));
const SIZES = [1, 1.125, 1.25, 1.5, 1.75];

type ArabicImage = { src: string; width: number; height: number };

function ArabicImages({ images, label }: { images: ArabicImage[]; label: string }) {
  return (
    <details className="faq-item group border-y border-ink">
      <summary className="type-heading-xxs cursor-pointer list-none py-4 [&::-webkit-details-marker]:hidden">
        {label}
        <span aria-hidden="true" className="ml-3 inline-block transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="flex flex-col items-center gap-2 py-4">
        {images.map((image, position) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${label}, Arabic text, image ${position + 1} of ${images.length}`}
            width={image.width}
            height={image.height}
            className="h-auto w-full max-w-3xl"
          />
        ))}
      </div>
    </details>
  );
}

function Parts({ parts }: { parts: Part[] }) {
  return (
    <div className="flex flex-col gap-4">
      {parts.map((part, index) =>
        part.kind === "arabic" ? (
          <p key={index} lang="ar" dir="rtl" className="font-arabic text-[1.6em] leading-[1.9]">
            {part.text}
          </p>
        ) : part.kind === "quote" ? (
          <p key={index} className="border-l-4 border-ink pl-4 italic">
            {part.text}
          </p>
        ) : (
          <p key={index} className="text-pretty">
            {part.text}
          </p>
        ),
      )}
    </div>
  );
}

function Reader({ index, onSelect, onClose }: { index: number; onSelect: (index: number) => void; onClose: () => void }) {
  const [size, setSize] = useState(1);
  const { pack, khutbah } = FLAT[index];
  const heading = useRef<HTMLHeadingElement>(null);

  // Each khutbah opens at its own title, however far the previous one was scrolled.
  useEffect(() => {
    heading.current?.focus();
  }, [index]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink pb-4">
        <button type="button" onClick={onClose} className="arrow-link">
          ‹ Library
        </button>
        <div className="flex gap-2" role="group" aria-label="Text size">
          <button
            type="button"
            title="Smaller text"
            aria-label="Smaller text"
            disabled={size === 0}
            onClick={() => setSize((value) => Math.max(0, value - 1))}
            className="btn btn-outline-ink !px-4 disabled:opacity-40"
          >
            A−
          </button>
          <button
            type="button"
            title="Larger text"
            aria-label="Larger text"
            disabled={size === SIZES.length - 1}
            onClick={() => setSize((value) => Math.min(SIZES.length - 1, value + 1))}
            className="btn btn-outline-ink !px-4 disabled:opacity-40"
          >
            A+
          </button>
        </div>
      </div>

      <p className="type-label mt-8">
        Pack {pack.id} • Khutbah {khutbah.n}
      </p>
      <h2
        ref={heading}
        tabIndex={-1}
        className="type-heading-md mt-3 max-w-[20ch] scroll-mt-[calc(var(--nav-height)+1rem)] outline-none"
      >
        {khutbah.title}
      </h2>
      <p className="type-body-md mt-2 text-grey">{pack.theme}</p>

      <div className="mt-10 flex flex-col gap-10 lg:max-w-3xl" style={{ fontSize: `${SIZES[size]}rem`, lineHeight: 1.7 }}>
        <ArabicImages images={OPENING} label="Opening • Standardised Arabic opening" />
        <section aria-labelledby="first-khutbah">
          <h3 id="first-khutbah" className="type-heading-xs mb-4">
            First Khutbah • English
          </h3>
          <Parts parts={khutbah.first} />
        </section>
        <ArabicImages images={[{ src: "/khutbah/close-1.png", width: 948, height: 197 }]} label="Closing of the first part (Arabic)" />
        <div className="bg-gold p-6 text-ink">
          <p className="type-heading-xs">⏸ Pause: the Khateeb sits briefly</p>
          <p className="mt-2">A short sitting separates the two khutbahs. The Khateeb then stands for the second part.</p>
        </div>
        <ArabicImages images={[{ src: "/khutbah/open-second.png", width: 957, height: 211 }]} label="Opening • Standardised Arabic (second part)" />
        <section aria-labelledby="second-khutbah">
          <h3 id="second-khutbah" className="type-heading-xs mb-4">
            Second Khutbah • English
          </h3>
          <Parts parts={khutbah.second} />
        </section>
        <section aria-labelledby="closing-duas">
          <h3 id="closing-duas" className="type-heading-xs mb-4">
            Closing Du’as
          </h3>
          <Image
            src="/khutbah/dua-heading.png"
            alt="Arabic closing dua opening"
            width={963}
            height={427}
            className="mb-4 h-auto w-full max-w-3xl"
          />
          <ul className="flex flex-col gap-3">
            {DUAS.map((dua) => (
              <li key={dua} lang="ar" dir="rtl" className="font-arabic text-[1.6em] leading-[1.9]">
                {dua}
              </li>
            ))}
          </ul>
        </section>
        <p className="type-body-sm border-t border-ink pt-4 text-grey">
          Handle khutbah text with care, it contains the Names of Allah and Qur’anic Ayat.
        </p>
      </div>

      <nav aria-label="Khutbah navigation" className="mt-12 flex justify-between gap-4">
        <button type="button" disabled={index === 0} onClick={() => onSelect(index - 1)} className="btn btn-outline-ink disabled:opacity-40">
          ‹ Previous
        </button>
        <button
          type="button"
          disabled={index === FLAT.length - 1}
          onClick={() => onSelect(index + 1)}
          className="btn btn-outline-ink disabled:opacity-40"
        >
          Next ›
        </button>
      </nav>
    </div>
  );
}

/** Search, filter and read all 36 Friday khutbahs. Text and Arabic passages come from the old FOSIS khutbah app. */
export function KhutbahLibrary() {
  const [packId, setPackId] = useState(ALL);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(null);
  const [lastOpened, setLastOpened] = useState<number | null>(null);

  // Closing the reader puts focus back on the card that opened it.
  useEffect(() => {
    if (open === null && lastOpened !== null) document.getElementById(`khutbah-card-${lastOpened}`)?.focus();
  }, [open, lastOpened]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return FLAT.map((entry, index) => ({ ...entry, index })).filter(
      ({ pack, khutbah }) =>
        (packId === ALL || pack.id === packId) &&
        (needle === "" ||
          `${khutbah.title} ${pack.theme} ${khutbah.first.map((part) => part.text).join(" ")} ${khutbah.second.map((part) => part.text).join(" ")}`
            .toLowerCase()
            .includes(needle)),
    );
  }, [packId, query]);

  if (open !== null) {
    return (
      <Reader
        index={open}
        onSelect={(next) => {
          setLastOpened(next);
          setOpen(next);
        }}
        onClose={() => setOpen(null)}
      />
    );
  }

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-[var(--grid-gap)]">
        <div className="relative border-b border-ink shadow-[0_1px_0_0_transparent] transition-shadow focus-within:shadow-[0_2px_0_0_#000] hover:shadow-[0_1px_0_0_#000] lg:col-span-5 lg:self-start">
          <label htmlFor="khutbah-search" className="type-label block pt-2">
            Search khutbahs
          </label>
          <input
            id="khutbah-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. patience, Qur'an, charity"
            className="type-heading-xxs w-full bg-transparent py-3 placeholder:text-grey"
          />
        </div>
        <fieldset className="lg:col-span-7">
          <legend className="type-label mb-3">Filter by pack</legend>
          <div className="flex flex-wrap gap-2">
            {[{ id: ALL, label: "All packs" }, ...PACKS.map((pack) => ({ id: pack.id, label: `Pack ${pack.id} • ${pack.theme}` }))].map((chip) => (
              <button
                key={chip.id}
                type="button"
                aria-pressed={packId === chip.id}
                onClick={() => setPackId(chip.id)}
                className={`type-cta border border-ink px-4 py-3 text-left transition-colors ${packId === chip.id ? "bg-ink text-white" : "hover:bg-ink hover:text-white"}`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {results.length === 0 ? (
        <p role="status" className="type-body-md mt-10">
          No khutbahs match “{query}”.
        </p>
      ) : (
        <ul className="mt-10 grid gap-x-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3">
          {results.map(({ pack, khutbah, index }) => (
            <li key={`${pack.id}-${khutbah.n}`} className="border-t border-ink">
              <button
                id={`khutbah-card-${index}`}
                type="button"
                onClick={() => {
                  setLastOpened(index);
                  setOpen(index);
                }}
                className="group flex w-full flex-col gap-2 py-5 text-left"
              >
                <span className="type-label text-grey">
                  Pack {pack.id} • Khutbah {khutbah.n}
                </span>
                <span className="type-heading-xs group-hover:underline underline-offset-4">{khutbah.title}</span>
                <span className="type-body-sm text-grey">Two parts • standardised Arabic + English</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
