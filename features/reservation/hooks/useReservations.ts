"use client";

import { useQuery } from "@tanstack/react-query";
import { reservationApi } from "../services";
import { Reservation } from "../types";

export function useReservations(email: string | undefined) {
  const { data, error, isLoading, refetch } = useQuery<Reservation[]>({
    queryKey: ["reservations", email],
    queryFn: () => reservationApi.getReservationsByEmail(email!),
    enabled: !!email,
  });

  return {
    reservations: data,
    isLoading,
    isError: !!error,
    refetch,
  };
}
