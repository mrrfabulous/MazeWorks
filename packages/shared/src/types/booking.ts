import type { BookingStatus } from '../enums';

export type Booking = {
  id: string;
  customerId: string;
  providerId: string;
  category: string;
  status: BookingStatus;
  scheduledAt: string;
  address: string;
  notes?: string;
  amountMinor: number;
  currency: string;
};
