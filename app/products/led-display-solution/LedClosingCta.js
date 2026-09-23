import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function LedClosingCta() {
  return <section className="led-closing" aria-labelledby="led-closing-title">
    <Image className="led-closing-image" src="/LED-Display/svl-platform-banner.webp.webp" alt="Large blue LED display on a contemporary commercial building" fill sizes="100vw"/>
    <div className="led-closing-shade"/>
    <div className="container led-closing-inner">
      <div className="led-closing-copy">
        <p className="led-closing-kicker">Let’s build your next display</p>
        <h2 id="led-closing-title">Planning an LED Display Project?</h2>
        <p className="led-closing-description">Tell us about your space, screen size and application. Our team will help you explore the right Synoveta solution and prepare a quote for your project.</p>
        <div className="led-closing-actions">
          <Link className="led-closing-primary" href="/contact/">Request a Quote <ArrowRight aria-hidden="true"/></Link>
          <a className="led-closing-secondary" href="mailto:sales@synoveta.com?subject=LED%20Display%20Project"><MessageSquare aria-hidden="true"/> Talk to an Expert</a>
        </div>
      </div>
    </div>
  </section>;
}
