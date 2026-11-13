"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui";

export function DonatePill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const hero = document.querySelector("[data-hero]");
      setVisible(hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 400);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Link
      href="/support-us/"
      prefetch={false}
      aria-label="Support FOSIS"
      className={`btn btn-ink type-cta fixed right-5 bottom-5 z-40 shadow-lg transition-opacity ${visible ? "opacity-100" : "invisible opacity-0"}`}
    >
      Support Us
      <ArrowIcon />
    </Link>
  );
}
