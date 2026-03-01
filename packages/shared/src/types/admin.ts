import type { DisputeStatus } from '../enums';

export type Dispute = {
  id: string;
  bookingId: string;
  customerId: string;
  providerId: string;
  reason: string;
  status: DisputeStatus;
};
