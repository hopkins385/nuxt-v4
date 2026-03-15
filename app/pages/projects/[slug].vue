<script setup lang="ts">
const route = useRoute()
const { getProject, projects } = useProjects()

const project = computed(() => getProject(route.params.slug as string))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeoMeta({
  title: `${project.value.title} — sven.dev`,
  description: project.value.tagline,
})

const currentIndex = computed(() => projects.findIndex(p => p.slug === project.value?.slug))
const prev = computed(() => currentIndex.value > 0 ? projects[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null)
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Nav -->
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-[1.1rem] bg-background/85 backdrop-blur-md border-b border-border">
      <NuxtLink to="/" class="font-bold text-[1.15rem] tracking-tight no-underline text-foreground">
        sven<span class="text-primary">.</span>dev
      </NuxtLink>
      <nav class="flex gap-1">
        <NuxtLink to="/#about" class="text-muted-foreground text-sm px-3 py-1.5 rounded-md transition-colors hover:text-foreground hover:bg-accent no-underline">About</NuxtLink>
        <NuxtLink to="/#stack" class="text-muted-foreground text-sm px-3 py-1.5 rounded-md transition-colors hover:text-foreground hover:bg-accent no-underline">Stack</NuxtLink>
        <NuxtLink to="/#projects" class="text-muted-foreground text-sm px-3 py-1.5 rounded-md transition-colors hover:text-foreground hover:bg-accent no-underline">Projects</NuxtLink>
        <NuxtLink to="/#contact" class="text-muted-foreground text-sm px-3 py-1.5 rounded-md transition-colors hover:text-foreground hover:bg-accent no-underline">Contact</NuxtLink>
      </nav>
    </header>

    <main class="flex-1 pt-32 pb-20 px-8">
      <div class="max-w-[780px] mx-auto">

        <!-- Back -->
        <NuxtLink
          to="/#projects"
          class="inline-flex items-center text-muted-foreground no-underline text-sm mb-12 transition-colors hover:text-primary"
        >
          ← Back to projects
        </NuxtLink>

        <!-- Header -->
        <div class="mb-10">
          <div class="flex gap-2 mb-5 flex-wrap">
            <span class="text-xs text-muted-foreground border border-border rounded-full px-3 py-0.5">{{ project!.year }}</span>
            <span class="text-xs text-muted-foreground border border-border rounded-full px-3 py-0.5">{{ project!.role }}</span>
          </div>
          <h1 class="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
            {{ project!.title }}
          </h1>
          <p class="text-[1.1rem] text-muted-foreground mb-6 leading-[1.6] max-w-[580px]">
            {{ project!.tagline }}
          </p>
          <div class="flex gap-2 flex-wrap mb-8">
            <span
              v-for="tag in project!.tags"
              :key="tag"
              class="text-xs font-medium bg-primary/10 text-primary border border-primary/25 px-2.5 py-0.5 rounded-full"
            >{{ tag }}</span>
          </div>
          <div v-if="project!.url || project!.github" class="flex gap-3 flex-wrap">
            <a
              v-if="project!.url"
              :href="project!.url"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg text-[0.95rem] font-semibold transition-all hover:opacity-90 hover:-translate-y-px no-underline"
            >
              View project ↗
            </a>
            <a
              v-if="project!.github"
              :href="project!.github"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center bg-transparent text-foreground border border-border px-6 py-3 rounded-lg text-[0.95rem] font-medium transition-all hover:border-primary hover:bg-primary/10 no-underline"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <hr class="border-none border-t border-border mb-12">

        <!-- Body -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          <div>
            <h2 class="text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground mb-4">Overview</h2>
            <p class="text-muted-foreground leading-[1.75]">{{ project!.desc }}</p>
          </div>
          <div>
            <h2 class="text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground mb-4">Highlights</h2>
            <ul class="list-none flex flex-col gap-4">
              <li
                v-for="(item, i) in project!.highlights"
                :key="i"
                class="flex gap-3 items-start text-sm text-muted-foreground leading-[1.6]"
              >
                <span class="text-primary text-[0.6rem] mt-1.5 shrink-0">✦</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pagination -->
        <div class="grid grid-cols-2 gap-4 pt-8 border-t border-border">
          <NuxtLink
            v-if="prev"
            :to="`/projects/${prev.slug}`"
            class="flex flex-col gap-1 px-5 py-4 rounded-xl border border-border no-underline text-foreground transition-all hover:border-primary hover:bg-primary/10"
          >
            <span class="text-xs text-muted-foreground">← Previous</span>
            <span class="text-[0.95rem] font-semibold">{{ prev.title }}</span>
          </NuxtLink>
          <div v-else />
          <NuxtLink
            v-if="next"
            :to="`/projects/${next.slug}`"
            class="flex flex-col gap-1 px-5 py-4 rounded-xl border border-border no-underline text-foreground text-right transition-all hover:border-primary hover:bg-primary/10"
          >
            <span class="text-xs text-muted-foreground">Next →</span>
            <span class="text-[0.95rem] font-semibold">{{ next.title }}</span>
          </NuxtLink>
          <div v-else />
        </div>

      </div>
    </main>

    <footer class="text-center py-8 border-t border-border text-xs text-muted-foreground">
      © 2026 Sven. Built with Nuxt.
    </footer>

  </div>
</template>
