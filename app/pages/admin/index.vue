<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
});

const { user, clear: clearSession } = useUserSession();

async function logout() {
  await clearSession();
  await navigateTo('/auth/login');
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNav />

    <main class="flex-1 px-8 pt-32 pb-20">
      <div class="mx-auto max-w-[780px]">
        <div class="mb-10">
          <h1
            class="mb-3 text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
          >
            Admin
          </h1>
          <p class="text-muted-foreground text-base">
            Welcome back,
            <span class="text-foreground font-medium">{{
              user?.email ?? user?.name ?? 'Admin'
            }}</span
            >.
          </p>
        </div>

        <hr class="border-border mb-10 border-t border-none" />

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/"
            class="text-foreground border-border hover:border-primary hover:bg-primary/10 inline-flex items-center rounded-lg border bg-transparent px-6 py-3 text-[0.95rem] font-medium no-underline transition-all"
          >
            ← Back to site
          </NuxtLink>
          <button
            class="bg-primary text-primary-foreground inline-flex items-center rounded-lg px-6 py-3 text-[0.95rem] font-semibold transition-all hover:-translate-y-px hover:opacity-90"
            @click="logout"
          >
            Sign out
          </button>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
