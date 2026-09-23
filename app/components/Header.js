import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Send, X } from "lucide-react";
import { categories } from "../data";
import { brandHref, brandName, categoryBrands, subcategoryHref } from "../product-navigation";

const categoryHref = (slug) => `/products/${slug}`;

export default function Header({ activePage = "home", compact = true }) {
  return (
    <>
      <header className={`header${compact ? " header-compact" : ""}`}>
        <div className="container nav-wrap">
          <Link href="/" className="brand brand-image" aria-label="Synoveta home"><Image src="/site-icon.png" alt="Synoveta" width={165} height={16} priority/></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link className={activePage === "home" ? "active" : undefined} href="/">Home</Link>
            <div className={`dropdown ${activePage === "products" ? "active" : ""}`}>
              <Link href="/products" className="dropdown-trigger">Products <ChevronDown size={14}/></Link>
              <div className="dropdown-menu">{categories.map((item) => categoryBrands[item.slug] ? <div className="dropdown-group" key={item.slug}><Link className="dropdown-parent" href={categoryHref(item.slug)}>{item.title} <ChevronDown size={13}/></Link><div className="brand-submenu">{categoryBrands[item.slug].map((brand)=><div className="brand-menu-item" key={brandName(brand)}><Link className="brand-menu-link" href={brandHref(item.slug,brand)}>{brandName(brand)} {typeof brand !== "string" && <ChevronDown size={13}/>}</Link>{typeof brand !== "string" && <div className="subcategory-submenu">{brand.subcategories.map((subcategory)=><Link key={subcategory} href={subcategoryHref(item.slug,brand,subcategory)}>{subcategory}</Link>)}</div>}</div>)}</div></div> : <Link key={item.slug} href={categoryHref(item.slug)}>{item.title}</Link>)}</div>
            </div>
            <Link className={activePage === "solutions" ? "active" : undefined} href="/solutions">Solutions <ChevronDown size={14}/></Link>
            <Link className={activePage === "about" ? "active" : undefined} href="/about">About</Link><Link className={activePage === "partners" ? "active" : undefined} href="/partners">Partners</Link><Link className={activePage === "contact" ? "active" : undefined} href="/contact">Contact</Link>
          </nav>
          <Link className="quote-btn" href="/contact"><Send size={16}/> Get a quote</Link>
          <details className="mobile-menu"><summary><Menu className="menu-open"/><X className="menu-close"/></summary><div className="mobile-panel"><Link href="/">Home</Link><b>Products</b>{categories.map((item)=><div className="mobile-product-link" key={item.slug}><Link href={categoryHref(item.slug)}>{item.title}</Link>{categoryBrands[item.slug] && <div className="mobile-brands">{categoryBrands[item.slug].map((brand)=><div className="mobile-brand" key={brandName(brand)}><Link href={brandHref(item.slug,brand)}>{brandName(brand)}</Link>{typeof brand !== "string" && brand.subcategories.map((subcategory)=><Link className="mobile-subcategory" key={subcategory} href={subcategoryHref(item.slug,brand,subcategory)}>{subcategory}</Link>)}</div>)}</div>}</div>)}<Link href="/solutions">Solutions</Link><Link href="/about">About</Link><Link href="/partners">Partners</Link><Link href="/contact">Contact</Link></div></details>
        </div>
      </header>
    </>
  );
}
