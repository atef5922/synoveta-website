import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./contact.css";

export const metadata = {
  title: "Contact Us | Synoveta",
  description: "Contact Synoveta for product inquiries, project consultation, partnerships and technical support.",
};

const offices = [
  {
    title: "Italy Head Office",
    city: "Milan, Italy",
    copy: "Global Management & European Operations",
  },
  {
    title: "Asia Regional Office",
    city: "Singapore",
    copy: "Regional Sales, Support & Partner Operations",
  },
];

const helpTeams = [
  {
    title: "Sales & Projects",
    copy: "For product inquiries, tenders and project requirements.",
    label: "Contact Sales",
    href: "mailto:sales@synoveta.com",
  },
  {
    title: "Partnerships",
    copy: "For distribution and regional cooperation opportunities.",
    label: "Contact Partnerships",
    href: "mailto:info@synoveta.com?subject=Partnership%20Inquiry",
  },
  {
    title: "Technical Support",
    copy: "For technical assistance and product support.",
    label: "Contact Support",
    href: "mailto:support@synoveta.com",
  },
];

export default function ContactPage() {
  return <>
    <Header activePage="contact" />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="container contact-hero-inner">
          <div className="contact-hero-copy">
            <p className="contact-kicker">Contact us</p>
            <h1>Let&apos;s Build Something<br/><em>Better Together.</em></h1>
            <p className="contact-lead">Connect with SYNOVETA for product inquiries, project consultation, partnership opportunities and technical support. Our global team is ready to help you turn ideas into reliable solutions.</p>
          </div>
          <div className="contact-hero-note"><span />Reliable technology<br/>A brighter tomorrow</div>
        </div>
      </section>

      <section className="contact-main container">
        <div className="contact-form-card">
          <div className="contact-card-heading">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and our team will get back to you shortly.</p>
          </div>
          <form action="mailto:info@synoveta.com" method="post" encType="text/plain">
            <label>Full Name <span>*</span><input name="name" required placeholder="Your full name" autoComplete="name" /></label>
            <label>Company Name <span>*</span><input name="company" required placeholder="Your company name" autoComplete="organization" /></label>
            <label>Business Email <span>*</span><input name="email" type="email" required placeholder="name@company.com" autoComplete="email" /></label>
            <label>Phone Number<input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" /></label>
            <label>Country / Region <span>*</span><select name="country" required defaultValue=""><option value="" disabled>Select your country</option><option>Bangladesh</option><option>Italy</option><option>Singapore</option><option>China</option><option>Other</option></select></label>
            <label>Inquiry Type <span>*</span><select name="inquiry" required defaultValue=""><option value="" disabled>Select an inquiry type</option><option>Sales & Projects</option><option>Partnerships</option><option>Technical Support</option><option>General Inquiry</option></select></label>
            <label className="contact-message-field">Message <span>*</span><textarea name="message" required placeholder="Tell us about your inquiry, project or specific requirements..." /></label>
            <button type="submit">Send Message <ArrowRight /></button>
          </form>
          <p className="contact-privacy">By submitting this form, you agree to our <span>Privacy Policy</span>. We will only use your information to respond to your inquiry.</p>
        </div>

        <aside className="contact-info-card">
          <div className="contact-card-heading"><h2>Contact Information</h2><p>Reach out to our offices or contact the right team directly.</p></div>
          <div className="contact-location"><h3>Global Headquarters</h3><p>SYNOVETA Technology Co., Ltd.<br/>Via Giovanni Durando, 39<br/>20158 Milan, Italy</p></div>
          <div className="contact-location"><h3>Asia Regional Office</h3><p>10 Anson Road, #10-11<br/>International Plaza<br/>Singapore 079903</p></div>
          <div className="contact-details">
            <div><b>Email</b><a href="mailto:info@synoveta.com">info@synoveta.com</a></div>
            <div><b>Business Inquiries</b><a href="mailto:sales@synoveta.com">sales@synoveta.com</a></div>
            <div><b>Technical Support</b><a href="mailto:support@synoveta.com">support@synoveta.com</a></div>
          </div>
          <div className="contact-info-signoff">Global solutions<br/>Lasting partnerships <span /></div>
        </aside>
      </section>

      <section className="contact-offices">
        <div className="container">
          <div className="contact-section-heading"><p>Our offices</p><h2>Our <em>Global</em> Presence</h2><span>With offices in Europe and Asia, SYNOVETA delivers local support and global capabilities.</span></div>
          <div className="contact-office-grid">{offices.map((office) => <article key={office.title}><i aria-hidden="true"/><div><h3>{office.title}</h3><b>{office.city}</b><p>{office.copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="contact-help container">
        <div className="contact-section-heading"><p>Get in touch</p><h2>How Can We Help?</h2><span>Contact the right team for a faster response.</span></div>
        <div className="contact-help-grid">{helpTeams.map((team) => <article key={team.title}><i aria-hidden="true"/><div><h3>{team.title}</h3><p>{team.copy}</p><a href={team.href}>{team.label} <ArrowRight /></a></div></article>)}</div>
      </section>
    </main>
    <Footer />
  </>;
}
