import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { boonedamRanges } from "../../../boonedam-ranges";

export const metadata = { title: "Synoveta Turnstiles", description: "Explore Synoveta tripod and full-height turnstile solutions." };

export default function BoonedamPage() {
  return <><Header activePage="products"/><main className="product-page"><div className="container">
    <Link className="back-link" href="/products/access-control-turnstile/"><ArrowLeft/> Back to Access Control &amp; Turnstile</Link>
    <div className="turnstile-heading"><p className="eyebrow">Synoveta entrance control</p><h1>Turnstiles</h1><p className="lead">Choose the Synoveta turnstile range that best matches your site and security requirements.</p></div>
    <div className="turnstile-range-grid">{Object.entries(boonedamRanges).map(([slug,range])=><article key={slug}><div className="turnstile-range-image contain-range-image"><Image src={range.products[0].image} alt={range.title} fill sizes="(max-width: 760px) 100vw, 50vw"/></div><div><h2>{range.title}</h2><p>{range.copy}</p><Link href={`/products/access-control-turnstile/boonedam/${slug}/`}>View range <ArrowRight/></Link></div></article>)}</div>
  </div></main><Footer/></>;
}
