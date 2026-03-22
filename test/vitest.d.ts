import "vitest";

interface CustomMatchers<R = unknown> {
  toHaveStatus(status: number): R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
