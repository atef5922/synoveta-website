"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HomeVideoHero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const header = document.querySelector("header.header");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (motion.matches || !visible || document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    const updateHeight = () => {
      if (header) section.style.setProperty("--home-header-height", `${header.getBoundingClientRect().height}px`);
    };
    const resize = new ResizeObserver(updateHeight);
    if (header) resize.observe(header);
    updateHeight();
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .1 });
    observer.observe(section);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      video.pause();
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <section ref={sectionRef} className="home-cinema" aria-labelledby="home-hero-title">
    <video ref={videoRef} className="home-cinema-video" muted loop playsInline preload="metadata" poster="/Home page/hero/home-hero-poster.jpg" aria-hidden="true">
      <source src="/Home page/hero/home page video.mp4" type="video/mp4"/>
    </video>
    <div className="home-cinema-shade"/>
    <div className="home-cinema-inner">
      <div className="home-cinema-copy">
        <h1 id="home-hero-title">Intelligent Technology.<br/>Connected Possibilities.</h1>
        <div className="home-cinema-actions">
          <a className="home-cinema-primary" href="#products">Explore Our Solutions</a>
          <Link className="home-cinema-secondary" href="/contact/">Discuss Your Project</Link>
        </div>
      </div>
    </div>
  </section>;
}
