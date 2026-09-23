import Image from "next/image";
import { ArrowRight, CheckCircle2, Headphones, ShieldCheck, Volume2 } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "PA & Audio System Solutions | Synoveta",
  description: "Professional public address and audio solutions from Synoveta.",
};

export default function PaAudioCatalog() {
  return <><Header activePage="products"/><main className="bosch-catalog">
    <section className="catalog-hero"><div className="container catalog-hero-inner"><div><p className="eyebrow">Professional public address</p><h1>PA &amp; Audio System</h1><p>Clear, reliable public address and professional audio solutions designed for your project requirements.</p><div className="catalog-benefits"><span><ShieldCheck/> Reliable performance</span><span><Volume2/> Clear, balanced audio</span><span><Headphones/> Expert support</span></div></div><div className="conference-hero-product"><Image src="/product-assets/PA & Audio system.webp" alt="Professional PA and audio system" fill priority sizes="(max-width:760px) 85vw,34vw"/></div></div></section>
    <section className="catalog-body"><div className="container"><div className="catalog-heading"><div><p className="eyebrow">Project-focused solutions</p><h2>Audio systems built for your space</h2></div><p>Contact our team for product selection and system design.</p></div><div className="catalog-cta"><div><CheckCircle2/><span><b>Planning a PA or audio system?</b><small>Our specialists can help design the right solution for your project.</small></span></div><a className="primary-btn" href="mailto:info@synoveta.com">Talk to an expert <ArrowRight/></a></div></div></section>
  </main><Footer/></>;
}
