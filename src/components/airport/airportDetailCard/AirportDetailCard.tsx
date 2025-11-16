import type { Airport } from "@/interfaces";
import { getAirportLocalTime } from "@/utils/getAirportLocalTime";
import Image from "next/image";

interface AirportDetailCardProps {
  airport: Partial<Airport>;
  title?: string;
  icon?: React.ReactNode;
  showTime?: boolean;
}

export const AirportDetailCard = ({
  airport,
  title,
  icon,
  showTime = false,
}: AirportDetailCardProps) => {
  return (
    <article className="relative flex min-h-[230px] overflow-hidden rounded-lg border border-white bg-white/20 py-8 pr-5 pl-10">
      {/* Left: text content */}
      <div className="flex flex-1 flex-col gap-7">
        {title && (
          <div className="flex items-center gap-6">
            {icon && <span>{icon}</span>}

            <p className="text-gradient-sky inline font-serif text-2xl font-black sm:text-[40px]">
              {title}
            </p>
          </div>
        )}
        <div>
          {airport.iata_code && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Código IATA: </strong>
              <p className="inline">
                &nbsp;
                {airport.iata_code ?? "-"}
              </p>
            </div>
          )}

          {airport.icao_code && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Código ICAO: </strong>
              <p className="inline">
                &nbsp;
                {airport.icao_code ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.country_name && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>País: </strong>
              <p className="inline">
                &nbsp;
                {airport.country_name ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.city_iata_code && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Ciudad IATA: </strong>
              <p className="inline">
                &nbsp;
                {airport.city_iata_code ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.phone_number && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Teléfono: </strong>
              <p className="inline">
                &nbsp;
                {airport.phone_number ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.latitude && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Latitud:: </strong>
              <p className="inline">
                &nbsp;
                {airport.latitude ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.longitude && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Longitud: </strong>
              <p className="inline">
                &nbsp;
                {airport.longitude ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.geoname_id && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>ID Geoname:: </strong>
              <p className="inline">
                &nbsp;
                {airport.geoname_id ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.timezone && !showTime && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>Zona Horaria: </strong>
              <p className="inline">
                &nbsp;
                {airport.timezone ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.gmt && !showTime && (
            <div className="text-lg text-white sm:text-[30px]">
              <strong>GMT: </strong>
              <p className="inline">
                &nbsp;
                {airport.gmt ?? "No disponible"}
              </p>
            </div>
          )}

          {airport.gmt && airport.timezone && showTime && (
            <div className="text-lg text-white sm:text-[30px]">
              <p className="inline">
                &nbsp;
                {getAirportLocalTime(airport) ?? "No disponible"}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden h-full w-[45%] bg-[linear-gradient(90deg,#3F495F_0%,#0E1934_74%)] opacity-90 lg:block" />

      <div className="absolute top-0 right-0 -z-1 hidden h-full w-[45%] lg:block">
        <Image
          src={"/images/plane_bg.webp"}
          alt="Imagen de avion despegando"
          fill
          className="object-cover"
        />
      </div>
    </article>
  );
};
