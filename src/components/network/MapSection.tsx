"use client";

import React, {
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

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
  labelFlip?: boolean;
}

interface GeographyData {
  id?: string | number;
  rsmKey: string;
  properties?: {
    name?: string;
  };
}

const countries: CountryData[] = [
  {
    id: "024",
    iso3: "AGO",
    name: "Angola",
    nameInTopojson: "Angola",
    isIsland: false,
    markerCoordinates: [10.9739, -11.2027],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
  },
  {
    id: "132",
    iso3: "CPV",
    name: "Cabo Verde",
    nameInTopojson: "Cape Verde",
    isIsland: true,
    markerCoordinates: [-19.6, 16],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
    labelFlip: true,
  },
  {
    id: "624",
    iso3: "GNB",
    name: "Guiné-Bissau",
    nameInTopojson: "Guinea-Bissau",
    isIsland: false,
    markerCoordinates: [-10.1804, 11.8037],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
    labelFlip: true,
  },
  {
    id: "508",
    iso3: "MOZ",
    name: "Moçambique",
    nameInTopojson: "Mozambique",
    isIsland: false,
    markerCoordinates: [29.9, -19.6657],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
  },
  {
    id: "678",
    iso3: "STP",
    name: "São Tomé e Príncipe",
    nameInTopojson: "Sao Tome and Principe",
    isIsland: true,
    markerCoordinates: [3.6111, 1.1864],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
  },
  {
    id: "626",
    iso3: "TLS",
    name: "Timor-Leste",
    nameInTopojson: "Timor-Leste",
    isIsland: true,
    markerCoordinates: [120.7275, -8.8742],
    professionals: 0,
    companies: 0,
    festivals: 0,
    institutions: 0,
  },
];

const COLORS = {
  bg: "#0f0f0f",
  default: "#1a1a1a",
  stroke: "#464643",
  defaultBg: "#464643",
  hover: "#666666",
  selected: "#fccb1c",
  selectedStroke: "transparent",
  cardBg: "#f5c518",
  cardText: "#1a1a1a",
  text: "#e0e0e0",
  buttonDefault: "#3a3a3a",
} as const;

const isPalopCountry = (
  geography: GeographyData,
): CountryData | undefined => {
  const geographyId = String(geography.id ?? "")
    .trim()
    .padStart(3, "0");

  const geographyName = String(
    geography.properties?.name ?? "",
  ).trim();

  return countries.find(
    (country) =>
      country.id === geographyId ||
      country.nameInTopojson.toLocaleLowerCase("pt-PT") ===
        geographyName.toLocaleLowerCase("pt-PT") ||
      country.name.toLocaleLowerCase("pt-PT") ===
        geographyName.toLocaleLowerCase("pt-PT"),
  );
};

const StatRow: React.FC<{
  value: number;
  label: string;
}> = ({ value, label }) => (
  <div className="flex items-center gap-3">
    <span className="min-w-10 text-base font-normal text-[#1a1a1a]">
      {value}
    </span>

    <span className="text-sm text-[#333333]">{label}</span>
  </div>
);

const InfoCard: React.FC<{ country: CountryData }> = ({
  country,
}) => (
  <div className="relative z-10 mx-auto w-[calc(100%-2rem)] min-w-0 max-w-sm animate-[fadeIn_0.3s_ease] rounded-2xl bg-[#f5c518] px-6 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] lg:absolute lg:top-[300px] lg:left-1/2 lg:w-auto lg:min-w-[220px] lg:max-w-none lg:-translate-x-1/2 lg:px-8">
    <h2 className="mb-4 pr-5 text-[22px] font-normal text-[#1a1a1a]">
      {country.name}
    </h2>

    <div
      aria-hidden="true"
      className="absolute top-6 right-4 h-[calc(100%-3rem)] w-[3px] rounded-sm bg-[#1a1a1a]"
    />

    <div className="flex flex-col gap-2.5">
      <StatRow
        value={country.professionals}
        label="Profissionais"
      />
      <StatRow value={country.companies} label="Empresas" />
      <StatRow value={country.festivals} label="Festivais" />
      <StatRow
        value={country.institutions}
        label="Instituições"
      />
    </div>
  </div>
);

interface ArrowButtonProps {
  onClick: () => void;
  isActive: boolean;
  isHovered: boolean;
  flip?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  isActive,
  isHovered,
  flip = false,
}) => (
  <g
    onClick={(event) => {
      event.stopPropagation();
      onClick();
    }}
    style={{ cursor: "pointer" }}
  >
    <circle
      r="15"
      fill={
        isActive
          ? COLORS.selected
          : isHovered
            ? COLORS.hover
            : COLORS.buttonDefault
      }
      stroke={isActive ? COLORS.selectedStroke : "#555555"}
      strokeWidth="1"
      style={{ transition: "all 0.2s ease" }}
    />

    <path
      d="M -4 0 L 2 0 M 0 -3 L 4 0 L 0 3"
      fill="none"
      transform={`scale(${flip ? -1.5 : 1.5}, 1.5)`}
      stroke={isActive ? COLORS.cardText : "#ffffff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ pointerEvents: "none" }}
    />
  </g>
);

const PalopMapSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState("508");
  const [hoveredId, setHoveredId] = useState<string | null>(
    null,
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedCountry = useMemo(
    () =>
      countries.find((country) => country.id === selectedId) ??
      countries[3],
    [selectedId],
  );

  const isSelected = useCallback(
    (id: string) => selectedId === id,
    [selectedId],
  );

  const isHovered = useCallback(
    (id: string) => hoveredId === id,
    [hoveredId],
  );

  const selectCountry = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const handleMarkerKeyDown = (
    event: KeyboardEvent<SVGGElement>,
    countryId: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCountry(countryId);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f0f] pt-17 lg:min-h-[600px]">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>

      <div className="relative">
        <div
          ref={scrollRef}
          className="w-full touch-pan-x overflow-x-auto overflow-y-hidden [scrollbar-color:#464643_#1a1a1a] [scrollbar-width:thin] lg:overflow-x-hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
          aria-label="Mapa interativo dos PALOP e de Timor-Leste"
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 480,
              center: [60, -8],
              rotate: [0, 0, 0],
            }}
            width={1800}
            height={600}
            style={{
              width: "1800px",
              height: "100%",
              minHeight: "600px",
              display: "block",
            }}
          >
            <Geographies geography={GEO_URL}>
              {({
                geographies,
              }: {
                geographies: GeographyData[];
              }) => {
                const nonPalopCountries = geographies.filter(
                  (geography) => !isPalopCountry(geography),
                );

                const palopCountries = geographies.filter(
                  (geography) => isPalopCountry(geography),
                );

                return (
                  <>
                    {nonPalopCountries.map((geography) => (
                      <Geography
                        key={geography.rsmKey}
                        geography={geography}
                        fill={COLORS.default}
                        stroke={COLORS.stroke}
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))}

                    {palopCountries.map((geography) => {
                      const country =
                        isPalopCountry(geography);

                      if (!country) {
                        return null;
                      }

                      const selected =
                        country.id === selectedId;

                      const hovered =
                        country.id === hoveredId;

                      return (
                        <Geography
                          key={geography.rsmKey}
                          geography={geography}
                          fill={
                            selected
                              ? COLORS.selected
                              : hovered
                                ? COLORS.hover
                                : COLORS.defaultBg
                          }
                          stroke={
                            selected
                              ? COLORS.selectedStroke
                              : COLORS.stroke
                          }
                          strokeWidth={selected ? 2 : 1}
                          style={{
                            default: {
                              outline: "none",
                              transition: "all 0.25s ease",
                              cursor: "pointer",
                            },
                            hover: {
                              outline: "none",
                              transition: "all 0.25s ease",
                              cursor: "pointer",
                            },
                            pressed: {
                              outline: "none",
                            },
                          }}
                          onMouseEnter={() =>
                            setHoveredId(country.id)
                          }
                          onMouseLeave={() =>
                            setHoveredId(null)
                          }
                          onClick={() =>
                            selectCountry(country.id)
                          }
                        />
                      );
                    })}
                  </>
                );
              }}
            </Geographies>

            {countries.map((country) => {
              const selected = isSelected(country.id);
              const hovered = isHovered(country.id);

              return (
                <Marker
                  key={country.id}
                  coordinates={country.markerCoordinates}
                >
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label={`Selecionar ${country.name}`}
                    onMouseEnter={() =>
                      setHoveredId(country.id)
                    }
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(country.id)}
                    onBlur={() => setHoveredId(null)}
                    onClick={() =>
                      selectCountry(country.id)
                    }
                    onKeyDown={(event) =>
                      handleMarkerKeyDown(event, country.id)
                    }
                    style={{
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    <circle r="20" fill="transparent" />

                    {(country.isIsland ||
                      country.id === "624") && (
                      <circle
                        r="4"
                        fill={
                          selected
                            ? COLORS.selectedStroke
                            : hovered
                              ? COLORS.hover
                              : "#444444"
                        }
                        stroke={
                          selected
                            ? COLORS.selectedStroke
                            : "#666666"
                        }
                        strokeWidth={1}
                        style={{
                          transition: "all 0.25s ease",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    <text
                      x={country.labelFlip ? 24 : -24}
                      y={0}
                      textAnchor={
                        country.labelFlip ? "start" : "end"
                      }
                      dominantBaseline="central"
                      fill="#ffffff"
                      fontSize="18px"
                      fontWeight={selected ? 700 : 500}
                      style={{
                        pointerEvents: "none",
                        transition: "fill 0.25s ease",
                        lineHeight: "16px",
                      }}
                    >
                      {country.name}
                    </text>

                    <ArrowButton
                      onClick={() =>
                        selectCountry(country.id)
                      }
                      isActive={selected}
                      isHovered={hovered}
                      flip={country.labelFlip}
                    />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <p className="px-4 pt-3 text-center text-xs text-[#e0e0e0]/70 lg:hidden">
          Desliza horizontalmente para explorar todos os países.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-lg flex-col gap-6 px-4 py-8 lg:contents">
        <div className="text-center text-base leading-relaxed text-[#e0e0e0] opacity-90 sm:text-lg lg:absolute lg:bottom-[450px] lg:left-1/2 lg:w-full lg:max-w-[500px] lg:-translate-x-1/2 lg:px-0 lg:text-xl lg:leading-[1.6]">
          Encontra, conecta-te e colabora com profissionais dos
          PALOP e de Timor-Leste, enquanto aumentas a tua presença
          na REDE — aqui.
        </div>

        <InfoCard country={selectedCountry} />
      </div>
    </section>
  );
};

export default PalopMapSection;