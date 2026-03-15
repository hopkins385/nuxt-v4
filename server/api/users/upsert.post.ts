// server/api/users/upsert.post.ts
import { upsertUserSchema } from "~~/shared/schemas/user";

defineRouteMeta({
  openAPI: {
    tags: ["users"],
    description: "Create or update a user",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          schema: {
            oneOf: [
              {
                description: "Create a new user",
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  password: { type: "string", minLength: 8 },
                },
              },
              {
                description: "Update an existing user",
                type: "object",
                required: ["id"],
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  email: { type: "string", format: "email" },
                  password: { type: "string", minLength: 8 },
                },
              },
            ],
          } as any,
        },
      },
    },
  },
});

export default defineEventHandler(async (_event) => {
  const validatedBody = await readValidatedBody(_event, upsertUserSchema.parse);

  if ("id" in validatedBody) {
    // update existing user with validatedBody.id
  } else {
    // create new user
  }
});
