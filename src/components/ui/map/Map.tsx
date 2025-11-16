"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  if (typeof window === "undefined") return null;

  const airplaneIcon = L.divIcon({
    html: `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="blue">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9L2 14v2l8-2.5V19l-2 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  `,
    className: "",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return (
    <div
      className="relative aspect-21/9 h-auto w-full flex-1"
      suppressHydrationWarning
    >
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        minZoom={10}
        scrollWheelZoom={true}
        dragging={false}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lng]} icon={airplaneIcon} />
      </MapContainer>
    </div>
  );
};
