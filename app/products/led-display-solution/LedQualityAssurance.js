import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Settings, Monitor, ClipboardCheck } from "lucide-react";

const features = [
  [ShieldCheck, "Component Selection", "Modules and cabinets chosen for your application."],
  [Settings, "Performance Review", "A focus on image clarity and colour consistency."],
  [Monitor, "System Setup", "Display configuration tailored to your space."],
  [ClipboardCheck, "Long-Term Support", "Service guidance and support beyond installation."],
];
const scenes = ["Brightness & Colour", "Installation Environment", "Long-Term Performance"];

export default function LedQualityAssurance() {
  return <section className="led-assurance" aria-labelledby="led-assurance-title">
    <div className="container led-assurance-grid">
      <div className="led-assurance-main">
        <div className="led-assurance-visual"><Image src="/LED-Display/quality-inspection.webp" alt="Illustrative view of a technician inspecting an LED display cabinet" fill sizes="(max-width: 700px) 100vw, 65vw" /></div>
        <div className="led-assurance-fade" />
        <div className="led-assurance-content">
          <p className="led-assurance-kicker">Quality assurance</p>
          <h2 id="led-assurance-title">Built for<br/>Real-World Performance</h2>
          <p className="led-assurance-intro">The right LED display starts with the details. Synoveta helps you match display technology, system configuration and ongoing support to the demands of your project.</p>
          <Link className="led-assurance-button" href="/contact/">Discuss Your Requirements <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="led-assurance-features">{features.map(([Icon,title,copy])=><li key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></li>)}</ul>
      </div>
      <div className="led-assurance-previews" aria-label="Display performance considerations">{scenes.map((title,index)=><figure key={title}><div className="led-assurance-preview" style={{backgroundPosition:`center ${index*50}%`}} role="img" aria-label={`Illustrative LED testing scene: ${title}`} /><figcaption>{title}</figcaption></figure>)}</div>
    </div>
  </section>;
}
