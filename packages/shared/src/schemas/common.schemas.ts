import { z } from 'zod';

export const idSchema = z.string().min(1);
export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(8).max(128);
export const currencySchema = z.string().length(3).default('USD');

export const latSchema = z.number().min(-90).max(90);
export const lngSchema = z.number().min(-180).max(180);

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20)
});
