import { userIdParamSchema } from "~~/shared/schemas/user";

export default defineEventHandler(async (_event) => {
  const validatedParams = await getValidatedRouterParams(
    _event,
    userIdParamSchema.parse,
  );

  return {
    success: true,
    id: validatedParams.id,
  };
});
