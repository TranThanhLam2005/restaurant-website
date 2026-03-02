const API = process.env.NEXT_PUBLIC_API_BASE_URL;

// Client-side API functions
export const reservationApi = {
  getReservationsByEmail: async (email: string) =>
    fetch(
      `http://localhost:8089/api/reservations/customer?email=${encodeURIComponent(email)}`,
    ).then((res) => res.json()),
};
