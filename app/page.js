import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, GraduationCap, Globe2, Handshake, Headphones, Landmark, ShieldCheck, TrainFront, Users, Wrench } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalPartnersMap from "./components/GlobalPartnersMap";
import { categories } from "./data";

const sectors=[{name:"Corporate",copy:"Smart meeting and office solutions",icon:Building2},{name:"Government",copy:"Secure and reliable public solutions",icon:Landmark},{name:"Education",copy:"Advanced learning and campus solutions",icon:GraduationCap},{name:"Transport",copy:"Efficient & safe transportation solutions",icon:TrainFront},{name:"Industrial",copy:"Robust solutions for industrial applications",icon:Factory},{name:"Customized / OEM",copy:"Tailored solutions as per your needs",icon:Wrench}];
const reasons=[{name:"International Quality Standards",icon:ShieldCheck},{name:"Global Partner Network",icon:Users},{name:"Flexible OEM/ODM & Assembly",icon:Handshake},{name:"Timely Delivery Worldwide",icon:Globe2},{name:"Dedicated Support & After Sales",icon:Headphones}];
const globalPartners=[{file:"novastar.png",name:"Novastar"},{file:"Colorlight-logo.webp",name:"Colorlight"},{file:"Bosch.png",name:"Bosch"},{file:"Samsung-logo.png",name:"Samsung"}];

function WorldMap(){return <svg className="world-map" viewBox="0 0 620 310" role="img" aria-label="Global partner network world map"><defs><pattern id="mapDots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2.3" fill="#8fc4f4"/></pattern></defs><g fill="url(#mapDots)" stroke="#b9daf6" strokeWidth="2"><path d="M48 76l25-25 58-18 54 10 23 24-9 25-27 6-15 23-23 3-17 31-25-8-17-31-28-16z"/><path d="M153 158l25 9 18 28-5 38-18 43-17-6-12-42-15-30z"/><path d="M257 65l24-18 36 5 22 18-13 18-29-4-20 15-27-10z"/><path d="M293 100l37-4 31 22 8 42-19 61-27 37-20-14 5-37-20-28-12-44z"/><path d="M337 61l42-26 79 7 31 23 57 8 25 31-18 28-42-3-27 20-34-6-29 30-35-9-14-37-35-14z"/><path d="M493 202l41-15 38 23-4 35-35 19-39-20z"/><path d="M579 155l17-8 12 13-11 12z"/></g></svg>}

export default function Home(){return <><Header/><main>
  <section className="hero" aria-labelledby="home-hero-title">
    <Image src="/Home page/Banner-image.webp" alt="Synoveta international technology company headquarters" fill priority sizes="100vw"/>
    <div className="hero-content">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="home-hero-title">Global Standards.<br/>Global Reach.<br/><span>Reliable Technology.</span></h1>
          <p>SYNOVETA is an international technology company headquartered in Italy, delivering advanced, reliable and future-ready solutions to partners and customers worldwide.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#solutions">Explore solutions <ArrowRight/></a>
            <a className="ghost-btn" href="#products">View products <ArrowRight/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="products" className="section"><div className="container"><div className="section-heading"><p>Explore our range</p><h2>Our Core Product Categories</h2><span/></div><div className="product-grid">{categories.map((item)=><article className="product-card" key={item.slug}><div className="product-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 20vw"/></div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><Link href={`/products/${item.slug}`}>View products <ArrowRight/></Link></div></article>)}</div></div></section>
  <section id="solutions" className="section sectors"><div className="container"><div className="section-heading"><p>Designed for real-world needs</p><h2>Intelligent Solutions For Every Sector</h2><span/></div><div className="sector-grid">{sectors.map(({name,copy,icon:Icon})=><article key={name}><Icon/><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="reasons"><div className="container"><div className="section-heading light"><h2>Why Partners Choose Synoveta</h2><span/></div><div className="reason-grid">{reasons.map(({name,icon:Icon})=><div key={name}><Icon/><b>{name}</b></div>)}</div></div></section>
  <section id="partners" className="partner-section"><div className="container partner-wrap"><div className="partner-copy"><WorldMap/><div><p className="eyebrow">Grow together</p><h2>Join Our Global<br/>Partner Network</h2><p>We are expanding our dealer and distributor network worldwide. Letâ€™s build what comes next.</p><a className="dark-btn" href="#contact">Become a partner <ArrowRight/></a></div></div><div className="stats"><div><b>50+</b><span>Countries Served</span></div><div><b>200+</b><span>Global Partners</span></div><div><b>10000+</b><span>Projects Completed</span></div><div><b>24/7</b><span>Support</span></div></div></div></section>
  <section id="about" className="home-partners"><div className="container"><div className="home-partners-title"><h2>Our Global Partners</h2><span/></div><div className="home-partners-row">{globalPartners.map(({file,name})=><div className="home-partner-logo" key={file}><Image src={`/Partners page/Partners logo/${file}`} alt={`${name} logo`} fill sizes="190px"/></div>)}</div><GlobalPartnersMap/></div></section>
 </main><Footer/></>}



