import { $fetch } from "@nuxt/test-utils";

export async function login(email: string, password: string) {
  try {
    return await $fetch("/api/auth/login", {
      method: "POST",
      body: { email, password },
    });
  } catch (e: any) {
    return e.data;
  }
}
