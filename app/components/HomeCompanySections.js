import Image from "next/image";
import Link from "next/link";
import { Globe2, Users, Layers, ShieldCheck, Box, Settings, ArrowRight } from "lucide-react";

const stats = [[Globe2,"70+","Countries Served","Expanding possibilities worldwide"],[Users,"200+","Global Partners","Building stronger together"],[Layers,"10,000+","Projects Completed","Connecting organisations globally"],[ShieldCheck,"24/7","Technical Support","Supporting your next step"]];
const services = [[Box,"Technology Products","A focused range of professional products for connected spaces.","/products/"],[Settings,"System Integration","Complete solutions tailored to your project requirements.","/solutions/"],[Globe2,"OEM / ODM & Global Supply","Flexible assembly and supply for your business needs.","/partners/"]];
const cities = [["Italy","Headquarters","0%"],["Dubai","United Arab Emirates","100%"],["Singapore","Regional Office","50%"]];

export function HomeCompanyOverview() {
  return <div className="home-company-sections">
    <section className="home-company" aria-labelledby="home-company-title">
      <div className="container">
        <dl className="home-company-stats">{stats.map(([Icon,value,title,copy])=><div data-card-reveal key={title}><Icon aria-hidden="true"/><div><dt>{title}</dt><dd>{value}</dd><p>{copy}</p></div></div>)}</dl>
        <div className="home-company-main">
          <div className="home-company-copy"><p className="home-company-kicker">Who we are</p><h2 id="home-company-title">Complete Technology<br/>Solutions for a<br/>Connected World</h2><p className="home-company-description">Headquartered in Italy and operating globally, Synoveta provides technology products, assembly and system integration for commercial, government and industrial projects. We help organisations create smarter, safer and more connected environments.</p><Link href="/about/" className="home-company-button">Learn More About Synoveta <ArrowRight aria-hidden="true"/></Link></div>
          <div className="home-company-visual"><Image src="/Home page/global/company-boardroom.webp" alt="Illustrative boardroom with a connected world map on an LED display" fill sizes="(max-width: 800px) 90vw, 55vw"/><span className="home-company-motto">Integrating<br/>technology<br/>for a smarter<br/>tomorrow</span></div>
        </div>
        <div className="home-company-services">{services.map(([Icon,title,copy,href])=><article data-card-reveal key={title}><Icon aria-hidden="true"/><div><h3>{title}</h3><p>{copy}</p><Link href={href} aria-label={`Learn more about ${title}`}>Learn More <ArrowRight aria-hidden="true"/></Link></div></article>)}</div>
      </div>
    </section>
  </div>;
}

export function HomeGlobalPresence() {
  return <div className="home-company-sections">
    <section id="partners" className="home-world" aria-labelledby="home-world-title">
      <div className="home-world-visual"><Image src="/Home page/global/connected-globe.webp" alt="Illustrative connected globe showing Europe, the Middle East and Asia" fill sizes="(max-width: 800px) 100vw, 48vw"/></div>
      <div className="container home-world-grid">
        <div className="home-world-space" aria-hidden="true"/>
        <div className="home-world-copy"><p className="home-company-kicker">Our global presence</p><h2 id="home-world-title">A Stronger, More<br/>Connected World</h2><p>With offices in Italy, Dubai and Singapore, plus a network of partners in over 50 countries, Synoveta connects people and projects with technology solutions worldwide.</p><Link href="/partners/" className="home-world-button">View Our Global Network <ArrowRight aria-hidden="true"/></Link></div>
        <div className="home-world-locations"><p className="home-world-motto">Local expertise<br/>Global impact</p>{cities.map(([name,detail,position])=><div className="home-world-city" data-card-reveal key={name}><div className="home-world-city-image" style={{backgroundPosition:`${position} center`}} role="img" aria-label={`Illustrative ${name} city skyline`}/><div><h3>{name}</h3><p>{detail}</p></div></div>)}</div>
      </div>
    </section>
  </div>;
}
