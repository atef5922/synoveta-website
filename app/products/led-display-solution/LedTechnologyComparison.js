import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Grid3X3, Sun, Layers, Gem, Building2, Monitor } from "lucide-react";

const technologies = [
  {
    slug: "svl-series", name: "SVL", label: "SMD (SVL Series)",
    title: <>Choose SMD<br/>for Greater Flexibility</>,
    description: "Consider SVL when your project needs a choice of installation environments and viewing distances. Select the configuration around the scale of your space.",
    image: "/LED-Display/smd-comparison.webp",
    alt: "SMD LED display cabinet, front and rear views",
    motto: <>Flexible<br/>Reliable<br/>Worldwide</>,
    features: [
      { Icon: Grid3X3, text: <>Choose pitch around<br/>viewing distance</> },
      { Icon: Sun, text: <>Match the model to<br/>indoor or outdoor use</> },
      { Icon: Layers, text: <>Plan around screen size<br/>and placement</> },
    ],
  },
  {
    slug: "svlc-series", name: "SVLC", label: "Flip-Chip COB (SVLC Series)",
    title: <>Choose COB<br/>for Close-Up Detail</>,
    description: "Consider SVLC for indoor spaces where people view the screen up close. Start with the smallest text and finest details your audience needs to see.",
    image: "/LED-Display/cob-comparison.webp",
    alt: "Flip-chip COB LED display cabinet, front and rear views",
    motto: <>Higher<br/>Definition<br/>Brighter<br/>Possibilities</>,
    features: [
      { Icon: Gem, text: <>Prioritise detail<br/>at close range</> },
      { Icon: Building2, text: <>Designed for<br/>indoor spaces</> },
      { Icon: Monitor, text: <>Consider text, diagrams<br/>and detailed content</> },
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
          <div>Choose around your viewing distance, content and installation environment.</div>
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
                <Link className="led-platform-button" href={`/products/led-display-solution/${slug}/`}>View {name} Specifications <ArrowRight aria-hidden="true"/></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
