import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LedProjectBanner() {
  return (
    <section className="led-project" id="display-finder" aria-labelledby="led-project-title">
      <Image className="led-project-background" src="/LED-Display/solution-finder-background.webp" alt="" fill sizes="100vw" />
      <div className="led-project-shade" />
      <div className="container led-project-inner">
        <div className="led-project-copy">
          <p className="led-project-kicker"><span/>Your next project</p>
          <h2 id="led-project-title">Let’s Bring Your<br/>Vision to Life.</h2>
          <p className="led-project-description">From boardrooms to bold outdoor installations, we help you choose the right LED display for your space, audience and ambition.</p>
          <Link href="/contact/" className="led-project-link">Discuss your project <ArrowUpRight aria-hidden="true"/></Link>
        </div>
      </div>
    </section>
  );
}
