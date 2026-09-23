import Image from "next/image";
import { ArrowRight, Award, Building2, Globe2, Handshake, Puzzle, Store, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnerMap from "./PartnerMap";
import FindPartner from "./FindPartner";
import GlobalPartnersMap from "../components/GlobalPartnersMap";
import "./partners.css";

export const metadata = { title: "Partners | Synoveta", description: "Join Synoveta's worldwide partner network." };

const stats = [
  { value: "56", label: "Countries", copy: "Our distribution partners operate across 56 countries.", icon: Globe2 },
  { value: "56", label: "Partners", copy: "Distribution partners supporting customers in local markets.", icon: Users },
  { value: "10000+", label: "Projects", copy: "Successful collaborations delivering value across industries.", icon: Building2 },
  { value: "100%", label: "Support", copy: "Comprehensive support for our partners worldwide.", icon: Award },
];
const types = [
  { title: "Authorized Distributor", copy: "Distribute SYNOVETA products in your country with full support, competitive pricing and marketing assistance.", icon: Handshake, tone: "blue" },
  { title: "Authorized Dealer", copy: "Sell our products and solutions with local market support, training and technical assistance.", icon: Store, tone: "green" },
  { title: "System Integrator", copy: "Integrate SYNOVETA solutions into your projects and deliver complete end-to-end solutions.", icon: Puzzle, tone: "purple" },
  { title: "Solution Partner (OEM/ODM)", copy: "Collaborate on OEM/ODM assembly and customized solutions tailored to your business and market.", icon: Award, tone: "gold" },
];
const logos = [
  { file: "novastar.png", name: "Novastar" },
  { file: "Colorlight-logo.webp", name: "Colorlight" },
  { file: "Bosch.png", name: "Bosch" },
  { file: "Samsung-logo.png", name: "Samsung" },
];

export default function PartnersPage() {
  return <><Header activePage="partners"/><main className="partners-page">
    <section className="partners-hero">
      <Image src="/Partners page/Partner page banner.png" alt="Global Synoveta partner network" fill priority sizes="100vw"/>
      <div className="partners-hero-copy">
        <h1>Stronger Together.<br/><span>Greater Possibilities.</span></h1>
        <p>SYNOVETA works with authorized distributors and integration partners worldwide to deliver reliable technology solutions and exceptional value to customers.</p>
      </div>
    </section>
    <section className="partner-network"><div className="container network-layout">
      <div className="network-intro"><p className="partner-kicker">Our global partner network</p><h1>Worldwide Presence.<br/>Local Commitment.</h1><p>Our partners are the foundation of our global success. Together, we bring innovative technology and reliable solutions to local markets with strong support from SYNOVETA.</p><a className="partner-button" href="#apply">Find a partner <ArrowRight/></a></div>
      <div className="partner-stats">{stats.map(({value,label,copy,icon:Icon})=><article key={label}><Icon/><strong>{value}</strong><b>{label}</b><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="partner-types container"><div className="partner-title"><h2>Partner Types</h2><span/></div><div className="type-grid">{types.map(({title,copy,icon:Icon,tone})=><article key={title}><div className={`type-icon ${tone}`}><Icon/></div><h3>{title}</h3><p>{copy}</p><a href="#apply">Learn More <ArrowRight/></a></article>)}</div><div className="partner-cta"><Globe2/><p>We are continuously expanding our partner network.<br/><span>Join us and be part of our global success story.</span></p><a href="#find-partner">Find a partner</a></div></section>
    <section id="apply" className="apply-section container"><PartnerMap/><FindPartner/></section>
    <section id="logos" className="logo-section"><div className="partner-title"><h2>Our Global Partners</h2><span/></div><div className="container logo-row">{logos.map(({file,name})=><div className="logo-card" key={file}><Image src={`/Partners page/Partners logo/${file}`} alt={`${name} logo`} fill sizes="180px"/></div>)}</div><div className="container"><GlobalPartnersMap/></div><p>* Logos are registered trademarks of their respective owners.</p></section>
  </main><Footer/></>;
}












