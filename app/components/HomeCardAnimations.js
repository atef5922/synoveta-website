"use client";

import { useEffect } from "react";

export default function HomeCardAnimations() {
  useEffect(() => {
    const cards = [...document.querySelectorAll("[data-card-reveal]")];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-revealed"));
      return undefined;
    }

    document.documentElement.classList.add("home-card-motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("home-card-motion-ready");
    };
  }, []);

  return null;
}
