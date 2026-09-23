"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SvlcOfficeShowcase({
  image,
  alt = "SVLC COB LED display installed in a modern office",
  kicker = "Premium visual experience",
  title = "Large-format impact for modern interiors",
  copy = "Vivid colour, fine detail and a near-seamless canvas make the SVLC Series a strong fit for executive meeting rooms, experience centres and corporate communication spaces.",
  tags = ["Fine detail", "Seamless scale", "Indoor ready"],
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
      { threshold: 0.18, rootMargin: "0px 0px -40px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`svlc-office svlc-office-motion${isVisible ? " is-visible" : ""}`}
    >
      <div className="svlc-office-image">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
      <div className="svlc-office-copy">
        <p className="svlc-kicker">{kicker}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </section>
  );
}
