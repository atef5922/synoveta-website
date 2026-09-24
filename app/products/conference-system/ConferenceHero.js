"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ConferenceHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (motion.matches || !visible || document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.1 });
    observer.observe(video);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      video.pause();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <section className="cs-cinema" aria-labelledby="cs-hero-title">
    <video ref={videoRef} className="cs-cinema-video" muted loop playsInline preload="metadata" poster="/Confeernce system/landing/hero-v3.webp" aria-hidden="true">
      <source src="/Confeernce system/conference_system_hero.mp4" type="video/mp4"/>
    </video>
    <div className="cs-cinema-shade"/>
    <div className="cs-container cs-cinema-inner">
      <div className="cs-cinema-copy">
        <h1 id="cs-hero-title">Clear Communication.<br/>Smarter Meetings.</h1>
        <div className="cs-cinema-actions">
          <a className="cs-cinema-primary" href="#conference-series">Explore Conference Systems</a>
          <Link className="cs-cinema-secondary" href="/contact/">Discuss Your Project</Link>
        </div>
      </div>
    </div>
  </section>;
}
