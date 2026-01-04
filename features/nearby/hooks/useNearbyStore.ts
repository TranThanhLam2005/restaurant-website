"use client";

import {create} from "zustand";
import {NearbyStore} from "@/features/nearby/types";

const initialState = {
  restaurantType: "dine-in" as const,
  searchQuery: "",
  debouncedSearchQuery: "",
};

export const useNearbyStore = create<NearbyStore>((set) => ({
  ...initialState,

  setRestaurantType: (type) =>
    set({
      restaurantType: type,
    }),

  setSearchQuery: (query) =>
    set({
      searchQuery: query,
    }),

  setDebouncedSearchQuery: (query) =>
    set({
      debouncedSearchQuery: query,
    }),

  reset: () => set(initialState),
}));
