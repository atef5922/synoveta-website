import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConferenceMeetingShowcase from "../../components/ConferenceMeetingShowcase";

const conferenceTypes = [
  {
    slug: "digital-wired-conference",
    name: "Digital Wired Conference",
    description: "Reliable, professional wired discussion systems for boardrooms, council chambers and formal meeting spaces.",
    image: "/Confeernce system/digital-wired- conference-system/digital-wired- conference-system.webp",
  },
  {
    slug: "wifi-wireless-conference",
    name: "WIFI Wireless Conference",
    description: "Flexible wireless discussion systems for modern meeting rooms, fast deployment and a clean table setup.",
    image: "/Confeernce system/wifi-wireless-conference-system/wifi-wireless-conference-system.webp",
  },
];

const conferenceFaqs = [
  ["What types of conference systems does Synoveta offer?", "Synoveta offers professional digital wired and wireless conference system solutions for boardrooms, council chambers, government facilities, corporate meeting spaces, training centres and other professional communication environments."],
  ["What is the difference between Synoveta wired and wireless conference systems?", "Synoveta wired systems are designed for permanent installations where stable connectivity and structured system architecture are priorities. Wireless systems provide greater deployment flexibility, reduced cabling and easier reconfiguration for modern meeting environments."],
  ["How do I choose between a wired and wireless conference system?", "The right system depends on room layout, participant capacity, installation conditions, required functionality and future expansion plans. Wired systems are commonly preferred for fixed infrastructure, while wireless systems are ideal where flexible seating and faster deployment are important."],
  ["Can Synoveta conference systems be configured for different project sizes?", "Yes. Conference system architecture can be configured according to participant numbers, room size, required functions and project scope, from executive boardrooms to larger professional meeting environments."],
  ["Can Synoveta conference systems support camera tracking?", "Selected system configurations can be integrated with compatible PTZ cameras to provide automatic speaker tracking and improved visual coverage during meetings and hybrid conference applications."],
  ["Can Synoveta conference systems integrate with professional AV systems?", "Yes. Conference solutions can be integrated with compatible audio systems, displays, PTZ cameras, video conferencing platforms, recording systems and central control solutions to create a complete meeting-room environment."],
  ["Are Synoveta conference systems suitable for international projects?", "Yes. Synoveta conference solutions are designed for professional deployments across different markets and can be configured according to project requirements, installation environments and regional system needs."],
  ["How can I select the right Synoveta conference solution for a project?", "Share the room capacity, participant count, preferred wired or wireless architecture, required functions and AV integration needs. A suitable Synoveta system configuration can then be developed around the project."],
];
export const metadata = {
  title: "Conference System Series | Synoveta",
  description: "Explore Synoveta digital wired and WIFI wireless conference system solutions.",
};

export default function ConferenceCatalogPage() {
  return <><Header activePage="products"/><main className="conference-catalog-page">
    <section className="conference-catalog-hero">
      <Image src="/Confeernce system/Conference-System-banner.webp" alt="Synoveta professional wired and wireless conference systems" fill priority sizes="100vw"/>
      <div className="conference-catalog-hero-content"><div className="conference-catalog-hero-copy">
        <p><span/> Synoveta Conference System</p>
        <h1>Professional<br/>Conference Systems</h1>
        <div className="conference-catalog-hero-lead">Advanced wired and wireless solutions for clear,<br/> reliable and efficient communication.</div>
        <div className="conference-catalog-hero-actions">
          <Link href="/products/conference-system/digital-wired-conference/">Explore Wired Systems <ArrowRight/></Link>
          <Link href="/products/conference-system/wifi-wireless-conference/">Explore Wireless Systems <ArrowRight/></Link>
        </div>
      </div></div>
    </section>
    <section className="conference-catalog-ranges"><div className="container">
      <div className="turnstile-heading"><p className="eyebrow">Synoveta conference system</p><h1>Choose Your Conference System</h1><p className="lead">Select a digital wired or Wi-Fi wireless conference system to match your meeting space and installation requirements.</p></div>
      <div className="turnstile-range-grid conference-type-grid">{conferenceTypes.map((type, index)=><Link className="conference-type-card" href={`/products/conference-system/${type.slug}/`} key={type.slug} aria-label={`View ${type.name}`}><article>
        <div className="turnstile-range-image conference-type-image"><Image src={type.image} alt={`${type.name} system`} fill priority={index === 0} sizes="(max-width: 760px) 100vw, 50vw"/></div>
        <div><h2>{type.name}</h2><p>{type.description}</p><span className="conference-card-action">View system <ArrowRight/></span></div>
      </article></Link>)}</div>
    </div></section>
    <ConferenceMeetingShowcase/>
    <section className="conference-faq-section"><div className="container conference-faq-layout">
      <div className="conference-faq-heading"><p className="eyebrow">Conference system support</p><h2>Frequently Asked Questions</h2><p>Find quick answers about selecting, configuring and integrating Synoveta conference systems.</p></div>
      <div className="conference-faq-list">{conferenceFaqs.map(([question, answer], index) => <details className="conference-faq-item" key={question} open={index === 0}><summary><span>{question}</span><span className="conference-faq-icon" aria-hidden="true"/></summary><div className="conference-faq-answer"><p>{answer}</p></div></details>)}</div>
    </div></section>
  </main><Footer/></>;
}
