// store/index.ts
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { createAirportSlice } from "./airport/airport.slice";
import { createSearchSlice, RootState } from "./airport/search.slice";

// Root state = Airport + Search
type SharedState = RootState;

export const useAirportdStore = create<SharedState>()(
  devtools(
    persist(
      (...a) => ({
        ...createAirportSlice(...a),
        ...createSearchSlice(...a),
      }),
      {
        name: "airport-search-store", // key in localStorage
        storage: createJSONStorage(() => localStorage),
        // Only persist search-related state
        partialize: (state) => ({
          searchHistory: state.searchHistory,
        }),
      },
    ),
  ),
);
