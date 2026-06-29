"use client";

import React, { useState, useMemo, useCallback } from "react";
//@ts-igonre
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

interface CountryData {
  id: string;
  iso3: string;
  name: string;
  nameInTopojson: string;
  isIsland: boolean;
  markerCoordinates: [number, number];
  professionals: number;
  companies: number;
  festivals: number;
  institutions: number;
}

const countries: CountryData[] = [
  {
    id: "024", iso3: "AGO", name: "Angola", nameInTopojson: "Angola",
    isIsland: false, markerCoordinates: [17.8739, -11.2027],
    professionals: 342, companies: 89, festivals: 12, institutions: 45,
  },
  {
    id: "132", iso3: "CPV", name: "Cabo Verde", nameInTopojson: "Cape Verde",
    isIsland: true, markerCoordinates: [-23.6052, 15.1201],
    professionals: 156, companies: 34, festivals: 8, institutions: 22,
  },
  {
    id: "624", iso3: "GNB", name: "Guiné-Bissau", nameInTopojson: "Guinea-Bissau",
    isIsland: false, markerCoordinates: [-15.1804, 11.8037],
    professionals: 98, companies: 21, festivals: 5, institutions: 15,
  },
  {
    id: "508", iso3: "MOZ", name: "Moçambique", nameInTopojson: "Mozambique",
    isIsland: false, markerCoordinates: [35.5296, -18.6657],
    professionals: 708, companies: 125, festivals: 17, institutions: 68,
  },
  {
    id: "678", iso3: "STP", name: "São Tomé e Príncipe", nameInTopojson: "Sao Tome and Principe",
    isIsland: true, markerCoordinates: [6.6111, 0.1864],
    professionals: 67, companies: 15, festivals: 4, institutions: 12,
  },
  {
    id: "626", iso3: "TLS", name: "Timor-Leste", nameInTopojson: "Timor-Leste",
    isIsland: true, markerCoordinates: [125.7275, -8.8742],
    professionals: 234, companies: 56, festivals: 9, institutions: 31,
  },
];

const COLORS = {
  bg: "#0f0f0f", default: "#1a1a1a", stroke: "#2a2a2a",
  hover: "#666666", selected: "#ffffff", selectedStroke: "#f5c518",
  cardBg: "#f5c518", cardText: "#1a1a1a", text: "#e0e0e0",
  buttonDefault: "#3a3a3a", buttonHover: "#555555",
};

// Helper: identificar PALOP por ID ou nome
const isPalopCountry = (geo: any): CountryData | undefined => {
  const geoId = String(geo.id ?? "").trim().padStart(3, "0"); // <-- padStart!
  const geoName = String(geo.properties?.name || "").trim();

  let match = countries.find((c) => c.id === geoId);
  if (match) return match;

  match = countries.find((c) =>
    c.nameInTopojson.toLowerCase() === geoName.toLowerCase()
  );
  if (match) return match;

  return countries.find((c) =>
    c.name.toLowerCase() === geoName.toLowerCase()
  );
};

const InfoCard: React.FC<{ country: CountryData }> = ({ country }) => (
  <div style={{
    position: "absolute", top: "24px", right: "24px",
    backgroundColor: COLORS.cardBg, borderRadius: "16px",
    padding: "24px 32px", minWidth: "220px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)", zIndex: 10,
    animation: "fadeIn 0.3s ease",
  }}>
    <h2 style={{ margin: "0 0 16px 0", fontSize: "22px", fontWeight: 700, color: COLORS.cardText }}>
      {country.name}
    </h2>
    <div style={{ position: "absolute", top: "24px", right: "16px", width: "3px", height: "calc(100% - 48px)", backgroundColor: COLORS.cardText, borderRadius: "2px" }} />
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <StatRow value={country.professionals} label="Profissionais" />
      <StatRow value={country.companies} label="Empresas" />
      <StatRow value={country.festivals} label="Festivais" />
      <StatRow value={country.institutions} label="Instituições" />
    </div>
  </div>
);


const StatRow: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <span style={{ fontSize: "16px", fontWeight: 700, color: COLORS.cardText, minWidth: "40px" }}>{value}</span>
    <span style={{ fontSize: "14px", color: "#333" }}>{label}</span>
  </div>
);


const ArrowButton: React.FC<{ onClick: () => void; isActive: boolean; isHovered: boolean }> =
  ({ onClick, isActive, isHovered }) => (
    <g onClick={(e) => { e.stopPropagation(); onClick(); }} style={{ cursor: "pointer" }}>
      <circle r="12" fill={isActive ? COLORS.selected : isHovered ? COLORS.hover : COLORS.buttonDefault}
        stroke={isActive ? COLORS.selectedStroke : "#555"} strokeWidth="1" style={{ transition: "all 0.2s ease" }} />
      <path d="M -4 0 L 2 0 M 0 -3 L 4 0 L 0 3" fill="none"
        stroke={isActive ? COLORS.cardText : "#fff"} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" style={{ pointerEvents: "none" }} />
    </g>
  );


const PalopMapSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState("508");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedCountry = useMemo(() =>
    countries.find((c) => c.id === selectedId) || countries[3], [selectedId]
  );

  const isSelected = useCallback((id: string) => selectedId === id, [selectedId]);
  const isHovered = useCallback((id: string) => hoveredId === id, [hoveredId]);

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "600px", backgroundColor: COLORS.bg, overflow: "hidden" }}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>

      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 420, center: [20, 5], rotate: [0, 0, 0] }}
        width={960} height={600} style={{ width: "100%", height: "100%", minHeight: "600px", display: "block" }}>

        <Geographies geography={GEO_URL}>
          {({ geographies }: any) => {
            const nonPalop = geographies.filter((geo: any) => !isPalopCountry(geo));
            const palop = geographies.filter((geo: any) => isPalopCountry(geo));

            console.log("nonPalop count:", nonPalop.length, "palop count:", palop.length);

            return (
              <>
                {nonPalop.map((geo: any) => (
                  <Geography key={geo.rsmKey} geography={geo}
                    fill={COLORS.default} stroke={COLORS.stroke} strokeWidth={0.5}
                    style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                  />
                ))}
                {palop.map((geo: any) => {
                  const country = isPalopCountry(geo)!; // <-- adiciona esta linha
                  const sel = country.id === selectedId;
                  const hov = country.id === hoveredId;
                  return (
                    <Geography key={geo.rsmKey} geography={geo}
                      fill={sel ? COLORS.selected : hov ? COLORS.hover : COLORS.default}
                      stroke={sel ? COLORS.selectedStroke : COLORS.stroke}
                      strokeWidth={sel ? 2 : 1}
                      style={{
                        default: { outline: "none", transition: "all 0.25s ease", cursor: "pointer" },
                        hover: { outline: "none", transition: "all 0.25s ease", cursor: "pointer" },
                        pressed: { outline: "none" }
                      }}
                      onMouseEnter={() => setHoveredId(country.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedId(country.id)}
                    />
                  );
                })}
              </>
            );
          }}
        </Geographies>

        {countries.map((c: any) => {
          const sel = isSelected(c.id);
          const hov = isHovered(c.id);
          return (
            <Marker key={c.id} coordinates={c.markerCoordinates}>
              <g
                onMouseEnter={() => setHoveredId(c.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(c.id)}
                style={{ cursor: "pointer" }}
              >
                <circle r="20" fill="transparent" />

                {/* Ponto para países sem polígono visível */}
                {(c.isIsland || c.id === "624") && (
                  <circle r="4"
                    fill={sel ? COLORS.selectedStroke : hov ? COLORS.hover : "#444"}
                    stroke={sel ? COLORS.selectedStroke : "#666"}
                    strokeWidth={1}
                    style={{ transition: "all 0.25s ease", pointerEvents: "none" }}
                  />
                )}

                <text
                  x={-35} y={0}
                  textAnchor="end"
                  dominantBaseline="central"
                  fill={sel ? COLORS.selectedStroke : hov ? "#fff" : COLORS.text}
                  fontSize="12px"
                  fontWeight={sel ? 700 : 400}
                  style={{ pointerEvents: "none", transition: "fill 0.25s ease" }}
                >
                  {c.name}
                </text>

                <ArrowButton
                  onClick={() => setSelectedId(c.id)}
                  isActive={sel}
                  isHovered={hov}
                />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      <InfoCard country={selectedCountry} />

      <div style={{
        position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
        textAlign: "center", color: COLORS.text, fontSize: "15px", lineHeight: "1.6", maxWidth: "500px", opacity: 0.8
      }}>
        Encontra, conecta-te e colabora com profissionais dos PALOP,<br />enquanto aumentas a tua presença na rede
      </div>
    </section>
  );
};

export default PalopMapSection;