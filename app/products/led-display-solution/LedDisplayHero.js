"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function LedDisplayHero() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (motion.matches || !visible || document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.1 });
    observer.observe(video);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => { observer.disconnect(); video.pause(); motion.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); };
  }, []);
  return (
    <section className="led-cinema" aria-labelledby="led-hero-title">
      <video ref={videoRef} className="led-cinema-video" muted loop playsInline preload="none" poster="/LED-Display/hero_video/led-display-poster.jpg" aria-hidden="true">
        <source src="/LED-Display/hero_video/led-display-hero.mp4" type="video/mp4" />
      </video>
      <div className="led-cinema-shade" />
      <div className="container led-cinema-inner">
        <div className="led-cinema-copy">
          <h1 id="led-hero-title">Make Every Space Unmissable<br />with LED Displays</h1>
          <div className="led-cinema-actions">
            <a className="led-cinema-primary" href="#led-series">Find your display solution</a>
            <Link className="led-cinema-secondary" href="/contact/">Discuss your project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
