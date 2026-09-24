import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquareText } from 'lucide-react';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { conferenceSystems, conferenceSystemSlugs } from '../../../conference-systems';

export function generateStaticParams() {
  return conferenceSystemSlugs.map((systemType) => ({ systemType }));
}

export async function generateMetadata({ params }) {
  const { systemType } = await params;
  const type = conferenceSystems[systemType];
  return type ? { title: `${type.name} | Synoveta`, description: type.description } : {};
}

export default async function ConferenceTypePage({ params }) {
  const { systemType } = await params;
  const type = conferenceSystems[systemType];
  if (!type) notFound();

  const alternate = conferenceSystems[
    systemType === 'digital-wired-conference'
      ? 'wifi-wireless-conference'
      : 'digital-wired-conference'
  ];

  return <><Header activePage='products'/><main className='conference-detail-page'>
    <section className='conference-detail-hero'>
      <div className='container'>
        <nav className='product-breadcrumb' aria-label='Breadcrumb'>
          <Link href='/products/'>Products</Link><ChevronRight size={13}/>
          <Link href='/products/conference-system/'>Conference System</Link><ChevronRight size={13}/>
          <b>{type.shortName}</b>
        </nav>
        <div className='conference-detail-hero-inner'>
          <div className='conference-detail-copy'>
            <p className='eyebrow'>{type.eyebrow}</p>
            <h1>{type.name}</h1>
            <p>{type.description}</p>
            <span className='conference-model-family'>{type.modelFamily}</span>
          </div>
          <div className='conference-hero-art'>
            <Image src={type.heroImage} alt={`${type.name} controller and conference units`} fill priority sizes='(max-width:700px) calc(100vw - 30px), 52vw'/>
          </div>
        </div>
      </div>
    </section>

    <section className='conference-overview'>
      <div className='container conference-overview-grid'>
        <div className='conference-section-heading'>
          <p className='eyebrow'>System overview</p>
          <h2>A complete discussion system for the meeting room</h2>
          <p>{type.overview}</p>
        </div>
        <div className='conference-highlights'>
          {type.highlights.map((highlight) => <div className='conference-highlight' key={highlight}><CheckCircle2/><span>{highlight}</span></div>)}
        </div>
      </div>
    </section>

    <section className='conference-products-section'>
      <div className='container'>
        <div className='conference-products-header'>
          <div><p className='eyebrow'>System components</p><h2>Explore the {type.modelFamily}</h2></div>
          <span className='conference-products-count'>{type.products.length} models</span>
        </div>
        <div className='conference-product-grid'>
          {type.products.map((product) => <article className='conference-product-card' key={product.model}>
            <div className='conference-product-image'>
              <span className='conference-product-role'>{product.role}</span>
              {product.image && <Image src={product.image} alt={product.imageAlt || `Synoveta ${product.model} ${product.name}`} fill sizes='(max-width:500px) 100vw,(max-width:960px) 50vw,33vw'/>}
            </div>
            <div className='conference-product-copy'>
              <span className='conference-product-model'>{product.model}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.slug && <Link className='conference-product-link' href={`/products/conference-system/${type.slug}/${product.slug}/`}>View product details <ArrowRight/></Link>}
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className='conference-next-section'>
      <div className='container'><div className='conference-next-card'>
        <div><p className='eyebrow'>Plan your conference room</p><h2>Need help selecting a system?</h2><p>Talk to Synoveta about your room layout, participant capacity and project requirements.</p></div>
        <div className='conference-next-actions'>
          <Link className='outline-btn' href={`/products/conference-system/${alternate.slug}/`}>View {alternate.shortName} <ArrowRight/></Link>
          <a className='primary-btn' href='mailto:info@synoveta.com'><MessageSquareText size={16}/> Talk to an expert</a>
        </div>
      </div></div>
    </section>
  </main><Footer/></>;
}
