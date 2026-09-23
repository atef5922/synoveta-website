import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun, Grid3X3, Box, House, PanelsTopLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import LedDisplayHero from "./LedDisplayHero";
import LedTechnologyComparison from "./LedTechnologyComparison";
import LedProjectBanner from "./LedProjectBanner";
import { LedCompleteSolutions, LedIndustrySolutions } from "./LedSolutionsSections";
import { LedTechnology, LedProcess } from "./LedTechnologyProcess";
import LedQualityAssurance from "./LedQualityAssurance";

export const metadata = {
  title: "LED Display Series | Synoveta",
  description: "Explore Synoveta SVL and SVLC LED display series with pixel pitches from 1.25 mm to 10 mm.",
};

export default function LedDisplayPage() {
  return <div className="led-display-landing"><Header activePage="products" compact/><main><LedDisplayHero/><section className="led-platforms" id="led-series" aria-labelledby="led-series-title"><div className="container">
    <div className="led-platforms-heading">
      <p>Our LED platforms</p>
      <h2 id="led-series-title">Choose Your LED Platform</h2>
      <div>Two specialized series. A complete range of possibilities.</div>
    </div>
    <div className="led-platform-stack">
      <article className="led-platform led-platform-svl" aria-labelledby="svl-platform-title">
        <Image src="/LED-Display/svl-platform-banner.webp.webp" alt="Large outdoor LED display on a modern commercial building" fill sizes="(max-width: 1230px) 96vw, 1180px" />
        <div className="led-platform-shade" />
        <span className="led-platform-motto" aria-hidden="true">People<br/>Places<br/>Possibilities</span>
        <div className="led-platform-copy">
          <p className="led-platform-kicker">SVL Series</p>
          <h3 id="svl-platform-title">Versatile SMD LED Platform</h3>
          <p className="led-platform-description">A high-performance LED display series designed for both indoor and outdoor applications, offering a wide pixel pitch range and exceptional versatility for diverse environments.</p>
          <ul className="led-platform-features">
            <li><Sun/><span>Indoor &amp; Outdoor</span></li>
            <li><Grid3X3/><span>P1.25 – P10 Pixel Pitch</span></li>
            <li><Box/><span>Modular Design</span></li>
          </ul>
          <Link className="led-platform-button" href="/products/led-display-solution/svl-series/">Explore SVL Series <ArrowRight/></Link>
          <ul className="led-platform-tags" aria-label="SVL applications"><li>Corporate</li><li>Retail</li><li>Outdoor</li><li>Large Format</li></ul>
        </div>
      </article>
      <article className="led-platform led-platform-svlc" aria-labelledby="svlc-platform-title">
        <div className="led-platform-room"><Image src="/LED-Display/svlc-platform-banner.webp.webp" alt="Fine-pitch LED video wall in a contemporary boardroom" fill sizes="(max-width: 760px) 96vw, (max-width: 1230px) 49vw, 610px" /></div>
        <div className="led-platform-copy">
          <p className="led-platform-kicker">SVLC Series</p>
          <h3 id="svlc-platform-title">Fine-Pitch Flip-Chip COB</h3>
          <p className="led-platform-description">Engineered for close-view applications, the SVLC series delivers exceptional visual performance with Flip-Chip COB technology, ideal for premium indoor environments.</p>
          <ul className="led-platform-features">
            <li><House/><span>Indoor Use Only</span></li>
            <li><Grid3X3/><span>P1.25 / P1.538 / P1.86</span></li>
            <li><PanelsTopLeft/><span>320 × 160 mm Modules</span></li>
          </ul>
          <Link className="led-platform-button" href="/products/led-display-solution/svlc-series/">Explore SVLC Series <ArrowRight/></Link>
          <ul className="led-platform-tags" aria-label="SVLC applications"><li>Boardroom</li><li>Control Room</li><li>Premium Spaces</li></ul>
        </div>
      </article>
    </div>
  </div></section><LedTechnologyComparison/><LedIndustrySolutions/><LedTechnology/><LedCompleteSolutions/><LedProcess/><LedQualityAssurance/><LedProjectBanner/></main><Footer/></div>;
}
