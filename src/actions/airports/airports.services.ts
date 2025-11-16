"use server";

import { api } from "@/config/api";
import type { ApiResponse } from "@/interfaces";

interface PaginationOptions {
  page?: number;
  limit?: number;
}

export const getAirportsByPage = async ({
  page = 1,
  limit = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;
  const offset = (page - 1) * limit;

  const url = `${api.airports.list}&limit=${limit}&offset=${offset}`;

  const res = await fetch(url, {
    // optional but recommended to avoid caching if data changes
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching airports:", res.status, res.statusText);
    throw new Error("Failed to fetch airports");
  }

  const dataResponse = (await res.json()) as ApiResponse;

  // aviationstack usually returns: { pagination: {...}, data: [...] }
  const { data, pagination } = dataResponse;

  const totalPages = Math.ceil(pagination.total / limit);

  return {
    currentPage: page,
    totalPages,
    limit,
    offset,
    data,
    pagination, // raw API pagination (has total, count, etc.)
  };
};
