"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { partners } from "./partnersData";

export default function PartnerMap() {
  const mapElement = useRef(null);

  useEffect(() => {
    let map;
    let cancelled = false;

    async function createMap() {
      const L = (await import("leaflet")).default;
      const container = mapElement.current;
      if (cancelled || !container || container._leaflet_id) return;

      map = L.map(container, { scrollWheelZoom: false, zoomControl: true, worldCopyJump: true, maxBounds: [[-85, -180], [85, 180]], maxBoundsViscosity: 1 });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap contributors", maxZoom: 19, noWrap: true }).addTo(map);
      const bounds = L.latLngBounds();

      partners.forEach(({ name, country, address, coordinates }) => {
        const icon = L.divIcon({ className: "partner-leaflet-marker", html: '<span class="partner-marker-dot"></span>', iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -12] });
        const popup = document.createElement("div");
        const title = document.createElement("strong");
        const place = document.createElement("span");
        title.textContent = name;
        place.textContent = `${country} — ${address}`;
        popup.append(title, place);
        L.marker(coordinates, { icon }).addTo(map).bindPopup(popup, { closeButton: false });
        bounds.extend(coordinates);
      });
      map.fitBounds(bounds, { padding: [45, 45], maxZoom: 3 });
    }

    createMap();
    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return <div className="partner-map">
    <div ref={mapElement} className="partner-map-canvas" aria-label="Interactive map of distribution partner locations"/>
    <div className="map-location-count"><span><b>{partners.length}</b> active locations</span></div>
  </div>;
}



