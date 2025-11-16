// store/airport.slice.ts
import { Airport } from "@/interfaces";
import { StateCreator } from "zustand";

export interface AirportSlice {
  selectedAirport: Airport | null;
  isLoadingAirport: boolean;
  airportError: string | null;

  setSelectedAirport: (airport: Airport) => void;
  clearSelectedAirport: () => void;
  fetchAirportByCode: (code: string) => Promise<void>;
}

export const createAirportSlice: StateCreator<AirportSlice> = (set) => ({
  selectedAirport: null,
  isLoadingAirport: false,
  airportError: null,

  setSelectedAirport: (airport) =>
    set({
      selectedAirport: airport,
      airportError: null,
    }),

  clearSelectedAirport: () =>
    set({
      selectedAirport: null,
      airportError: null,
    }),

  fetchAirportByCode: async (code: string) => {
    set({ isLoadingAirport: true, airportError: null });

    try {
      const res = await fetch(`/api/airports/${code}`);

      if (!res.ok) {
        throw new Error("Error fetching airport");
      }

      const airport = (await res.json()) as Airport | null;

      if (!airport) {
        throw new Error("Airport not found");
      }

      set({
        selectedAirport: airport,
        isLoadingAirport: false,
      });
    } catch (err: unknown) {
      if (err instanceof Error)
        set({
          airportError: err?.message ?? "Unknown error",
          isLoadingAirport: false,
        });
    }
  },
});
