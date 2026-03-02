const API = process.env.NEXT_PUBLIC_API_BASE_URL;
import { ReservationDetails } from "./types";

// Client-side API functions
export const reservationApi = {
  createReservation: async (details: ReservationDetails) =>
    fetch(`http://localhost:8089/api/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to create reservation");
      return res.json();
    }),
};
