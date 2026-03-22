import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  telemetry: false,
  runtimeConfig: {
    adminEmail: "",
    adminPassword: "",
    public: {
      baseApiUrl: process.env.BASE_API_URL || "http://localhost:3000/api",
    },
  },
  modules: ["shadcn-nuxt", "@vueuse/nuxt", "nuxt-auth-utils"],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  css: ["~/assets/css/main.css"],
  nitro: {
    experimental: {
      openAPI: true,
    },
    openAPI: {
      production: "runtime",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@vee-validate/zod",
        "class-variance-authority",
        "clsx",
        "reka-ui",
        "tailwind-merge",
        "vee-validate",
        "zod",
      ],
    },
  },
});
