// composables/api.ts

// Simple defaults
export const useClientFetch = createUseFetch({
  server: false,
});

// Dynamic defaults with full control over merging
export const useApiFetch = createUseFetch(currentOptions => {
  const runtimeConfig = useRuntimeConfig();
  return {
    ...currentOptions,
    baseURL: currentOptions.baseURL ?? runtimeConfig.public.baseApiUrl,
  };
});
