import { z } from 'zod';

import { idSchema } from './common.schemas';

export const paymentIntentSchema = z.object({
  bookingId: idSchema,
  amountMinor: z.number().int().positive(),
  currency: z.string().length(3),
  customerId: idSchema
});

export const paymentWebhookSchema = z.object({
  event: z.string().min(2),
  paymentRef: z.string().min(2),
  bookingId: idSchema,
  signature: z.string().optional()
});
