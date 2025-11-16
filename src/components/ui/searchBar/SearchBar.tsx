"use client";

import { MagnifyingGlass } from "@/components/icons/MagnifyingGlass";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import clsx from "clsx";
import { useAirportdStore } from "@/stores";

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  redirectTo?: string;
  onSearch?: (value: string) => void;
  paramName?: string;
  direction?: "column" | "row";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = "",
  placeholder = "Buscar aeropuertos...",
  buttonLabel = "Buscar",
  className = "",
  redirectTo,
  onSearch,
  paramName = "s",
  direction = "column",
}) => {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const addToSearchHistory = useAirportdStore(
    (state) => state.addToSearchHistory,
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();

    if (redirectTo) {
      const params = new URLSearchParams();
      if (trimmed) params.set(paramName, trimmed);

      const query = params.toString();
      const url = query ? `${redirectTo}?${query}` : redirectTo;
      addToSearchHistory(trimmed);
      router.push(url);
    }

    if (!trimmed) return;
    onSearch?.(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx("w-full", className)}>
      <div
        className={clsx(
          "flex items-center gap-8",
          direction === "column" ? "flex-col" : "flex-col sm:flex-row",
        )}
      >
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="placeholder:text-accent-blue w-full max-w-[780px] rounded-full bg-white px-6 py-4 text-sm font-light placeholder:text-sm placeholder:font-normal sm:text-2xl sm:placeholder:text-[20px]"
        />

        <button
          type="submit"
          className="bg-search-button flex cursor-pointer items-center gap-4 rounded-[10px] border border-white px-8 py-2 pr-20 text-[19.5px] leading-[36px] font-medium text-white"
        >
          <MagnifyingGlass />
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};
