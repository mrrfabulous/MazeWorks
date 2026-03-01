import { z } from 'zod';

import { UserRole } from '../enums';
import { emailSchema, passwordSchema } from './common.schemas';

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  name: z.string().min(2).max(100),
  role: z.nativeEnum(UserRole).default(UserRole.CUSTOMER)
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10).optional()
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
