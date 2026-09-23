import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, Building2, Factory, GraduationCap, Grid3X3, HeartPulse, Hotel, Landmark, LockKeyhole, Network, Settings, ShieldCheck, TrainFront, Users, Warehouse } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./solutions.css";

const solutions = [
  { title: "Access & Entrance Solution", copy: "Comprehensive access control and smart entrance solutions to secure people, assets and premises.", image: "/solutions page/access & entrance solution.webp", icon: LockKeyhole, href: "/products/access-control-turnstile" },
  { title: "Conference & Collaboration Solution", copy: "Integrated conference systems for effective communication and collaboration in any meeting space.", image: "/solutions page/conference collabration solution.webp", icon: Users, href: "/products/conference-system" },
  { title: "Public Address & Audio Solution", copy: "High-performance PA and voice evacuation systems for clear, reliable and safe communication.", image: "/solutions page/public address & audio solution.webp", icon: AudioLines, href: "/products/pa-audio-system" },
  { title: "Display & Visualization Solution", copy: "LED display and digital signage solutions that deliver powerful visual impact across any environment.", image: "/solutions page/display &visual solution.webp", icon: Grid3X3, href: "/products/led-display-solution" },
];
const industries = [["Government",Landmark],["Education",GraduationCap],["Transportation",TrainFront],["Industrial",Factory],["Commercial",Building2],["Healthcare",HeartPulse],["Hospitality & Venues",Hotel],["Security & Defense",ShieldCheck]];
const heroBenefits = [["Reliable & Secure","Proven technology and strict quality control",ShieldCheck],["Integrated Solutions","Products that work seamlessly together",Network],["Global Support","Local partner network worldwide",Building2],["Customized Approach","Tailored solutions to fit your requirement",Settings]];
export const metadata = { title: "Solutions | Synoveta", description: "Integrated access control, conference, professional audio and LED display solutions." };

export default function SolutionsPage(){return <><Header activePage="solutions"/><main className="solutions-page">
  <section className="solutions-hero"><Image src="/solutions page/solution page banner.webp" alt="Synoveta intelligent technology solutions" fill priority sizes="100vw"/><div className="container solutions-hero-content"><div className="solution-breadcrumb"><Link href="/">Home</Link><span>›</span><span>Solutions</span></div><h1>Intelligent Solutions.<br/><em>Endless Possibilities.</em></h1><p>SYNOVETA delivers integrated technology solutions designed to improve security, communication and efficiency for every industry. From concept to assembly and global supply — we make it simple, reliable and future-ready.</p><div className="hero-benefits">{heroBenefits.map(([title,copy,Icon])=><article key={title}><Icon/><div><b>{title}</b><span>{copy}</span></div></article>)}</div></div></section>
  <section className="solutions-list container"><div className="solutions-title"><h1>Our Solutions</h1><span/></div><div className="solutions-grid">{solutions.map(({title,copy,image,icon:Icon,href})=><article key={title}><div className="solution-image"><Image src={image} alt={title} fill sizes="(max-width: 700px) 100vw, 33vw"/></div><div className="solution-icon"><Icon/></div><div className="solution-body"><h2>{title}</h2><p>{copy}</p><Link href={href}>Explore Solution <ArrowRight/></Link></div></article>)}</div>
    <div className="custom-solution"><Warehouse/><p><b>Need a Custom Solution?</b><span>We provide OEM/ODM assembly and tailored solutions to meet your specific project requirements.</span></p><a href="#contact">Talk to our experts <ArrowRight/></a></div>
  </section>
  <section className="industries container"><div className="solutions-title"><h2>Industries We Serve</h2><span/></div><div className="industry-grid">{industries.map(([name,Icon])=><article key={name}><Icon/><b>{name}</b></article>)}</div><Link className="industries-button" href="/#solutions">View all industries <ArrowRight/></Link></section>
  <section className="solution-cta container"><div className="cta-map"><GlobeMark/></div><div><h2>Let&apos;s Build the Right Solution for You</h2><p>Our team is ready to help you find the best technology solution for your project.</p></div><a href="#contact">Request a consultation <ArrowRight/></a><a className="outline" href="#contact">Download brochure</a></section>
  </main><Footer/></>}

function GlobeMark(){return <svg viewBox="0 0 160 75" aria-hidden="true"><path d="M8 25l14-13 28-7 21 8-4 11-13 4-10 13-16-4-6-10zm56-12 18-8 29 3 15 10-14 8-19-3-9 9-12-5zm35 22 18-3 23 12-5 17-21 6-15-11z"/><circle cx="40" cy="22" r="3"/><circle cx="92" cy="18" r="3"/><circle cx="124" cy="47" r="3"/></svg>}
