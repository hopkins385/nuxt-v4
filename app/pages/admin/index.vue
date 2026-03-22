<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})

const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/auth/login')
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNav />

    <main class="flex-1 pt-32 pb-20 px-8">
      <div class="max-w-[780px] mx-auto">

        <div class="mb-10">
          <h1 class="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-3">
            Admin
          </h1>
          <p class="text-muted-foreground text-base">
            Welcome back, <span class="text-foreground font-medium">{{ user?.email ?? user?.name ?? 'Admin' }}</span>.
          </p>
        </div>

        <hr class="border-none border-t border-border mb-10">

        <div class="flex gap-3 flex-wrap">
          <NuxtLink
            to="/"
            class="inline-flex items-center bg-transparent text-foreground border border-border px-6 py-3 rounded-lg text-[0.95rem] font-medium transition-all hover:border-primary hover:bg-primary/10 no-underline"
          >
            ← Back to site
          </NuxtLink>
          <button
            class="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg text-[0.95rem] font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
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
