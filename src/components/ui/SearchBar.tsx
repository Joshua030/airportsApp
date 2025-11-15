"use client";

import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { MagnifyingGlass } from "../icons/MagnifyingGlass";

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  redirectTo?: string;
  onSearch?: (value: string) => void;
  paramName?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = "",
  placeholder = "Buscar aeropuertos...",
  buttonLabel = "Buscar",
  className = "",
  redirectTo,
  onSearch,
  paramName = "s",
}) => {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();

    if (redirectTo) {
      const params = new URLSearchParams();

      if (trimmed) {
        params.set(paramName, trimmed);
      }

      const query = params.toString();
      const url = query ? `${redirectTo}?${query}` : redirectTo;

      router.push(url);
    }

    // Only fire callback when there is something to search
    if (!trimmed) return;
    if (onSearch) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col items-center gap-8">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="placeholder:text-accent-blue w-full rounded-full bg-white px-6 py-4 text-2xl font-light placeholder:text-[20px] placeholder:font-normal"
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
