import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ChevronRight, FileText, MessageSquareText } from 'lucide-react';
import { notFound } from 'next/navigation';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { conferenceSystems } from '../../../../conference-systems';

export function generateStaticParams() {
  return Object.values(conferenceSystems).flatMap((system) =>
    system.products
      .filter((product) => product.slug)
      .map((product) => ({ systemType: system.slug, productSlug: product.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { systemType, productSlug } = await params;
  const system = conferenceSystems[systemType];
  const product = system?.products.find((item) => item.slug === productSlug);
  return product ? {
    title: product.seoTitle || `${product.model} ${product.name} | Synoveta`,
    description: product.metaDescription || product.description,
  } : {};
}

export default async function ConferenceProductPage({ params }) {
  const { systemType, productSlug } = await params;
  const system = conferenceSystems[systemType];
  const product = system?.products.find((item) => item.slug === productSlug);
  if (!system || !product || !product.features || !product.specifications) notFound();
  const relatedProducts = system.products
    .filter((item) => item.slug && item.slug !== product.slug)
    .slice(0, 3);

  return <><Header activePage='products'/><main className='conference-single-page'>
    <section className='conference-single-hero'>
      <div className='container'>
        <nav className='product-breadcrumb' aria-label='Breadcrumb'>
          <Link href='/products/'>Products</Link><ChevronRight size={13}/>
          <Link href='/products/conference-system/'>Conference System</Link><ChevronRight size={13}/>
          <Link href={`/products/conference-system/${system.slug}/`}>{system.shortName}</Link><ChevronRight size={13}/>
          <b>{product.model}</b>
        </nav>
        <div className='conference-single-hero-grid'>
          <div className='conference-single-copy'>
            <p className='eyebrow'>{product.brand || 'Synoveta'} · {system.shortName}</p>
            <span className='conference-single-role'>{product.role}</span>
            <h1>{product.name}</h1>
            <strong>{product.model}</strong>
            <p>{product.fullDescription || product.description}</p>
            <div className='conference-single-actions'>
              <a className='primary-btn' href='mailto:info@synoveta.com'><MessageSquareText size={16}/> Request product information</a>
              <a className='outline-btn' href='#technical-specifications'><FileText size={16}/> View specifications</a>
            </div>
          </div>
          <div className='conference-single-image'>
            {product.image && <Image src={product.image} alt={product.imageAlt || `Synoveta ${product.model} ${product.name}`} fill priority sizes='(max-width:760px) calc(100vw - 30px), 50vw'/>}
          </div>
        </div>
      </div>
    </section>

    <section className='conference-features-section'>
      <div className='container'>
        <div className='conference-detail-heading'><p className='eyebrow'>Product capabilities</p><h2>Key features</h2></div>
        <div className='conference-feature-grid'>
          {product.features.map((feature) => <div className='conference-feature-item' key={feature}><span><Check/></span><p>{feature}</p></div>)}
        </div>
      </div>
    </section>

    <section className='conference-spec-section' id='technical-specifications'>
      <div className='container'>
        <div className='conference-detail-heading'><p className='eyebrow'>Product data</p><h2>Technical specifications</h2></div>
        <div className='conference-spec-table' role='table' aria-label={`${product.model} technical specifications`}>
          <div className='conference-spec-head' role='row'><span role='columnheader'>Specification</span><span role='columnheader'>Value</span></div>
          {product.specifications.map(([label, value]) => <div className='conference-spec-row' role='row' key={label}><strong role='cell'>{label}</strong><span role='cell'>{value}</span></div>)}
        </div>
      </div>
    </section>

    {relatedProducts.length > 0 && <section className='conference-related-section'>
      <div className='container'>
        <div className='conference-detail-heading'><p className='eyebrow'>Continue exploring</p><h2>Related conference products</h2></div>
        <div className='conference-product-grid'>
          {relatedProducts.map((related) => <article className='conference-product-card' key={related.model}>
            <div className='conference-product-image'>
              <span className='conference-product-role'>{related.role}</span>
              {related.image && <Image src={related.image} alt={related.imageAlt || `Synoveta ${related.model} ${related.name}`} fill sizes='(max-width:500px) 100vw,(max-width:960px) 50vw,33vw'/>}
            </div>
            <div className='conference-product-copy'>
              <span className='conference-product-model'>{related.model}</span>
              <h3>{related.name}</h3>
              <p>{related.description}</p>
              <Link className='conference-product-link' href={`/products/conference-system/${system.slug}/${related.slug}/`}>View product details <ArrowRight/></Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>}

    <section className='conference-product-footer'><div className='container'><div className='conference-product-footer-card'>
      <div><p className='eyebrow'>Project support</p><h2>Specify the {product.model} for your project</h2><p>Contact Synoveta for product availability, system design assistance and project support.</p></div>
      <div><Link className='outline-btn' href={`/products/conference-system/${system.slug}/`}><ArrowLeft/> Back to {system.modelFamily}</Link><a className='primary-btn' href='mailto:info@synoveta.com'>Contact our team <ArrowRight/></a></div>
    </div></div></section>
  </main><Footer/></>;
}
