import { z } from 'zod';

import { PricingModel, VerificationStatus } from '../enums';
import { latSchema, lngSchema } from './common.schemas';

export const providerOnboardSchema = z.object({
  categories: z.array(z.string().min(2)).min(1),
  pricingModel: z.nativeEnum(PricingModel),
  priceAmount: z.number().nonnegative(),
  serviceRadiusKm: z.number().positive().max(100),
  verificationStatus: z.nativeEnum(VerificationStatus).default(VerificationStatus.UNVERIFIED),
  lat: latSchema,
  lng: lngSchema,
  locationText: z.string().min(2).max(255)
});

export const providerSearchQuerySchema = z.object({
  lat: latSchema,
  lng: lngSchema,
  category: z.string().min(2),
  radiusKm: z.coerce.number().positive().max(100).default(10),
  minRating: z.coerce.number().min(0).max(5).optional(),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  availableAt: z.string().datetime().optional()
});
