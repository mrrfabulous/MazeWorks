import { z } from 'zod';

import { DisputeStatus } from '../enums';
import { idSchema } from './common.schemas';

export const providerVerificationSchema = z.object({
  providerId: idSchema,
  verify: z.boolean()
});

export const resolveDisputeSchema = z.object({
  disputeId: idSchema,
  resolution: z.nativeEnum(DisputeStatus).refine(
    (value) =>
      value === DisputeStatus.RESOLVED_RELEASE_PROVIDER ||
      value === DisputeStatus.RESOLVED_REFUND_CUSTOMER,
    'Resolution must be provider release or customer refund'
  )
});
