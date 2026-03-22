// server/api/users/list.get.ts
import { listUsersQuerySchema } from '~~/shared/schemas/user';

defineRouteMeta({
  openAPI: {
    tags: ['users'],
    description: 'List users with pagination',
    parameters: [
      {
        in: 'query',
        name: 'page',
        required: false,
        schema: { type: 'integer', minimum: 1, default: 1 },
      },
      {
        in: 'query',
        name: 'pageSize',
        required: false,
        schema: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
      },
    ],
  },
});

export default defineEventHandler(async _event => {
  // Validation
  const validatedQuery = await getValidatedQuery(
    _event,
    listUsersQuerySchema.parse,
  );
  // make sure the user is logged in
  // This will throw a 401 error if the request doesn't come from a valid user session
  await requireUserSession(_event);

  return {
    users: [],
    page: validatedQuery.page,
    pageSize: validatedQuery.pageSize,
  };
});
