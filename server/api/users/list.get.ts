// server/api/users/list.get.ts
import { listUsersQuerySchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  // Validation
  const validatedQuery = await getValidatedQuery(
    _event,
    listUsersQuerySchema.parse,
  );
});
