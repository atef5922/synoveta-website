import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun, Layers, Grid3X3, SlidersHorizontal, Wrench } from "lucide-react";

const features = [
  [Sun, "Vivid Visuals", "Clarity that makes an impression"],
  [Layers, "SMD & COB Options", "Technology for different spaces"],
  [Grid3X3, "Fine Pixel Pitch", "Detail for close-view applications"],
  [SlidersHorizontal, "Flexible Control", "Configure your display experience"],
  [Wrench, "Modular Design", "Built around your installation"],
];
const components = [["LED Module", "The visual surface"], ["Cabinet Design", "A modular structure"], ["Control System", "Coordinated display output"], ["Power Supply", "Power for each module"]];
const steps = [
  ["Consultation", "Understand your space, audience and project goals."],
  ["System Design", "Choose the right LED technology, size and layout."],
  ["Supply", "Coordinate the displays and components for your project."],
  ["Installation", "Support the setup and integration of your display."],
  ["Configuration", "Adjust display settings for your content and environment."],
  ["Maintenance & Support", "Keep your system supported beyond installation."],
];
export function LedTechnology() {
  return <div className="led-expertise"><section className="led-tech" aria-labelledby="led-tech-title">
      <div className="container">
        <div className="led-tech-main">
          <div className="led-tech-copy">
            <p className="led-expertise-kicker">Our technology</p>
            <h2 id="led-tech-title">Technology<br/>Behind Every Pixel</h2>
            <p>Discover how LED modules, cabinet engineering and display control come together to bring your content to life.</p>
            <Link href="#led-technology-comparison" className="led-expertise-button">Explore Our Technology <ArrowRight aria-hidden="true"/></Link>
          </div>
          <div className="led-tech-visual">
            <div className="led-tech-labels">{components.map(([title,copy])=><div key={title}><h3>{title}</h3><p>{copy}</p><span aria-hidden="true"/></div>)}</div>
            <div className="led-tech-image"><Image src="/LED-Display/technology-exploded.webp" alt="Conceptual exploded view of an LED module, cabinet frame, controller and rear enclosure" fill sizes="(max-width: 800px) 90vw, 60vw"/></div>
          </div>
        </div>
        <ul className="led-tech-features">{features.map(([Icon,title,copy])=><li key={title}><Icon aria-hidden="true"/><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ul>
      </div>
    </section></div>;
}

export function LedProcess() {
  return <div className="led-expertise"><section className="led-process" aria-labelledby="led-process-title">
      <div className="container">
        <div className="led-process-heading">
          <div><p className="led-expertise-kicker">Our process</p><h2 id="led-process-title">From Vision to Reality</h2><p>A clear path to your LED display solution, from the first conversation to ongoing support.</p></div>
          <p>We work with you to shape a solution around your space, audience and project requirements.</p>
          <Link href="/contact/" className="led-process-link">Discuss Your Project <ArrowRight aria-hidden="true"/></Link>
        </div>
        <ol className="led-process-grid">{steps.map(([title,copy],index)=><li key={title}>
          <div className="led-process-photo" style={{backgroundPosition:`${index*20}% center`}} role="img" aria-label={`${title} for an LED display project`}><span>{String(index+1).padStart(2,"0")}</span></div>
          <h3>{title}</h3><p>{copy}</p><ArrowRight className="led-process-arrow" aria-hidden="true"/>
        </li>)}</ol>
      </div>
    </section></div>;
}
