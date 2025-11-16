// store/search.slice.ts
import { StateCreator } from "zustand";
import { AirportSlice } from "./airport.slice";

export interface SearchSlice {
  searchHistory: string[];
  addToSearchHistory: (term: string) => void;
  clearSearchHistory: () => void;
}

export type RootState = AirportSlice & SearchSlice;

export const createSearchSlice: StateCreator<RootState, [], [], SearchSlice> = (
  set,
  get,
) => ({
  searchHistory: [],

  addToSearchHistory: (term: string) =>
    set((state) => {
      const trimmed = term.trim();
      if (!trimmed) return {};

      const withoutTerm = state.searchHistory.filter((t) => t !== trimmed);
      const newHistory = [trimmed, ...withoutTerm];
      return { searchHistory: newHistory.slice(0, 10) };
    }),

  clearSearchHistory: () => set({ searchHistory: [] }),
});
