"use client";

import { InfoCircle } from "@/components/icons/InfoCircle";
import { PlaneIcon } from "@/components/icons/PlaneIcon";
import { useAirportdStore } from "@/stores";
import Image from "next/image";
import Link from "next/link";

export const SearchHistoryPanel = () => {
  const searchHistory = useAirportdStore((s) => s.searchHistory);

  if (searchHistory.length === 0) return null;
  return (
    <div className="relative flex min-h-[230px] gap-2 overflow-hidden rounded-lg border border-white bg-white/20 py-8 pr-3 pl-5 sm:gap-0 sm:pr-5 sm:pl-10">
      {/* LEFT: search history */}
      <div className="flex flex-1 flex-col gap-4">
        <div className="z-2 flex items-center gap-4">
          <InfoCircle />
          <p className="mt-1 text-lg font-semibold text-white sm:text-[20px]">
            Búsquedas recientes
          </p>
        </div>

        {searchHistory.length > 0 && (
          <ul className="flex flex-wrap gap-2 pl-10">
            {searchHistory.slice(0, 5).map((term) => (
              <li
                key={term}
                className="cursor-pointer rounded-full bg-white/20 px-4 py-1 text-[16px] text-white transition hover:bg-white/30"
              >
                <Link href={`/aeropuertos/?s=${term}`}>{term}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RIGHT side plane */}
      <div className="z-2">
        <PlaneIcon />
      </div>

      <div className="absolute top-0 right-0 hidden h-full w-[45%] bg-[linear-gradient(90deg,#3F495F_0%,#0E1934_74%)] opacity-90 sm:block" />

      <div className="absolute top-0 right-0 -z-1 hidden h-full w-[45%] sm:block">
        <Image
          src={"/images/plane_bg.webp"}
          alt="Imagen de avion despegando"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
