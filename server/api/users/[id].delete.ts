import { userIdParamSchema } from '~~/shared/schemas/user';

defineRouteMeta({
  openAPI: {
    tags: ['users'],
    description: 'Delete a user by ID',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: { type: 'string' },
      },
    ],
  },
});

export default defineEventHandler(async _event => {
  await requireUserSession(_event);
  const validatedParams = await getValidatedRouterParams(
    _event,
    userIdParamSchema.parse,
  );

  return {
    success: true,
    id: validatedParams.id,
  };
});
