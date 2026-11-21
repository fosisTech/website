"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import { ArrowIcon } from "@/components/ui";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function DesktopNav({ solid }: { solid: boolean }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    function close(event: Event) {
      if (event instanceof KeyboardEvent && event.key !== "Escape") return;
      if (event instanceof MouseEvent && nav.current?.contains(event.target as Node)) return;
      setOpenLabel(null);
    }
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <nav ref={nav} aria-label="Primary Navigation" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-10">
        {NAV_ITEMS.map((item) => {
          const open = openLabel === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenLabel(item.label)}
              onMouseLeave={() => item.children && setOpenLabel(null)}
            >
              <Link
                href={item.href}
                prefetch={false}
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? open : undefined}
                onClick={(event) => {
                  if (!item.children) return;
                  if (item.href === "#") event.preventDefault();
                  setOpenLabel(item.label);
                }}
                className={`type-nav inline-flex items-center gap-1 whitespace-nowrap ${item.label === "Support Us" ? `px-5 py-3 transition-colors duration-300 ${solid ? "bg-navy text-white hover:bg-ink" : "bg-white text-ink hover:bg-navy hover:text-white"}` : "py-3"}`}
              >
                {item.label}
                {item.children && <Chevron open={open} />}
              </Link>
              {item.children && (
                <ul className={`absolute left-0 top-full min-w-64 bg-white py-3 text-ink shadow-lg ${open ? "block" : "hidden"}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} prefetch={false} className="type-nav block whitespace-nowrap px-5 py-3 hover:bg-paper">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    dialog.current?.querySelector<HTMLElement>("[data-close]")?.focus();
  }, [open]);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const items = Array.from(dialog.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
      (item) => item.offsetParent !== null,
    );
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      onKeyDown={onKeyDown}
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy text-white duration-300 lg:hidden ${open ? "visible opacity-100 transition-opacity" : "invisible opacity-0 transition-[opacity,visibility]"}`}
    >
      <div className="page-wrap flex h-[var(--nav-height)] shrink-0 items-center justify-between">
        <Image src="/images/fosis-logo.png" alt="FOSIS" width={512} height={464} className="h-14 w-auto" />
        <button
          type="button"
          data-close
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-12 w-12 items-center justify-center border border-white"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
      <nav aria-label="Mobile Navigation" className="page-wrap flex-1 py-6">
        <ul>
          {NAV_ITEMS.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <li key={item.label} className="border-b border-white/20">
                <Link
                  href={item.href}
                  prefetch={false}
                  aria-expanded={item.children ? isOpen : undefined}
                  onClick={(event) => {
                    if (item.children) {
                      if (item.href === "#") event.preventDefault();
                      setExpanded(isOpen ? null : item.label);
                    } else {
                      onClose();
                    }
                  }}
                  className="type-heading-xs flex items-center justify-between py-4"
                >
                  {item.label}
                  {item.children && <Chevron open={isOpen} />}
                </Link>
                {item.children && isOpen && (
                  <ul className="pb-4 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} prefetch={false} onClick={onClose} className="type-body-md block py-2">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="page-wrap shrink-0 pb-8">
        <Link href="/isoc-affiliations/" prefetch={false} onClick={onClose} className="btn btn-white w-full justify-center">
          Affiliate Your ISoc
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const opener = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 8);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    opener.current?.focus();
  }, []);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-300 ${solid ? "bg-white text-ink shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]" : "bg-transparent text-white lg:bg-gradient-to-b lg:from-black/40 lg:to-transparent"}`}
    >
      <div className="page-wrap flex h-[var(--nav-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="FOSIS home" className="shrink-0">
          <span
            role="img"
            aria-label="FOSIS"
            className={`block aspect-[512/464] h-14 transition-colors duration-300 lg:h-16 ${solid ? "bg-navy" : "bg-white"}`}
            style={{
              WebkitMaskImage: "url(/images/fosis-logo.png)",
              maskImage: "url(/images/fosis-logo.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </Link>
        <DesktopNav solid={solid} />
        <button
          ref={opener}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          className="flex h-12 w-12 items-center justify-center border border-current lg:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      <MobileDrawer open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
