import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";

export default defineConfig({
  test: {
    // globalSetup: ["test/global-setup.ts"],
    projects: [
      {
        test: {
          environment: "node",
          name: "unit",
          include: ["test/unit/**/*.{test,spec}.ts"],
          setupFiles: ["test/unit/unit-setup.ts"],
        },
      },
      {
        test: {
          environment: "node",
          name: "e2e",
          include: ["test/e2e/**/*.{test,spec}.ts"],
        },
      },
      await defineVitestProject({
        test: {
          environment: "nuxt",
          name: "nuxt",
          include: ["test/nuxt/**/*.{test,spec}.ts"],
        },
      }),
    ],
  },
});
