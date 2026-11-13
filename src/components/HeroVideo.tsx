"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.muted = true;
    element.play().catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      element.play().catch(() => setPlaying(false));
    } else {
      element.pause();
    }
  }

  return (
    <div className="relative aspect-square md:aspect-[5/3] lg:absolute lg:inset-0 lg:aspect-auto">
      <video
        ref={video}
        className="h-full w-full object-cover"
        poster="/video/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgb(0_0_0/0.78),rgb(0_0_0/0.35)_35%,transparent_65%)] lg:block" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute right-[var(--grid-margin)] bottom-5 z-10 lg:bottom-12 flex h-12 w-12 items-center justify-center border border-white bg-black/30 text-white transition-colors duration-300 hover:bg-white hover:text-ink"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          {playing ? <path d="M6 5h4v14H6zM14 5h4v14h-4z" /> : <path d="M7 4l13 8-13 8z" />}
        </svg>
      </button>
    </div>
  );
}
