import { describe, it, expect } from "vitest";
import { setup } from "@nuxt/test-utils";
import { fileURLToPath } from "node:url";
import { login } from "../../utils/login.util";

describe("POST /api/auth/login", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../../../", import.meta.url)),
    server: true,
  });

  it("returns 200 with valid credentials", async () => {
    const response = await login("admin@admin.com", "iamtheadmin");
    expect(response).toHaveProperty("success", true);
  });

  it("returns 401 with wrong password", async () => {
    const response = await login("admin@admin.com", "wrongpassword");
    expect(response).toHaveStatus(401);
  });

  it("returns 401 with wrong email", async () => {
    const response = await login("notadmin@admin.com", "iamtheadmin");
    expect(response).toHaveStatus(401);
  });

  it("returns 400 with invalid email format", async () => {
    const response = await login("not-an-email", "iamtheadmin");
    expect(response).toHaveStatus(400);
  });

  it("returns 400 with password shorter than 8 characters", async () => {
    const response = await login("admin@admin.com", "short");
    expect(response).toHaveStatus(400);
  });
});
