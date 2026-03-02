const API = process.env.NEXT_PUBLIC_API_BASE_URL;
import { State, ReservationRequest, ReservationResponse } from "./types";

// Server-side function for fetching states (SSR/SSG)
export async function getStatesServer(): Promise<State[]> {
  try {
    const res = await fetch(`${API}/states`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) throw new Error("Failed to fetch states");
    return res.json();
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
}

// Client-side API functions
export const bookingApi = {
  getStates: async () => fetch(`${API}/states`).then((res) => res.json()),

  getCities: async (stateId: string) =>
    fetch(`${API}/cities/by-state/${stateId}`).then((res) => res.json()),

  getBranches: async (cityId: string) =>
    fetch(`${API}/branches/city/${cityId}`).then((res) => res.json()),

  createReservation: async (
    data: ReservationRequest,
  ): Promise<ReservationResponse> => {
    const res = await fetch(`${API}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res
        .json()
        .catch(() => ({ message: "Failed to create reservation" }));
      throw new Error(error.message || "Failed to create reservation");
    }
    return res.json();
  },
};
