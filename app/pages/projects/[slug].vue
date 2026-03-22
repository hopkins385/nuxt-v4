<script setup lang="ts">
const route = useRoute();
const { getProject, projects } = useProjects();

const project = computed(() => getProject(route.params.slug as string));

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

useSeoMeta({
  title: `${project.value.title} — sven.dev`,
  description: project.value.tagline,
});

const currentIndex = computed(() =>
  projects.findIndex(p => p.slug === project.value?.slug),
);
const prev = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null,
);
const next = computed(() =>
  currentIndex.value < projects.length - 1
    ? projects[currentIndex.value + 1]
    : null,
);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNav />

    <main class="flex-1 px-8 pt-32 pb-20">
      <div class="mx-auto max-w-[780px]">
        <!-- Back -->
        <NuxtLink
          to="/#projects"
          class="text-muted-foreground hover:text-primary mb-12 inline-flex items-center text-sm no-underline transition-colors"
        >
          ← Back to projects
        </NuxtLink>

        <!-- Header -->
        <div class="mb-10">
          <div class="mb-5 flex flex-wrap gap-2">
            <span
              class="text-muted-foreground border-border rounded-full border px-3 py-0.5 text-xs"
              >{{ project!.year }}</span
            >
            <span
              class="text-muted-foreground border-border rounded-full border px-3 py-0.5 text-xs"
              >{{ project!.role }}</span
            >
          </div>
          <h1
            class="mb-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
          >
            {{ project!.title }}
          </h1>
          <p
            class="text-muted-foreground mb-6 max-w-[580px] text-[1.1rem] leading-[1.6]"
          >
            {{ project!.tagline }}
          </p>
          <div class="mb-8 flex flex-wrap gap-2">
            <TagBadge v-for="tag in project!.tags" :key="tag" :tag="tag" />
          </div>
          <div
            v-if="project!.url || project!.github"
            class="flex flex-wrap gap-3"
          >
            <a
              v-if="project!.url"
              :href="project!.url"
              target="_blank"
              rel="noopener"
              class="bg-primary text-primary-foreground inline-flex items-center rounded-lg px-6 py-3 text-[0.95rem] font-semibold no-underline transition-all hover:-translate-y-px hover:opacity-90"
            >
              View project ↗
            </a>
            <a
              v-if="project!.github"
              :href="project!.github"
              target="_blank"
              rel="noopener"
              class="text-foreground border-border hover:border-primary hover:bg-primary/10 inline-flex items-center rounded-lg border bg-transparent px-6 py-3 text-[0.95rem] font-medium no-underline transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <hr class="border-border mb-12 border-t border-none" />

        <!-- Body -->
        <div class="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2
              class="text-muted-foreground mb-4 text-[0.7rem] tracking-[0.1em] uppercase"
            >
              Overview
            </h2>
            <p class="text-muted-foreground leading-[1.75]">
              {{ project!.desc }}
            </p>
          </div>
          <div>
            <h2
              class="text-muted-foreground mb-4 text-[0.7rem] tracking-[0.1em] uppercase"
            >
              Highlights
            </h2>
            <ul class="flex list-none flex-col gap-4">
              <li
                v-for="(item, i) in project!.highlights"
                :key="i"
                class="text-muted-foreground flex items-start gap-3 text-sm leading-[1.6]"
              >
                <span class="text-primary mt-1.5 shrink-0 text-[0.6rem]"
                  >✦</span
                >
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pagination -->
        <div class="border-border grid grid-cols-2 gap-4 border-t pt-8">
          <NuxtLink
            v-if="prev"
            :to="`/projects/${prev.slug}`"
            class="border-border text-foreground hover:border-primary hover:bg-primary/10 flex flex-col gap-1 rounded-xl border px-5 py-4 no-underline transition-all"
          >
            <span class="text-muted-foreground text-xs">← Previous</span>
            <span class="text-[0.95rem] font-semibold">{{ prev.title }}</span>
          </NuxtLink>
          <div v-else />
          <NuxtLink
            v-if="next"
            :to="`/projects/${next.slug}`"
            class="border-border text-foreground hover:border-primary hover:bg-primary/10 flex flex-col gap-1 rounded-xl border px-5 py-4 text-right no-underline transition-all"
          >
            <span class="text-muted-foreground text-xs">Next →</span>
            <span class="text-[0.95rem] font-semibold">{{ next.title }}</span>
          </NuxtLink>
          <div v-else />
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
