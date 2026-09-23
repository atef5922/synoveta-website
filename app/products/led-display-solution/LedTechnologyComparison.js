import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3X3, Sun, Layers, Gem, Building2, Monitor } from "lucide-react";

const technologies = [
  {
    slug: "svl-series", name: "SVL", label: "SMD (SVL Series)",
    title: <>Proven Versatility<br/>for Every Environment</>,
    description: "SMD technology delivers exceptional flexibility, with a wide pixel-pitch range and reliable performance for both indoor and outdoor applications.",
    image: "/LED-Display/smd-comparison.webp",
    alt: "SMD LED display cabinet, front and rear views",
    motto: <>Flexible<br/>Reliable<br/>Worldwide</>,
    features: [
      { Icon: Grid3X3, text: <>Wide pixel-pitch range<br/>(P1.25 – P10)</> },
      { Icon: Sun, text: <>Indoor &amp; outdoor applications</> },
      { Icon: Layers, text: <>Strong versatility<br/>for diverse projects</> },
    ],
  },
  {
    slug: "svlc-series", name: "SVLC", label: "Flip-Chip COB (SVLC Series)",
    title: <>Ultra-Fine Clarity<br/>for Premium Spaces</>,
    description: "Flip-Chip COB technology delivers superior close-view performance, ultra-fine pixel pitch and outstanding visual quality for premium indoor environments.",
    image: "/LED-Display/cob-comparison.webp",
    alt: "Flip-chip COB LED display cabinet, front and rear views",
    motto: <>Higher<br/>Definition<br/>Brighter<br/>Possibilities</>,
    features: [
      { Icon: Gem, text: <>Ultra-fine pixel pitch<br/>(P1.25 – P1.86)</> },
      { Icon: Building2, text: <>Premium indoor applications</> },
      { Icon: Monitor, text: <>Superior close-view<br/>performance</> },
    ],
  },
];

export default function LedTechnologyComparison() {
  return (
    <section className="led-comparison" id="led-technology-comparison" aria-labelledby="led-comparison-title">
      <div className="container">
        <header className="led-comparison-heading">
          <p>Technology comparison</p>
          <h2 id="led-comparison-title">SMD vs COB</h2>
          <div>Two advanced technologies. Different strengths. A wider range of possibilities.</div>
        </header>
        <div className="led-comparison-grid">
          {technologies.map(({ slug, name, label, title, description, image, alt, motto, features }) => (
            <article className={`led-comparison-card led-comparison-${name.toLowerCase()}`} key={slug} aria-labelledby={`${slug}-comparison-title`}>
              <div className="led-comparison-visual"><Image src={image} alt={alt} fill sizes="(max-width: 600px) 48vw, (max-width: 1000px) 45vw, 25vw" /></div>
              <span className="led-comparison-motto" aria-hidden="true">{motto}</span>
              <div className="led-comparison-copy">
                <p className="led-comparison-kicker">{label}</p>
                <h3 id={`${slug}-comparison-title`}>{title}</h3>
                <p className="led-comparison-description">{description}</p>
                <ul className="led-comparison-features">{features.map(({ Icon, text }, index) => <li key={index}><Icon aria-hidden="true"/><span>{text}</span></li>)}</ul>
                <Link className="led-platform-button" href={`/products/led-display-solution/${slug}/`}>Explore {name} Series <ArrowRight aria-hidden="true"/></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
