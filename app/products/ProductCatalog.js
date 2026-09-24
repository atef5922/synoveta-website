"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, Grid3X3, LockKeyhole, Search, Users, X } from "lucide-react";

const icons = {
  "access-control-turnstile": LockKeyhole,
  "conference-system": Users,
  "pa-audio-system": AudioLines,
  "led-display-solution": Grid3X3,
};

export default function ProductCatalog({ products }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleProducts = useMemo(() => {
    const filtered = deferredQuery
      ? products.filter(({ title, copy }) => `${title} ${copy}`.toLowerCase().includes(deferredQuery))
      : products;
    return sort === "name"
      ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      : filtered;
  }, [deferredQuery, products, sort]);

  return <div className="catalog-main">
    <div className="catalog-tools">
      <span aria-live="polite">Showing {visibleProducts.length} of {products.length} product categories</span>
      <label className="catalog-search">
        <span className="sr-only">Search product categories</span>
        <input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search product categories"/>
        {query ? <button type="button" aria-label="Clear search" onClick={()=>setQuery("")}><X/></button> : <Search aria-hidden="true"/>}
      </label>
      <select value={sort} onChange={(event)=>setSort(event.target.value)} aria-label="Sort product categories">
        <option value="featured">Sort by: Featured</option>
        <option value="name">Sort by: Name</option>
      </select>
    </div>
    {visibleProducts.length ? <div className="catalog-grid">{visibleProducts.map(({title,image,copy,slug})=>{
      const Icon = icons[slug] || Grid3X3;
      return <article key={title}><div className="catalog-image"><Image src={image} alt={title} fill sizes="(max-width:500px) 100vw, (max-width:760px) 50vw, (max-width:1050px) 33vw, 25vw"/></div><div className="catalog-icon"><Icon aria-hidden="true"/></div><div className="catalog-body"><h2>{title}</h2><p>{copy}</p><Link href={`/products/${slug}/`}>View Products <ArrowRight aria-hidden="true"/></Link></div></article>;
    })}</div> : <div className="catalog-empty"><Search aria-hidden="true"/><h2>No matching categories</h2><p>Try a different product name or clear your search.</p><button type="button" onClick={()=>setQuery("")}>Clear search</button></div>}
  </div>;
}
