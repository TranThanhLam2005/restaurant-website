export interface ReservationDetails {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  reservationDate: string;
  reservationTime: string;
  guestCount: number;
  specialRequests?: string;
  branchId: number;
  customerId: number;
}
