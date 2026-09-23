import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import SvlcOfficeShowcase from "../../../components/SvlcOfficeShowcase";
import SvlcInquiryForm from "../../../components/SvlcInquiryForm";
import SvlcUseCases from "../../../components/SvlcUseCases";
import { getLedDisplaySeries, ledDisplaySeries } from "../../../led-display-series";

const svlcSpecificationRows = [
  ["Pixel pitch", "1.25 mm", "1.538 mm", "1.86 mm"],
  ["Module dimensions", "320 × 160 mm", "320 × 160 mm", "320 × 160 mm"],
  ["Module resolution", "256 × 128 px", "208 × 104 px", "172 × 86 px"],
  ["Pixel density", "640,000 px/m²", "422,500 px/m²", "288,906 px/m²"],
  ["Module aspect ratio", "2:1", "2:1", "2:1"],
  ["LED technology", "COB", "COB", "COB"],
  ["Application", "Indoor", "Indoor", "Indoor"],
];

const svlSpecificationRows = [
  ["Pixel pitch range", "P1.25 – P3.076", "P3 – P10"],
  ["Pitch options", "P1.25 / P1.538 / P1.839 / P1.86 / P2 / P2.5 / P3 / P3.076", "P3 / P3.076 / P4 / P5 / P6 / P8 / P10"],
  ["LED technology", "SMD", "SMD"],
  ["Application", "Indoor", "Outdoor"],
  ["Display format", "Modular", "Modular"],
  ["Configuration", "Project-specific", "Project-specific"],
];

export function generateStaticParams() {
  return ledDisplaySeries.map(({ slug }) => ({ seriesSlug: slug }));
}

export async function generateMetadata({ params }) {
  const { seriesSlug } = await params;
  const series = getLedDisplaySeries(seriesSlug);
  return series ? {
    title: `${series.name} LED Display | Synoveta`,
    description: `${series.name} LED display modules available in ${series.pixelPitches.join(", ")} mm pixel pitches.`,
  } : {};
}

function SvlcSeriesPage({ series }) {
  return <><Header activePage="products"/><main className="svlc-page">
    <section className="svlc-hero">
      <div className="container svlc-hero-inner">
        <div className="svlc-hero-copy">
          <p className="svlc-kicker">Synoveta COB Display Technology</p>
          <h1>SVLC Series</h1>
          <p className="svlc-hero-type">Flip-chip COB LED Display</p>
          <p>Fine-pitch indoor modules engineered for seamless images, high contrast and dependable visual performance.</p>
          <div className="svlc-hero-points"><span>320 × 160 mm module</span><span>P1.25 / P1.538 / P1.86</span></div>
          <a href="#svlc-inquiry" className="svlc-light-btn">Request product information <ArrowRight/></a>
        </div>
        <div className="svlc-hero-visual"><Image src={series.bannerImage} alt="SVLC Series flip-chip COB LED display module" fill priority sizes="(max-width: 760px) 100vw, 58vw"/></div>
      </div>
    </section>

    <div className="container">
      <nav className="svlc-breadcrumb" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><Link href="/products/led-display-solution">LED Display Solution</Link><span>/</span><b>SVLC Series</b></nav>

      <section className="svlc-intro">
        <p className="eyebrow">Designed for close-viewing environments</p>
        <h2>Fine-pitch clarity. Modular flexibility.</h2>
        <p>The SVLC Series combines flip-chip COB technology with a practical 320 × 160 mm module format. Its fine pixel-pitch options support detailed indoor display walls for boardrooms, control rooms, corporate spaces and premium presentation environments.</p>
      </section>

      <section className="svlc-technology">
        <div className="svlc-technology-copy">
          <p className="eyebrow">COB display technology</p>
          <h2>Built for seamless, high-impact visuals</h2>
          <p>Directly integrated LEDs create a clean display surface and a tightly packed pixel structure. The modular format makes it easier to build displays in the size and aspect ratio required by each project.</p>
          <ul><li><CheckCircle2/> Fine-pitch pixel options</li><li><CheckCircle2/> High-contrast image presentation</li><li><CheckCircle2/> Consistent 2:1 module format</li></ul>
        </div>
        <div className="svlc-module-image"><Image src={series.image} alt="SVLC Series COB LED display front and rear module" fill sizes="(max-width: 760px) 100vw, 52vw"/></div>
      </section>
    </div>

    <SvlcOfficeShowcase image={series.lifestyleImage}/>

    <section className="container svlc-benefits">
      <div><span>01</span><h3>Fine-pitch definition</h3><p>Pitch options from 1.25 mm support clear, detailed content at closer viewing distances.</p></div>
      <div><span>02</span><h3>Modular by design</h3><p>The standard 320 × 160 mm format simplifies display planning and repeatable assembly.</p></div>
      <div><span>03</span><h3>COB construction</h3><p>Flip-chip COB technology supports a compact, integrated LED surface for indoor displays.</p></div>
    </section>

    <section className="svlc-spec-section">
      <div className="container">
        <div className="svlc-spec-heading"><div><p className="eyebrow">320 × 160 mm module</p><h2>Technical specifications</h2></div><p>Choose the pixel pitch that matches the viewing distance and resolution requirement of your project.</p></div>
        <div className="svlc-table-wrap"><table><thead><tr><th>Parameter</th><th>P1.25</th><th>P1.538</th><th>P1.86</th></tr></thead><tbody>{svlcSpecificationRows.map(([label, ...values])=><tr key={label}><th scope="row">{label}</th>{values.map((value, index)=><td key={`${label}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
        <p className="svlc-spec-note">Resolution and pixel density are calculated from the 320 × 160 mm module format. Final cabinet and electrical specifications depend on the selected project configuration.</p>
      </div>
    </section>

    <SvlcUseCases items={series.useCases}/>

    <SvlcInquiryForm/>
  </main><Footer/></>;
}

function SvlSeriesPage({ series }) {
  return <><Header activePage="products"/><main className="svlc-page svl-page">
    <section className="svlc-hero svl-hero">
      <div className="container svlc-hero-inner">
        <div className="svlc-hero-copy">
          <p className="svlc-kicker">Synoveta SMD Display Technology</p>
          <h1>SVL Series</h1>
          <p className="svlc-hero-type">Indoor &amp; Outdoor LED Display</p>
          <p>Flexible SMD LED display modules covering pixel pitches from P1.25 to P10 for professional indoor and outdoor installations.</p>
          <div className="svlc-hero-points"><span>P1.25 – P10</span><span>Indoor / Outdoor</span></div>
          <a href="#svl-inquiry" className="svlc-light-btn">Request product information <ArrowRight/></a>
        </div>
        <div className="svlc-hero-visual svl-hero-visual"><Image src={series.bannerImage} alt="SVL Series indoor and outdoor SMD LED display" fill priority sizes="(max-width: 760px) 100vw, 58vw"/></div>
      </div>
    </section>

    <div className="container">
      <nav className="svlc-breadcrumb" aria-label="Breadcrumb"><Link href="/products">Products</Link><span>/</span><Link href="/products/led-display-solution">LED Display Solution</Link><span>/</span><b>SVL Series</b></nav>

      <section className="svlc-intro">
        <p className="eyebrow">One series. A complete pitch range.</p>
        <h2>Flexible LED displays from P1.25 to P10</h2>
        <p>The SVL Series provides a broad selection of SMD LED display modules for indoor and outdoor projects. Choose a fine pitch for detailed close-viewing content or a wider pitch for larger viewing distances and expansive installations.</p>
      </section>

      <section className="svlc-technology">
        <div className="svlc-technology-copy">
          <p className="eyebrow">SMD LED display modules</p>
          <h2>Designed around your viewing requirements</h2>
          <p>With pitch options extending from P1.25 through P10, the SVL Series supports display planning across corporate, commercial and outdoor environments.</p>
          <ul><li><CheckCircle2/> P1.25 to P10 pixel-pitch range</li><li><CheckCircle2/> Indoor and outdoor configurations</li><li><CheckCircle2/> Modular display construction</li></ul>
        </div>
        <div className="svlc-module-image svl-module-image"><Image src={series.image} alt="SVL Series SMD LED display module" fill sizes="(max-width: 760px) 100vw, 52vw"/></div>
      </section>
    </div>

    <SvlcOfficeShowcase
      image={series.lifestyleImage}
      alt="SVL Series SMD LED display installed in a corporate lobby"
      kicker="Professional display environments"
      title="A strong visual welcome for corporate spaces"
      copy="Create a large, clear communication canvas for reception areas, corporate lobbies, public venues and branded environments with a configuration matched to the space."
      tags={["Corporate", "Indoor & outdoor", "Scalable"]}
    />

    <section className="container svlc-benefits">
      <div><span>01</span><h3>Wide pitch selection</h3><p>Choose from thirteen pixel-pitch options spanning P1.25 through P10.</p></div>
      <div><span>02</span><h3>Indoor applications</h3><p>Fine and standard pitch configurations support corporate, retail and presentation spaces.</p></div>
      <div><span>03</span><h3>Outdoor applications</h3><p>Project-specific modular configurations support large-format outdoor communication.</p></div>
    </section>

    <section className="svlc-spec-section">
      <div className="container">
        <div className="svlc-spec-heading"><div><p className="eyebrow">P1.25 – P10 range</p><h2>Technical specifications</h2></div><p>Select an indoor or outdoor configuration according to viewing distance, display dimensions and installation environment.</p></div>
        <div className="svl-pitch-groups">
          <div className="svl-pitch-group"><b>Indoor</b><div className="svl-pitch-list" aria-label="Indoor pixel pitches">{series.indoorPixelPitches.map((pitch) => <span key={pitch}>P{pitch}</span>)}</div></div>
          <div className="svl-pitch-group"><b>Outdoor</b><div className="svl-pitch-list" aria-label="Outdoor pixel pitches">{series.outdoorPixelPitches.map((pitch) => <span key={pitch}>P{pitch}</span>)}</div></div>
        </div>
        <div className="svlc-table-wrap svl-spec-table"><table><thead><tr><th>Parameter</th><th>Indoor</th><th>Outdoor</th></tr></thead><tbody>{svlSpecificationRows.map(([label, ...values]) => <tr key={label}><th scope="row">{label}</th>{values.map((value, index) => <td key={`${label}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div>
        <p className="svlc-spec-note">Final module, cabinet, brightness, protection and electrical specifications depend on the selected pixel pitch and project configuration.</p>
      </div>
    </section>

    <SvlcUseCases
      items={series.useCases}
      kicker="Indoor and outdoor applications"
      description="SVL Series configurations for detailed indoor presentations and high-impact outdoor communication."
    />

    <div id="svl-inquiry"><SvlcInquiryForm seriesName="SVL Series" productName="SVL Series Indoor & Outdoor SMD LED Display"/></div>
  </main><Footer/></>;
}

export default async function LedSeriesPage({ params }) {
  const { seriesSlug } = await params;
  const series = getLedDisplaySeries(seriesSlug);
  if (!series) notFound();

  if (series.slug === "svlc-series") return <SvlcSeriesPage series={series}/>;
  if (series.slug === "svl-series") return <SvlSeriesPage series={series}/>;

  return <><Header activePage="products"/><main className="product-page"><div className="container">
    <Link className="back-link" href="/products/led-display-solution/"><ArrowLeft/> Back to LED Display Solution</Link>
    <div className="product-hero led-product-hero">
      <div className={`product-hero-image contain-image ${series.slug === "svlc-series" ? "led-image-dark" : ""}`}><Image src={series.image} alt={`${series.name} LED display module`} fill priority sizes="(max-width: 800px) 100vw, 52vw"/></div>
      <div><p className="eyebrow">Synoveta LED Display</p><h1>{series.name}</h1>{series.moduleType&&<p className="led-series-type">{series.moduleType}</p>}<p className="lead">Professional modular LED display solution for clear and consistent visual performance.</p>
        <div className="led-pixel-spec"><h2>Pixel Pitch <span>(mm)</span></h2><div>{series.pixelPitches.map((pitch)=><span key={pitch}>{pitch}</span>)}</div></div>
        <ul><li><CheckCircle2/> Modular LED display design</li><li><CheckCircle2/> Multiple pixel-pitch options</li><li><CheckCircle2/> Project supply and technical support</li></ul>
        <a href={`mailto:info@synoveta.com?subject=${series.name} LED display enquiry`} className="primary-btn">Request product information <ArrowRight/></a>
      </div>
    </div>
  </div></main><Footer/></>;
}
