import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, Building2, ChevronRight, Factory, Grid3X3, LockKeyhole, MonitorCog, PackageOpen, ShieldCheck, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCatalog from "./ProductCatalog";
import "./products.css";
import { brandHref, brandName, categoryBrands, subcategoryHref } from "../product-navigation";

const products = [
  { title:"Access Control & Turnstile", short:"Access Control & Turnstile", image:"/product-assets/Access Control & Turnstile.webp", copy:"Turnstile gates, speed gates, flap barriers, swing barriers and access control devices.", slug:"access-control-turnstile", icon:LockKeyhole, brands:categoryBrands["access-control-turnstile"] },
  { title:"Conference System", short:"Conference System", image:"/product-assets/Conference System.webp", copy:"Digital conference systems, conference microphones, video conferencing solutions.", slug:"conference-system", icon:Users },
  { title:"PA & Audio System", short:"PA & Audio System", image:"/product-assets/PA & Audio system.webp", copy:"Public address systems, amplifiers, speakers, microphones and professional audio solutions.", slug:"pa-audio-system", icon:AudioLines },
  { title:"LED Display Solution", short:"LED Display Solution", image:"/product-assets/LED diplay solution.webp", copy:"Indoor & outdoor LED displays, rental solutions, LED modules and control systems.", slug:"led-display-solution", icon:Grid3X3 },
];
const assurances=[["European Standards","Quality and safety compliant with international standards.",ShieldCheck],["Global Assembly","Assembly & integration facilities in Italy and China.",Building2],["Project Support","Tender support, documentation and technical assistance.",MonitorCog],["Trusted Worldwide","Serving partners and customers in 70+ countries.",Users]];

export const metadata={title:"Products | Synoveta",description:"Explore Synoveta technology products and solution categories."};
export default function ProductsPage(){return <><Header activePage="products"/><main className="products-listing">
  <section className="products-banner"><div className="container"><div className="products-breadcrumb"><Link href="/">Home</Link><span>›</span><span>Products</span></div><h1>Products</h1><p>High-quality technology products assembled and integrated<br/>in Italy &amp; China to meet global demands.</p></div><ProductGlobe/></section>
  <section className="products-catalog container"><aside className="catalog-sidebar"><div className="category-menu"><h2>Product Categories</h2><Link className="selected" href="/products/"><Grid3X3/>All Products<ChevronRight/></Link>{products.map(({short,slug,icon:Icon,brands})=>{const categorySlug=slug.replace("/bosch","");return <div className="sidebar-category" key={short}><Link href={`/products/${slug}/`}><Icon/>{short}<ChevronRight/></Link>{brands&&<div className="sidebar-brands">{brands.map(brand=><div className="sidebar-brand" key={brandName(brand)}><Link href={brandHref(categorySlug,brand)}>{brandName(brand)}<ChevronRight/></Link>{typeof brand!=="string"&&<div className="sidebar-subcategories">{brand.subcategories.map(subcategory=><Link key={subcategory} href={subcategoryHref(categorySlug,brand,subcategory)}>{subcategory}<ChevronRight/></Link>)}</div>}</div>)}</div>}</div>})}<Link href="/contact/"><PackageOpen/>Accessories &amp; Others<ChevronRight/></Link></div><div className="custom-card"><h2>Looking for<br/>custom solutions?</h2><p>We provide OEM/ODM assembly and tailored solutions for your projects.</p><Link href="/contact/">Contact our team <ArrowRight/></Link><Factory/></div></aside>
    <ProductCatalog products={products.map(({icon,brands,short,...product})=>product)}/>
  </section>
  <section className="product-assurances container">{assurances.map(([title,copy,Icon])=><article key={title}><Icon/><div><b>{title}</b><span>{copy}</span></div></article>)}</section>
  </main><Footer/></>}

function ProductGlobe(){return <svg className="products-globe" viewBox="0 0 700 250" aria-hidden="true"><defs><pattern id="productDots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5"/></pattern></defs><path d="M180 32l62-22 95 17 50 37-24 43-66 1-30 47-70-26-47-50zM385 30l95-18 113 30 72 58-30 45-92-5-54 51-73-29-38-72z" fill="url(#productDots)"/><g fill="none"><ellipse cx="400" cy="130" rx="285" ry="112"/><ellipse cx="410" cy="128" rx="205" ry="88"/><path d="M120 90Q370 10 675 115M145 175Q390 80 660 175M290 15Q350 125 305 230M510 12Q445 118 525 230"/></g></svg>}
