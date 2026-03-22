import { expect } from "vitest";

expect.extend({
  toHaveStatus(received: unknown, expectedStatus: number) {
    const status = (received as any)?.statusCode ?? (received as any)?.status;
    const pass = status === expectedStatus;
    return {
      pass,
      message: () =>
        `expected error to have status ${expectedStatus}, got ${status}`,
    };
  },
});
