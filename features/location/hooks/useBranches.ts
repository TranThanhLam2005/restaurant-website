// features/booking/hooks/useBranches.ts
"use client";

import {useQuery} from "@tanstack/react-query";
import {bookingApi} from "../../booking/services";
import {Branch} from "../../booking/types";

export function useBranches(cityId?: string) {
  return useQuery<Branch[]>({
    queryKey: ["branches", cityId],
    queryFn: () => bookingApi.getBranches(cityId!),
    enabled: !!cityId,
  });
}
