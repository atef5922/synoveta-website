import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "../../../../../components/Header";
import Footer from "../../../../../components/Footer";
import { gunneboProductParams, gunneboRanges } from "../../../../../gunnebo-products";

export function generateStaticParams(){return gunneboProductParams;}
export async function generateMetadata({params}){const {subcategory,productSlug}=await params;const product=gunneboRanges[subcategory]?.products.find((item)=>item.slug===productSlug);return product?{title:`${product.name} | Synoveta`,description:product.summary}:{};}

export default async function GunneboProductPage({params}) {
  const {subcategory,productSlug}=await params;
  const range=gunneboRanges[subcategory];
  const product=range?.products.find((item)=>item.slug===productSlug);
  if(!product)notFound();
  return <><Header activePage="products"/><main className="product-page"><div className="container">
    <Link className="back-link" href={`/products/access-control-turnstile/gunnebo/${subcategory}/`}><ArrowLeft/> Back to {range.title}</Link>
    <div className="product-hero"><div className="product-hero-image gunnebo-detail-image"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 52vw"/></div><div><p className="eyebrow">Synoveta · {range.title}</p><h1>{product.name}</h1><p className="lead">{product.summary}</p><ul><li><CheckCircle2/> Reliable pedestrian access control</li><li><CheckCircle2/> Access-system integration ready</li><li><CheckCircle2/> Project supply and technical support</li></ul><a href="mailto:info@synoveta.com" className="primary-btn">Request product information <ArrowRight/></a></div></div>
  </div></main><Footer/></>;
}
