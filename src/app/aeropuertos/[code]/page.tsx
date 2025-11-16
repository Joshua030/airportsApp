// app/airports/[code]/page.tsx
"use client";

import {
  AirportDetailCard,
  AlertMessage,
  ClockCircle,
  InfoCircle,
  InformationSelectorTabs,
  MapPoint,
  WorldIcon,
} from "@/components";
import Loader from "@/components/ui/loader/Loader";
import { Airport } from "@/interfaces";
import { useAirportdStore } from "@/stores/airport";
import dynamic from "next/dynamic";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Map = dynamic(
  () => import("@/components/ui/map/Map").then((mod) => mod.Map),
  {
    ssr: false,
  },
);

const MOCK_AIRPORT: Airport = {
  id: "5535418",
  gmt: "1",
  airport_id: "580",
  iata_code: "BCN",
  city_iata_code: "BCN",
  icao_code: "LEBL",
  country_iso2: "ES",
  geoname_id: "3128760",
  latitude: "41.30303",
  longitude: "2.07593",
  airport_name: "El Prat De Llobregat",
  country_name: "Spain",
  phone_number: "902 404 704",
  timezone: "Europe/Madrid",
};

const TAB_ITEMS = [
  { id: "general", label: "General" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "zona-horaria", label: "Zona Horaria" },
  { id: "estadisticas", label: "Estadísticas" },
];

export default function AirportDetailPage() {
  const params = useParams<{ code: string }>();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { code } = params;
  const selectedAirport = useAirportdStore((state) => state.selectedAirport);
  const isLoadingAirport = useAirportdStore((state) => state.isLoadingAirport);
  const airportError = useAirportdStore((state) => state.airportError);
  const fetchAirportByCode = useAirportdStore(
    (state) => state.fetchAirportByCode,
  );

  useEffect(() => {
    if (code) {
      const getAirport = async () => {
        await fetchAirportByCode(code.toUpperCase());
      };
      getAirport();
    }
  }, [code]);

  if (isLoadingAirport) {
    return <Loader />;
  }

  if (airportError) {
    return (
      <section className="main-padding flex min-h-screen items-stretch justify-center pt-10">
        <div className="inner-container flex flex-col gap-8.5">
          <AlertMessage message="No ha sido posible cargar los datos. Por favor, inténtalo de nuevo más tarde." />
        </div>
      </section>
    );
  }

  // while testing, only show mock for BCN / LEBL
  // const selectedAirport =
  //   code === "BCN" || code === "LEBL" ? MOCK_AIRPORT : null;

  if (!selectedAirport) {
    return (
      <section className="main-padding flex min-h-screen items-stretch justify-center pt-10">
        <div className="inner-container flex flex-col gap-8.5">
          <AlertMessage />
        </div>
      </section>
    );
  }

  const activeTab = searchParams.get("tab") ?? TAB_ITEMS[0].id;

  return (
    <section className="main-padding flex min-h-screen items-stretch justify-center pt-10">
      <div className="inner-container flex flex-col gap-8.5">
        <h1 className="text-gradient-sky font-black` text-center font-serif text-[89px]">
          {selectedAirport.airport_name}
        </h1>
        <InformationSelectorTabs
          items={TAB_ITEMS}
          activeId={activeTab}
          basePath={pathname}
        />

        {activeTab === "general" && (
          <AirportDetailCard
            airport={{
              iata_code: selectedAirport.iata_code,
              icao_code: selectedAirport.icao_code,
              country_name: selectedAirport.country_name,
              city_iata_code: selectedAirport.city_iata_code,
              phone_number: selectedAirport.phone_number,
            }}
            title="Información General"
            icon={<InfoCircle />}
          />
        )}

        {activeTab === "ubicacion" && (
          <div className="mb-20 flex flex-col gap-10">
            <AirportDetailCard
              airport={{
                latitude: selectedAirport.latitude,
                longitude: selectedAirport.longitude,
                geoname_id: selectedAirport.geoname_id,
              }}
              title="Ubicación"
              icon={<MapPoint />}
            />
            <Map
              lat={Number(selectedAirport.latitude)}
              lng={Number(selectedAirport.longitude)}
            />
          </div>
        )}

        {activeTab === "zona-horaria" && (
          <div className="flex flex-col gap-10">
            <AirportDetailCard
              airport={{
                timezone: selectedAirport.timezone,
                gmt: selectedAirport.gmt,
              }}
              title="Zona Horaria"
              icon={<WorldIcon />}
            />
            <AirportDetailCard
              airport={{
                timezone: selectedAirport.timezone,
                gmt: selectedAirport.gmt,
              }}
              showTime={true}
              title="Hora Local"
              icon={<ClockCircle />}
            />
          </div>
        )}
      </div>
    </section>
  );
}
