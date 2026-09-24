import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, GraduationCap, Globe2, Handshake, Headphones, Landmark, ShieldCheck, TrainFront, Users, Wrench } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeCompanyOverview, HomeGlobalPresence } from "./components/HomeCompanySections";
import "./home-company.css";
import HomeVideoHero from "./components/HomeVideoHero";
import "./home-hero.css";
import { categories } from "./data";

const sectors=[{name:"Corporate",copy:"Smart meeting and office solutions",icon:Building2},{name:"Government",copy:"Secure and reliable public solutions",icon:Landmark},{name:"Education",copy:"Advanced learning and campus solutions",icon:GraduationCap},{name:"Transport",copy:"Efficient & safe transportation solutions",icon:TrainFront},{name:"Industrial",copy:"Robust solutions for industrial applications",icon:Factory},{name:"Customized / OEM",copy:"Tailored solutions as per your needs",icon:Wrench}];
const reasons=[{name:"International Quality Standards",icon:ShieldCheck},{name:"Global Partner Network",icon:Users},{name:"Flexible OEM/ODM & Assembly",icon:Handshake},{name:"Timely Delivery Worldwide",icon:Globe2},{name:"Dedicated Support & After Sales",icon:Headphones}];
const globalPartners=[{file:"novastar.png",name:"Novastar"},{file:"Colorlight-logo.webp",name:"Colorlight"},{file:"Bosch.png",name:"Bosch"},{file:"Samsung-logo.png",name:"Samsung"}];

export default function Home(){return <div className="home-landing"><Header activePage="home"/><main>
  <HomeVideoHero/>
  <HomeCompanyOverview/>
  <section id="products" className="section"><div className="container"><div className="section-heading"><p>Explore our range</p><h2>Our Core Product Categories</h2><span/></div><div className="product-grid">{categories.map((item)=><article className="product-card" key={item.slug}><div className="product-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw, 20vw"/></div><div className="product-info"><h3>{item.title}</h3><p>{item.description}</p><Link href={`/products/${item.slug}`}>View products <ArrowRight/></Link></div></article>)}</div></div></section>
  <section id="solutions" className="section sectors"><div className="container"><div className="section-heading"><p>Designed for real-world needs</p><h2>Intelligent Solutions For Every Sector</h2><span/></div><div className="sector-grid">{sectors.map(({name,copy,icon:Icon})=><article key={name}><Icon/><h3>{name}</h3><p>{copy}</p></article>)}</div></div></section>
  <section className="reasons"><div className="container"><div className="section-heading light"><h2>Why Partners Choose Synoveta</h2><span/></div><div className="reason-grid">{reasons.map(({name,icon:Icon})=><div key={name}><Icon/><b>{name}</b></div>)}</div></div></section>
  <HomeGlobalPresence/>
  <section id="about" className="home-partners"><div className="container"><div className="home-partners-title"><h2>Our Global Partners</h2><span/></div><div className="home-partners-row">{globalPartners.map(({file,name})=><div className="home-partner-logo" key={file}><Image src={`/Partners page/Partners logo/${file}`} alt={`${name} logo`} fill sizes="190px"/></div>)}</div></div></section>
 </main><Footer/></div>}



