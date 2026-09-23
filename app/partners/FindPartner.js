"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { countries, partners } from "./partnersData";

export default function FindPartner() {
  const [country, setCountry] = useState("All countries");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const results = useMemo(() => {
    const search = query.trim().toLowerCase();
    return partners
      .filter((partner) =>
        (country === "All countries" || partner.country === country) &&
        (!search || [partner.name, partner.country, partner.address].some((value) => value.toLowerCase().includes(search)))
      )
      .sort((a, b) =>
        a.country.localeCompare(b.country, "en", { sensitivity: "base" }) ||
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
  }, [country, query]);

  const filtering = country !== "All countries" || query.trim();
  const expanded = showAll || Boolean(filtering);

  return <section id="find-partner" className="find-partner-card">
    <div className="find-partner-head"><div className="find-partner-icon"><Search/></div><div><p>Partner directory</p><h2>Find a Partner</h2><span>Search our distribution partners by country, company or address.</span></div></div>
    <div className="partner-filters">
      <label>Country<select value={country} onChange={(event) => setCountry(event.target.value)}><option>All countries</option>{countries.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>Company or location<div className="partner-search"><Search/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search company, country or address"/></div></label>
    </div>
    <div className="partner-result-bar"><span><SlidersHorizontal/> Matching partners</span><b>{results.length}</b></div>
    <div className={`partner-results${expanded ? " expanded" : ""}`}>
      {results.map((partner) => <article className="partner-result" key={`${partner.country}-${partner.name}`}>
        <div className="partner-result-top"><span className="partner-initial">{partner.name.charAt(0)}</span><div><h3>{partner.name}</h3><p>{partner.type}</p></div></div>
        <div className="partner-address"><MapPin/><span><b>{partner.country}</b>{partner.address}</span></div>
        <span className="partner-status">Distribution partner</span>
      </article>)}
      {!results.length && <div className="partner-empty"><Search/><b>No partner found</b><span>Try another country, company name or address.</span></div>}
    </div>
    {!filtering && <button className="view-all-partners" type="button" onClick={() => setShowAll((value) => !value)}>{showAll ? "Show less" : "View all partners"}</button>}
  </section>;
}

