import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { gunneboRanges } from "../../../../gunnebo-products";

export function generateStaticParams(){return Object.keys(gunneboRanges).map((subcategory)=>({subcategory}));}
export async function generateMetadata({params}){const {subcategory}=await params;const range=gunneboRanges[subcategory];return range?{title:`${range.title} | Gunnebo | Synoveta`,description:range.copy}:{};}

export default async function GunneboRangePage({params}) {
  const {subcategory}=await params;
  const range=gunneboRanges[subcategory];
  if(!range)notFound();
  return <><Header activePage="products"/><main className="product-page"><div className="container">
    <Link className="back-link" href="/products/access-control-turnstile/gunnebo/"><ArrowLeft/> Back to Gunnebo Turnstiles</Link>
    <div className="turnstile-heading"><p className="eyebrow">Gunnebo entrance control</p><h1>{range.title}</h1><p className="lead">{range.copy}</p></div>
    <div className="gunnebo-product-grid">{range.products.map((product)=><article key={product.slug}><div className="gunnebo-product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><div className="gunnebo-product-body"><h2>{product.name}</h2><p>{product.summary}</p><Link href={`/products/access-control-turnstile/gunnebo/${subcategory}/${product.slug}/`}>View product <ArrowRight/></Link></div></article>)}</div>
  </div></main><Footer/></>;
}
