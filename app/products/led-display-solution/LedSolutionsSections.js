import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, PanelsTopLeft, Wrench, Settings, Headphones, BadgeCheck, Building2, ShoppingBag, CalendarDays, Monitor, MonitorCheck, GraduationCap } from "lucide-react";

const services = [
  [ClipboardCheck, "Confident Decisions", "Clear guidance on your display options"],
  [PanelsTopLeft, "A Better Fit", "A display planned around your space"],
  [Wrench, "Practical Integration", "Mounting and access considered early"],
  [Settings, "Connected Systems", "Display and control planned together"],
  [Headphones, "Expert Guidance", "Technical questions made clearer"],
  [BadgeCheck, "Ongoing Care", "Help when your display needs attention"],
];

const industries = [
  { title: "Corporate", copy: "Bring clarity to meetings and workplace communication.", icon: Building2, image: "/LED-Display/SVL-Series/indoor-led-display-for-conference-room.webp", alt: "LED video wall in a corporate meeting room" },
  { title: "Retail", copy: "Create engaging displays that bring your brand to life.", icon: ShoppingBag, image: "/LED-Display/SVLC-Series/COB-led- dispaly-for-retail-store.webp", alt: "LED display in a contemporary retail space" },
  { title: "Events", copy: "Make every stage a memorable visual experience.", icon: CalendarDays, image: "/LED-Display/industry-events.webp", alt: "Concert stage with vivid LED screens and lighting" },
  { title: "Outdoor Advertising", copy: "Stand out with bold, large-format LED displays.", icon: Monitor, image: "/LED-Display/SVL-Series/outdoor-eld-display.webp", alt: "Outdoor LED advertising display" },
  { title: "Control Room", copy: "See critical information clearly, in one seamless view.", icon: MonitorCheck, image: "/LED-Display/industry-control-room.webp", alt: "Control room with a blue LED monitoring wall" },
  { title: "Education", copy: "Connect learners with immersive visual content.", icon: GraduationCap, image: "/LED-Display/SVLC-Series/COB-led- dispaly-for-conference -hall.webp", alt: "Large LED display in an auditorium" },
];

export function LedCompleteSolutions() {
  return <div className="led-solutions-sections"><section className="led-complete" aria-labelledby="led-complete-title">
      <div className="container led-complete-grid">
        <div className="led-complete-image"><Image src="/LED-Display/solutions-lobby.webp" alt="Curved blue LED display in a contemporary lobby" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
        <div className="led-complete-copy">
          <p className="led-solutions-kicker">More than displays</p>
          <h2 id="led-complete-title">Complete LED Solutions<br/>From Concept to Completion</h2>
          <p className="led-complete-intro">Get more than a screen. Synoveta brings product guidance, integration planning and technical support together, helping you make confident choices for your project.</p>
          <ul className="led-service-list">{services.map(([Icon, title, copy]) => <li key={title}><span className="led-service-icon"><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ul>
          <Link href="/solutions/" className="led-solutions-button">Explore Our Solutions <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section></div>;
}

export function LedIndustrySolutions() {
  return <div className="led-solutions-sections"><section className="led-industry-section" aria-labelledby="led-industry-title">
      <div className="container">
        <div className="led-industry-heading">
          <div><p className="led-solutions-kicker">Solutions by industry</p><h2 id="led-industry-title">Visual Solutions for Every Industry</h2></div>
          <p className="led-industry-intro">Every space has a different purpose. Discover LED displays designed to connect with your audience, wherever they are.</p>
          <Link href="/solutions/" className="led-industry-all">View All Solutions <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="led-industry-cards">{industries.map(({title, copy, icon: Icon, image, alt}) => <article className="led-industry-card" key={title}>
          <div className="led-industry-image"><Image src={image} alt={alt} fill sizes="(max-width: 420px) 90vw, (max-width: 640px) 44vw, (max-width: 1100px) 29vw, 15vw" /></div>
          <div className="led-industry-body"><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></div>
        </article>)}</div>
      </div>
    </section></div>;
}
