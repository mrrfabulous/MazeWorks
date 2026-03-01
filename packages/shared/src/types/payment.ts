import type { PaymentStatus } from '../enums';

export type Payment = {
  id: string;
  bookingId: string;
  amountMinor: number;
  currency: string;
  providerRef: string;
  status: PaymentStatus;
};
