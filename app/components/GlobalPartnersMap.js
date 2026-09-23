"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const globalPartnerLocations = [
  { name: "NovaStar", place: "Xi'an, Shaanxi, China", coordinates: [34.215, 108.716] },
  { name: "Colorlight", place: "Shenzhen, Guangdong, China", coordinates: [22.586, 113.954] },
  { name: "Bosch", place: "Gerlingen, Germany", coordinates: [48.801, 9.064] },
  { name: "Samsung", place: "Suwon, South Korea", coordinates: [37.257, 127.054] },
];

export default function GlobalPartnersMap() {
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

      globalPartnerLocations.forEach(({ name, place, coordinates }) => {
        const icon = L.divIcon({ className: "global-leaflet-marker", html: '<span class="global-marker-dot"></span>', iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -18] });
        L.marker(coordinates, { icon }).addTo(map).bindPopup(`<strong>${name}</strong><span>${place}</span>`, { closeButton: false, autoClose: false }).openPopup();
        bounds.extend(coordinates);
      });

      map.fitBounds(bounds, { padding: [65, 65], maxZoom: 3 });
    }

    createMap();
    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        map = undefined;
      }
    };
  }, []);

  return <div className="home-global-map-wrap">
    
    <div ref={mapElement} className="home-global-map" aria-label="Interactive map of global partner headquarters"/>
    <div className="home-global-map-count"><b>{globalPartnerLocations.length}</b> partner locations</div>
  </div>;
}


