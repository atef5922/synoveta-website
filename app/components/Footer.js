import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { categories } from "../data";

export default function Footer() {
  return <footer id="contact" className="footer">
    <div className="container footer-grid">
      <div>
        <div className="footer-logo">SYNOVETA</div>
        <p>International technology assembly and solution provider, delivering reliable products and services through global partnership.</p>
      </div>
      <div>
        <h4>Quick links</h4>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/about">About</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h4>Product categories</h4>
        {categories.map((category) => <Link key={category.slug} href={`/products/${category.slug}`}>{category.title}</Link>)}
      </div>
      <div>
        <h4>Contact information</h4>
        <p className="contact-line"><MapPin/> <span><b>Italy Head Office</b><br/>Via Giovanni Durando, 39, 20158 Milano MI, Italy</span></p>
        <p className="contact-line"><MapPin/> <span><b>Singapore Office</b><br/>10 Anson Road, #10-11, International Plaza, Singapore 079903</span></p>
        <p className="contact-line"><Mail/> info@synoveta.com</p>
      </div>
    </div>
    <div className="container copyright">
      <span>&copy; {new Date().getFullYear()} SYNOVETA. All rights reserved.</span>
      <span>Privacy Policy &nbsp; | &nbsp; Terms of Use</span>
    </div>
  </footer>;
}
