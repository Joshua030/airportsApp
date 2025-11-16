import { PlaneIcon } from "@/components/icons/PlaneIcon";
import { Airport } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const AirportCard = ({ airport }: { airport: Airport }) => {
  return (
    <Link
      href={`/aeropuertos/${airport.city_iata_code}`}
      className="relative flex min-h-[230px] overflow-hidden rounded-lg border border-white bg-white/20 py-8 pr-5 pl-10"
    >
      {/* Left: text content */}
      <div className="flex flex-1 flex-col">
        <p className="text-[20px] font-bold text-white">
          {airport.airport_name}
        </p>
        <p className="mt-1 text-[20px] text-white">{airport.country_name}</p>

        <div className="mt-auto">
          <p className="text-gradient-sky inline font-serif text-[42px] font-black">
            {airport.city_iata_code}
          </p>
        </div>
      </div>

      <div className="z-2">
        <span>
          <PlaneIcon />
        </span>
      </div>
      <div className="absolute top-0 right-0 h-full w-[45%] bg-[linear-gradient(90deg,#3F495F_0%,#0E1934_74%)] opacity-90" />

      <div className="absolute top-0 right-0 -z-1 h-full w-[45%]">
        <Image
          src={"/images/plane_bg.webp"}
          alt="Imagen de avion despegando"
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
};
