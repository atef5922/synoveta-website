"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SvlcUseCases({
  items,
  kicker = "Designed for professional environments",
  title = "Use Cases",
  description = "Fine-pitch COB display experiences for spaces where detail, scale and visual impact matter.",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`svlc-use-cases${isVisible ? " is-visible" : ""}`}>
      <div className="container svlc-use-cases-heading">
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="svlc-use-cases-grid">
        {items.map((item, index) => (
          <article className={`svlc-use-case svlc-use-case-${index + 1}`} key={item.title}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw"/>
            <div className="svlc-use-case-shade"/>
            <div className="svlc-use-case-copy"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
