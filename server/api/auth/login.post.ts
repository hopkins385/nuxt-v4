import { z } from "zod";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  if (email !== config.adminEmail || password !== config.adminPassword) {
    throw createError({
      status: 401,
      message: "Unauthorized",
    });
  }

  await setUserSession(event, {
    user: {
      name: "John Doe",
    },
  });

  return {
    success: true,
  };
});
