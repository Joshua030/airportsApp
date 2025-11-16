// store/index.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AirportSlice, createAirportSlice } from "./airport.slice";

type SharedState = AirportSlice;

export const useAirportdStore = create<SharedState>()(
  devtools((...a) => ({
    ...createAirportSlice(...a),
  })),
);
