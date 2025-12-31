// features/booking/services.ts
const API = process.env.NEXT_PUBLIC_API_BASE_URL;
import {BookingFormData} from "./types";

export const bookingApi = {
  getStates: async () => fetch(`${API}/states`).then((res) => res.json()),

  getCities: async (stateId: string) =>
    fetch(`${API}/cities/by-state/${stateId}`).then((res) => res.json()),

  getBranches: async (cityId: string) =>
    fetch(`${API}/branches/city/${cityId}`).then((res) => res.json()),

  createBooking: async (payload: BookingFormData) =>
    fetch(`${API}/bookings`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
    }).then((res) => res.json()),
};
