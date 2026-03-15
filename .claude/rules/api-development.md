---
paths:
  - "server/api/**/*.ts"
---

> When writing or updating Zod schemas, read `.claude/skills/zod-validation/SKILL.md` for Zod 4 patterns and v3→v4 migration details.

# Nuxt API Development Rules

- All API endpoints must include input validation with zod
- Zod schemas should be defined in the `shared/schemas` directory and imported into API route handlers for validation
- Use `readValidatedBody`, `getValidatedQuery`, and `getValidatedRouterParams` helpers for validating request bodies, query parameters, and router params respectively
- Follow the Zod 4 patterns for schema definitions and validation as outlined in the `zod-validation` skill documentation, including top-level validators and error handling patterns

Example for Body Validation:

```ts
// shared/schemas/user.ts
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});
```

```ts
// server/api/users/create.post.ts
import { createUserSchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  // Body Validation
  const validatedBody = await readValidatedBody(_event, createUserSchema.parse);
});
```

Example for Query Validation:

```ts
// shared/schemas/user.ts
import { z } from "zod";

export const listUsersQuerySchema = z.object({
  page: z.number().int().positive().default(1),
  pageSize: z.number().int().positive().max(100).default(20),
});
```

```ts
// server/api/users/list.get.ts
import { listUsersQuerySchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  // Query Validation
  const validatedQuery = await getValidatedQuery(
    _event,
    listUsersQuerySchema.parse,
  );
});
```

Example for Router Params Validation:

```ts
// shared/schemas/user.ts
import { z } from "zod";

export const userIdParamSchema = z.object({
  id: z.string(),
});
```

```ts
// server/api/users/[id].get.ts
import { userIdParamSchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  // Router Params Validation
  const validatedParams = await getValidatedRouterParams(
    _event,
    userIdParamSchema.parse,
  );
});
```
