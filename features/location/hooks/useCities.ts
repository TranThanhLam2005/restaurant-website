// features/location/hooks/useCities.ts
"use client";

import {useQuery} from "@tanstack/react-query";
import {bookingApi} from "../services";
import {City} from "../types";

export function useCities(stateId?: string) {
  return useQuery<City[]>({
    queryKey: ["cities", stateId],
    queryFn: () => bookingApi.getCities(stateId!),
    enabled: !!stateId, // 👈 important
  });
}
