// server/api/users/upsert.post.ts
import { upsertUserSchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  const validatedBody = await readValidatedBody(_event, upsertUserSchema.parse);

  if ("id" in validatedBody) {
    // update existing user with validatedBody.id
  }
  else {
    // create new user
  }
});

