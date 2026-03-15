// server/api/users/list.get.ts
import { listUsersQuerySchema } from "~~/shared/schemas/user";

defineRouteMeta({
  openAPI: {
    tags: ["users"],
    description: "List users with pagination",
    parameters: [
      {
        in: "query",
        name: "page",
        required: false,
        schema: { type: "integer", minimum: 1, default: 1 },
      },
      {
        in: "query",
        name: "pageSize",
        required: false,
        schema: { type: "integer", minimum: 1, maximum: 100, default: 20 },
      },
    ],
  },
});

export default defineEventHandler(async (_event) => {
  // Validation
  const validatedQuery = await getValidatedQuery(
    _event,
    listUsersQuerySchema.parse,
  );
});
