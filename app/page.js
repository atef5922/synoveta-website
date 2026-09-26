import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, GraduationCap, Globe2, Handshake, Headphones, Landmark, ShieldCheck, TrainFront, Users, Wrench } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeCompanyOverview, HomeGlobalPresence } from "./components/HomeCompanySections";
import "./home-company.css";
import HomeVideoHero from "./components/HomeVideoHero";
import HomeCardAnimations from "./components/HomeCardAnimations";
import "./home-hero.css";
import { categories } from "./data";

const sectors=[{name:"Corporate",copy:"Smart meeting and office solutions",icon:Building2},{name:"Government",copy:"Secure and reliable public solutions",icon:Landmark},{name:"Education",copy:"Advanced learning and campus solutions",icon:GraduationCap},{name:"Transport",copy:"Efficient & safe transportation solutions",icon:TrainFront},{name:"Industrial",copy:"Robust solutions for industrial applications",icon:Factory},{name:"Customized / OEM",copy:"Tailored solutions as per your needs",icon:Wrench}];
const reasons=[{name:"International Quality Standards",icon:ShieldCheck},{name:"Global Partner Network",icon:Users},{name:"Flexible OEM/ODM & Assembly",icon:Handshake},{name:"Timely Delivery Worldwide",icon:Globe2},{name:"Dedicated Support & After Sales",icon:Headphones}];
const featuredProjects=[
  {name:"FIFA",logo:"fifa.svg",environment:"Stadiums & Sports Venues",solution:"LED Display · PA & Audio",image:"/Home page/projects/stadium-project.webp",href:"/products/led-display-solution/"},
  {name:"IKEA",logo:"ikea.svg",environment:"Retail & Shopping Environments",solution:"LED Display · Access Control",image:"/Home page/projects/retail-project.webp",href:"/products/led-display-solution/"},
  {name:"Emirates",logo:"emirates.svg",environment:"Aviation & Transport Hubs",solution:"LED Display · PA & Audio",image:"/Home page/projects/airport-project.webp",href:"/products/pa-audio-system/"},
  {name:"Marriott International",logo:"marriott.svg",environment:"Hotels & Hospitality",solution:"LED Display · Conference System",image:"/Home page/projects/hospitality-project.webp",href:"/products/conference-system/"},
  {name:"Siemens",logo:"siemens.svg",environment:"Industrial & Control Centres",solution:"LED Display · System Integration",image:"/Home page/projects/control-centre-project.webp",href:"/solutions/"},
  {name:"Cisco",logo:"cisco.svg",environment:"Corporate & Meeting Spaces",solution:"Conference System · AV Integration",image:"/Home page/projects/boardroom-project.webp",href:"/products/conference-system/"},
];
export default function Home(){return <div className="home-landing"><HomeCardAnimations/><Header activePage="home"/><main>
  <HomeVideoHero/>
  <HomeCompanyOverview/>
  <section id="products" className="section"><div className="container"><div className="section-heading"><p>Explore our range</p><h2>Our Core Product Categories</h2><span/></div><div className="product-grid">{categories.map((item)=><article className="product-card" data-card-reveal key={item.slug}><div className="product-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 20vw"/></div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><Link href={`/products/${item.slug}`}>View products <ArrowRight/></Link></div></article>)}</div></div></section>
  <section id="solutions" className="section sectors"><div className="container"><div className="section-heading"><p>Designed for real-world needs</p><h2>Intelligent Solutions For Every Sector</h2><span/></div><div className="sector-grid">{sectors.map(({name,copy,icon:Icon})=><article data-card-reveal key={name}><Icon/><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="reasons"><div className="container"><div className="section-heading light"><h2>Why Partners Choose Synoveta</h2><span/></div><div className="reason-grid">{reasons.map(({name,icon:Icon})=><div data-card-reveal key={name}><Icon/><b>{name}</b></div>)}</div></div></section>
  <HomeGlobalPresence/>
  <section id="selected-projects" className="home-organizations" aria-labelledby="home-organizations-title">
    <div className="container">
      <div className="section-heading home-organizations-heading">
        <p>Selected environments</p>
        <h2 id="home-organizations-title">Technology for World-Class Environments</h2>
        <span/>
      </div>
      <div className="home-organizations-grid">
        {featuredProjects.map(({name,environment,solution,image,href})=><article data-card-reveal key={name}>
          <Image className="home-project-image" src={image} alt={`${environment} powered by professional technology`} fill sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"/>
          <div className="home-project-shade"/>
          <div className="home-project-content">
            <span>{environment}</span>
            <h3>{name}</h3>
            <div className="home-project-footer"><p>{solution}</p><Link href={href} aria-label={`Explore ${name} solution`}><ArrowRight aria-hidden="true"/></Link></div>
          </div>
        </article>)}
      </div>
    </div>
  </section>
 </main><Footer/></div>}



