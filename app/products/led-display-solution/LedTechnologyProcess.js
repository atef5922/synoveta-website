import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun, Layers, Grid3X3, SlidersHorizontal, Wrench } from "lucide-react";

const features = [
  [Sun, "LED Pixels", "The light behind the image"],
  [Layers, "Module Layout", "Individual panels form one surface"],
  [Grid3X3, "Pixel Spacing", "The distance between LED pixels"],
  [SlidersHorizontal, "Signal Control", "Coordinates content across the screen"],
  [Wrench, "Cabinet Structure", "Holds the display assembly together"],
];
const components = [["LED Module", "The visual surface"], ["Cabinet Design", "A modular structure"], ["Control System", "Coordinated display output"], ["Power Supply", "Power for each module"]];
const steps = [
  ["Consultation", "Share your location, viewing distance, content and budget."],
  ["System Design", "Review the proposed series, dimensions and screen layout."],
  ["Supply", "Confirm the equipment list and coordinate delivery."],
  ["Installation", "Coordinate mounting, connections and access on site."],
  ["Configuration", "Set up the controller and review your content on screen."],
  ["Handover & Support", "Review daily operation, care needs and support contacts."],
];
export function LedTechnology() {
  return <div className="led-expertise"><section className="led-tech" aria-labelledby="led-tech-title">
      <div className="container">
        <div className="led-tech-main">
          <div className="led-tech-copy">
            <p className="led-expertise-kicker">Our technology</p>
            <h2 id="led-tech-title">Technology<br/>Behind Every Pixel</h2>
            <p>Discover how LED modules, cabinet engineering and display control come together to bring your content to life.</p>
            <Link href="#led-technology-comparison" className="led-expertise-button">Compare SMD & COB <ArrowRight aria-hidden="true"/></Link>
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
          <div><p className="led-expertise-kicker">Our process</p><h2 id="led-process-title">From Vision to Reality</h2><p>Six practical steps to take your LED project from initial brief to handover.</p></div>
          <p>Each stage builds on the agreed requirements, so you know what happens next.</p>
          <Link href="/contact/" className="led-process-link">Discuss Your Project <ArrowRight aria-hidden="true"/></Link>
        </div>
        <ol className="led-process-grid">{steps.map(([title,copy],index)=><li key={title}>
          <div className="led-process-photo" style={{backgroundPosition:`${index*20}% center`}} role="img" aria-label={`${title} for an LED display project`}><span>{String(index+1).padStart(2,"0")}</span></div>
          <h3>{title}</h3><p>{copy}</p><ArrowRight className="led-process-arrow" aria-hidden="true"/>
        </li>)}</ol>
      </div>
    </section></div>;
}
