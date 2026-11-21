"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";

type Block = { title: string; subtitle?: string; note?: string; items: string[] };

const BEFORE: Block = {
  title: "In the days leading up",
  subtitle: "Small steps to soften the heart before the day arrives.",
  items: [
    "Seek forgiveness and tawbah for sins that you have committed",
    "Message people you may have wronged asking for their forgiveness",
    "Make sincere dua that Allah allows you to make the most of this day",
    "Make a dua list, include every little thing you want, so nothing is forgotten",
  ],
};

const TIMETABLE: Block[] = [
  {
    title: "The night before",
    subtitle: "Isha → Fajr",
    items: ["Pray Isha and go straight to sleep", "Wake up for Tahajjud", "Suhoor if you will be fasting"],
  },
  {
    title: "Fajr to Zuhr",
    subtitle: "Dawn → Midday",
    items: [
      "Pray Fajr",
      "Adhkar and takbeerat after Fajr",
      "Morning adhkar",
      "Recite Qur'an",
      "Stay awake until sunrise if possible",
      "Pray 4 rakah of salat at Duha",
      "Pray Zuhr",
      "Adhkar and takbeerat after Zuhr",
      "Donate to charity (see Useful Links)",
    ],
  },
  {
    title: "Zuhr to Maghrib",
    subtitle: "Midday → Sunset",
    note: "Between Zuhr and Maghrib is a time of great acceptance, make dua for everything you want.",
    items: [
      "Make dua for everything you want (time of great acceptance)",
      "Alternate between acts of worship",
      "Pray Asr",
      "Adhkar and takbeerat after Asr",
      "Evening adhkar",
      "Intensify dua in the final hour before Maghrib",
    ],
  },
  {
    title: "Maghrib & beyond",
    subtitle: "Sunset onward",
    items: [
      "Break your fast with sincerity and gratitude",
      "Pray Maghrib",
      "Adhkar and takbeerat after Maghrib",
      "Pray Isha",
      "Reflect on the day, thank Allah, and rest",
    ],
  },
];

const STORAGE_KEY = "fosis-arafat-v1";
const CHANGE_EVENT = "fosis-arafat-change";

type Saved = { done: string[]; todos: string[] };
const EMPTY: Saved = { done: [], todos: [] };

/** Latest value written this visit. It keeps the page working when storage is blocked, and is dropped when another tab writes. */
let latest: string | null | undefined;

function subscribe(callback: () => void) {
  const onStorage = () => {
    latest = undefined;
    callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function readRaw(): string | null {
  if (latest !== undefined) return latest;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function strings(value: unknown): string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string") ? value : [];
}

function useSaved(): [Saved, (next: Saved) => void] {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const saved = useMemo<Saved>(() => {
    if (!raw) return EMPTY;
    try {
      const parsed: unknown = JSON.parse(raw);
      if (typeof parsed !== "object" || parsed === null) return EMPTY;
      const { done, todos } = parsed as Record<string, unknown>;
      return { done: strings(done), todos: strings(todos) };
    } catch {
      return EMPTY;
    }
  }, [raw]);
  const save = useCallback((next: Saved) => {
    latest = JSON.stringify(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, latest);
    } catch {
      /* storage blocked: the in-memory value above still drives this visit */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
  return [saved, save];
}

function Checkbox({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <li className="border-t border-ink first:border-t-0">
      <label className="flex cursor-pointer items-start gap-4 py-3">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="mt-1 size-5 shrink-0 appearance-none border border-ink checked:bg-ink"
        />
        <span className={checked ? "text-grey line-through" : ""}>{label}</span>
      </label>
    </li>
  );
}

/** The interactive half of the Day of Arafat guide: a sticky progress bar, the preparation list, a to-do list and the timetable. Ticks persist in this browser only. */
export function ArafatPlanner() {
  const [saved, save] = useSaved();
  const [draft, setDraft] = useState("");

  const todoIds = saved.todos.map((_, index) => `todo-${index}`);
  const fixedIds = [BEFORE, ...TIMETABLE].flatMap((block) => block.items.map((item) => `${block.title}::${item}`));
  const total = fixedIds.length + todoIds.length;
  const done = [...fixedIds, ...todoIds].filter((id) => saved.done.includes(id)).length;

  function toggle(id: string) {
    save({ ...saved, done: saved.done.includes(id) ? saved.done.filter((item) => item !== id) : [...saved.done, id] });
  }

  function addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    save({ ...saved, todos: [...saved.todos, text] });
    setDraft("");
  }

  function renderBlock(block: Block) {
    return (
      <div key={block.title} className="border-t-[8px] border-ink pt-4 lg:border-t-[12px]">
        <h3 className="type-heading-sm">{block.title}</h3>
        {block.subtitle && <p className="type-label mt-2">{block.subtitle}</p>}
        {block.note && <p className="type-body-sm mt-3">{block.note}</p>}
        <ul className="type-body-md mt-4">
          {block.items.map((item) => {
            const id = `${block.title}::${item}`;
            return <Checkbox key={id} id={id} label={item} checked={saved.done.includes(id)} onChange={() => toggle(id)} />;
          })}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-[var(--nav-height)] z-30 border-b border-ink bg-white">
        <div className="page-wrap flex items-center gap-4 py-3">
          <p className="type-label">Your day</p>
          <progress
            max={Math.max(total, 1)}
            value={done}
            aria-label="Your day progress"
            className="h-2 flex-1 appearance-none [&::-moz-progress-bar]:bg-ink [&::-webkit-progress-bar]:bg-mist [&::-webkit-progress-value]:bg-ink"
          />
          <p aria-live="polite" className="type-label tabular-nums">
            {done} / {total}
          </p>
          <button
            type="button"
            title="Reset all checkboxes"
            onClick={() => save({ ...saved, done: [] })}
            className="type-label border border-ink px-3 py-2 hover:bg-ink hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>

      <section className="section bg-white">
        <div className="page-wrap">
          <SectionLabel title="Preparing for the Day" />
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-2">
            {renderBlock(BEFORE)}
            <div className="border-t-[8px] border-ink pt-4 lg:border-t-[12px]">
              <h3 className="type-heading-sm">Clear the deck</h3>
              <p className="type-body-sm mt-3">
                Complete any outstanding tasks so you are not burdened with them during the day of Arafat.
              </p>
              <ul className="type-body-md mt-4">
                {saved.todos.map((todo, index) => (
                  <Checkbox
                    key={`${todo}-${index}`}
                    id={`todo-${index}`}
                    label={todo}
                    checked={saved.done.includes(`todo-${index}`)}
                    onChange={() => toggle(`todo-${index}`)}
                  />
                ))}
              </ul>
              <form onSubmit={addTodo} className="mt-4 flex gap-3">
                <label htmlFor="arafat-todo" className="sr-only">
                  Add an outstanding to-do
                </label>
                <input
                  id="arafat-todo"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Add outstanding to-do…"
                  className="type-body-md min-w-0 flex-1 border-b border-ink bg-transparent py-2"
                />
                <button type="submit" className="btn btn-outline-ink">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="page-wrap">
          <SectionLabel title="A Suggested Timetable" />
          <div className="grid gap-[var(--grid-gap)] md:grid-cols-2">{TIMETABLE.map(renderBlock)}</div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="mb-10 lg:mb-16">
      <h2 className="type-heading-lg">{title}</h2>
    </div>
  );
}
