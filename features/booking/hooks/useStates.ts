"use client";

import {useQuery} from "@tanstack/react-query";
import {bookingApi} from "../services";
import {State} from "../types";
export function useStates() {
  return useQuery<State[]>({
    queryKey: ["states"],
    queryFn: bookingApi.getStates,
    staleTime: 1000 * 60 * 60, // cache 1h
  });
}
