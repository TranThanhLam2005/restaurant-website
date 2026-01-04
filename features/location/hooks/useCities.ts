// features/booking/hooks/useCities.ts
"use client";

import {useQuery} from "@tanstack/react-query";
import {bookingApi} from "../../booking/services";
import {City} from "../../booking/types";

export function useCities(stateId?: string) {
  return useQuery<City[]>({
    queryKey: ["cities", stateId],
    queryFn: () => bookingApi.getCities(stateId!),
    enabled: !!stateId, // 👈 important
  });
}
