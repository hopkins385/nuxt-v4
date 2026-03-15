// shared/schemas/user.ts
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});

export const userIdParamSchema = z.object({
  id: z.string(),
});

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  password: z.string().min(8).optional(),
});

export const listUsersQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

export const upsertUserSchema = z.union([
  createUserSchema,
  userIdParamSchema.and(updateUserSchema),
]);
