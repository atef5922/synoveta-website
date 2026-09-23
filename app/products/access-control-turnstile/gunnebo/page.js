import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ranges = [
  { name: "Tripod Turnstiles", slug: "tripod-turnstiles", copy: "Compact, reliable pedestrian access control for offices, transport hubs and public facilities." },
  { name: "Full-Height Turnstiles", slug: "full-height-turnstiles", copy: "High-security, full-height entrance control for restricted and perimeter-protected sites." },
];

export const metadata = { title: "Gunnebo Turnstiles | Synoveta", description: "Explore Gunnebo tripod and full-height turnstile solutions." };

export default function GunneboPage() {
  return <><Header activePage="products"/><main className="product-page"><div className="container">
    <Link className="back-link" href="/products/access-control-turnstile/"><ArrowLeft/> Back to Access Control &amp; Turnstile</Link>
    <div className="turnstile-heading"><p className="eyebrow">Gunnebo entrance control</p><h1>Turnstiles</h1><p className="lead">Choose the Gunnebo turnstile range that best matches your site and security requirements.</p></div>
    <div className="turnstile-range-grid">{ranges.map((range)=><article key={range.slug}><div className="turnstile-range-image"><Image src="/product-assets/Access Control & Turnstile.webp" alt={range.name} fill sizes="(max-width: 760px) 100vw, 50vw"/></div><div><h2>{range.name}</h2><p>{range.copy}</p><Link href={`/products/access-control-turnstile/gunnebo/${range.slug}/`}>View range <ArrowRight/></Link></div></article>)}</div>
  </div></main><Footer/></>;
}
