import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Users } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { gunneboRanges } from "../../gunnebo-products";
import { boonedamRanges } from "../../boonedam-ranges";

const productGroups = [
  { slug: "gunnebo", ranges: gunneboRanges },
  { slug: "boonedam", ranges: boonedamRanges },
];
const total = productGroups.reduce((sum,group)=>sum+Object.values(group.ranges).reduce((count,range)=>count+range.products.length,0),0);
export const metadata={title:"Access Control & Turnstile Products | Synoveta",description:"Explore Synoveta tripod and full-height turnstile products."};

export default function AccessControlCatalog(){return <><Header activePage="products"/><main className="bosch-catalog"><section className="catalog-hero"><div className="container catalog-hero-inner"><div><p className="eyebrow">Secure entrance solutions</p><h1>Access Control &amp; Turnstile</h1><p>Explore Synoveta&apos;s complete range of entrance-control products for secure and efficient pedestrian access.</p><div className="catalog-benefits"><span><ShieldCheck/> Synoveta quality</span><span><LockKeyhole/> Secure access</span><span><Users/> Efficient pedestrian flow</span></div></div><div className="conference-hero-product"><Image src="/product-assets/Access Control & Turnstile.webp" alt="Access control and turnstiles" fill priority sizes="(max-width:760px) 85vw,34vw"/></div></div></section><section className="catalog-body"><div className="container"><div className="catalog-heading"><div><p className="eyebrow">Complete product range</p><h2>All turnstile products</h2></div><p>{total} Synoveta products</p></div><div className="all-brand-products"><section className="bosch-group"><div className="group-title"><div><h3>Synoveta</h3><span>{total} products</span></div></div><div className="bosch-grid">{productGroups.flatMap(group=>Object.entries(group.ranges).flatMap(([subcategory,range])=>range.products.map(product=><article className="bosch-card" key={`${group.slug}-${product.slug}`}><Link className="bosch-card-image" href={`/products/access-control-turnstile/${group.slug}/${subcategory}/${product.slug}/`}><Image src={product.image} alt={product.name} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,25vw"/></Link><div className="bosch-card-copy"><span>Synoveta · {range.title}</span><h4><Link href={`/products/access-control-turnstile/${group.slug}/${subcategory}/${product.slug}/`}>{product.name}</Link></h4><p>{product.summary}</p><Link className="card-link" href={`/products/access-control-turnstile/${group.slug}/${subcategory}/${product.slug}/`}>View details <ArrowRight/></Link></div></article>)))}</div></section></div><div className="catalog-cta"><div><CheckCircle2/><span><b>Need help choosing?</b><small>Our entrance-control specialists can help select the right turnstile for your project.</small></span></div><a className="primary-btn" href="mailto:info@synoveta.com">Talk to an expert <ArrowRight/></a></div></div></section></main><Footer/></>}
