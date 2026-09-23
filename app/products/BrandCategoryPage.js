import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { categories } from "../data";

export default function BrandCategoryPage({ categorySlug, brand }) {
  const category = categories.find((item) => item.slug === categorySlug);
  return <><Header/><main className="product-page"><div className="container">
    <Link className="back-link" href={`/products/${categorySlug}/`}><ArrowLeft/> Back to {category.title}</Link>
    <div className="product-hero"><div className={`product-hero-image ${brand === "Daktronics" ? "contain-image" : ""}`}><Image src={category.image} alt={`${brand} ${category.title}`} fill priority sizes="(max-width: 800px) 100vw, 52vw"/></div><div>
      <p className="eyebrow">{brand} product range</p><h1>{brand} {category.title}</h1><p className="lead">Explore {brand} products and project solutions for {category.title.toLowerCase()}.</p>
      <ul><li><CheckCircle2/> Professional product selection</li><li><CheckCircle2/> Project supply and integration support</li><li><CheckCircle2/> Global delivery and after-sales assistance</li></ul>
      <a href="mailto:info@synoveta.com" className="primary-btn">Request product information <ArrowRight/></a>
    </div></div>
  </div></main><Footer/></>;
}
