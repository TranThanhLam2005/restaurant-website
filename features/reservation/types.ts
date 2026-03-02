export interface Reservation {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  reservationDate: string;
  reservationTime: string;
  guestCount: number;
  status: "UPCOMING" | "WAITLIST" | "COMPLETED" | "CANCELED";
  specialRequests?: string | null;
  branchId: number;
  cancellationNotes?: string;
}
