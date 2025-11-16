"use server";

import { api } from "@/config/api";
import type { ApiResponse } from "@/interfaces";
import { capitalize } from "@/utils/capitalize";

interface PaginationOptions {
  page?: number;
  limit?: number;
  searchValue?: string;
}

export const getAirportsByPage = async ({
  page = 1,
  limit = 12,
  searchValue,
}: PaginationOptions) => {
  const baseUrl = api.airports.list;

  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;
  const offset = (page - 1) * limit;
  const trimmedSearch = searchValue?.trim();

  // If we have a search value, try to get a single airport

  //Try by airport code
  if (
    trimmedSearch &&
    trimmedSearch.length === 3 &&
    /^[A-Za-z]{3}$/.test(trimmedSearch)
  ) {
    const formattedData = trimmedSearch.toUpperCase();
    // 1️⃣ Try by IATA code
    const byIataUrl = `${baseUrl}&iata_code=${encodeURIComponent(formattedData)}`;
    const res = await fetch(byIataUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error(
        "Error fetching airport by IATA:",
        res.status,
        res.statusText,
      );
      throw new Error("Failed to fetch airport");
    } else {
      const dataResponse = (await res.json()) as ApiResponse;
      const { data } = dataResponse;
      return {
        currentPage: page,
        totalPages: 1,
        limit,
        offset,
        data,
      };
    }
  }

  //Try by name
  if (trimmedSearch && trimmedSearch.length > 0) {
    const formattedData = capitalize(trimmedSearch);
    // 1️⃣ Try by IATA code
    const byIataUrl = `${baseUrl}&airport_name=${encodeURIComponent(formattedData)}`;
    const res = await fetch(byIataUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error(
        "Error fetching airport by NAME",
        res.status,
        res.statusText,
      );
      throw new Error("Failed to fetch airport");
    } else {
      const dataResponse = (await res.json()) as ApiResponse;
      const { data } = dataResponse;
      return {
        currentPage: page,
        totalPages: 1,
        limit,
        offset,
        data,
      };
    }
  }

  const url = `${baseUrl}&limit=${limit}&offset=${offset}`;

  const res = await fetch(url, {
    // optional but recommended to avoid caching if data changes
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching airports:", res.status, res.statusText);
    throw new Error("Failed to fetch airports");
  }

  const dataResponse = (await res.json()) as ApiResponse;

  const { data, pagination } = dataResponse;

  const totalPages = Math.ceil(pagination.total / limit);

  return {
    currentPage: page,
    totalPages,
    limit,
    offset,
    data,
  };
};
