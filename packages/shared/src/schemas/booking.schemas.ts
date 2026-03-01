import { z } from 'zod';

import { BookingStatus } from '../enums';
import { currencySchema, idSchema } from './common.schemas';

export const createBookingSchema = z.object({
  providerId: idSchema,
  category: z.string().min(2),
  scheduledAt: z.string().datetime(),
  address: z.string().min(5).max(255),
  notes: z.string().max(1000).optional(),
  amountMinor: z.number().int().positive(),
  currency: currencySchema
});

export const bookingIdParamsSchema = z.object({
  id: idSchema
});

export const transitionBookingSchema = z.object({
  status: z.nativeEnum(BookingStatus)
});

export const disputeBookingSchema = z.object({
  reason: z.string().min(10).max(1000)
});
