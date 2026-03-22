<script setup lang="ts">
const { projects: projectList } = useProjects();

const aboutRef = useTemplateRef<HTMLElement>('about');
const stackRef = useTemplateRef<HTMLElement>('stack');
const projectsRef = useTemplateRef<HTMLElement>('projects');
const contactRef = useTemplateRef<HTMLElement>('contact');

const sectionRefs = {
  about: aboutRef,
  stack: stackRef,
  projects: projectsRef,
  contact: contactRef,
};

const scrollTo = (id: keyof typeof sectionRefs) => {
  sectionRefs[id].value?.scrollIntoView({ behavior: 'smooth' });
};

const stackItems = [
  { name: 'Vue / Nuxt', icon: '💚', desc: 'Full-stack SSR apps' },
  { name: 'TypeScript', icon: '🔷', desc: 'Type-safe everything' },
  { name: 'Node.js', icon: '🟩', desc: 'APIs & automation' },
  { name: 'PostgreSQL', icon: '🐘', desc: 'Relational data' },
  { name: 'Docker', icon: '🐳', desc: 'Containers & deploy' },
  { name: 'Vite', icon: '⚡', desc: 'Blazing fast builds' },
];
</script>

<template>
  <div class="min-h-screen">
    <AppNav />

    <!-- Hero -->
    <section
      class="relative flex min-h-screen items-center overflow-hidden px-8 pt-32 pb-20"
    >
      <div class="relative z-10 mx-auto max-w-2xl">
        <p class="text-muted-foreground mb-4 text-[1.05rem]">
          Hey, I'm Sven 👋
        </p>
        <h1
          class="mb-6 text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.1] font-extrabold tracking-[-0.03em]"
        >
          Solo developer.<br />
          <span class="text-primary">Full-stack</span> builder.
        </h1>
        <p
          class="text-muted-foreground mb-10 max-w-[520px] text-[1.15rem] leading-[1.7]"
        >
          I design, build, and ship products end-to-end — from idea to
          production, without a team getting in the way.
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            class="bg-primary text-primary-foreground inline-flex items-center rounded-lg px-6 py-3 text-[0.95rem] font-semibold transition-all hover:-translate-y-px hover:opacity-90"
            @click="scrollTo('projects')"
          >
            See my work
          </button>
          <button
            class="text-foreground border-border hover:border-primary hover:bg-primary/10 inline-flex items-center rounded-lg border bg-transparent px-6 py-3 text-[0.95rem] font-medium transition-all"
            @click="scrollTo('contact')"
          >
            Get in touch
          </button>
        </div>
      </div>
      <div
        class="bg-primary/[0.1] pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />
    </section>

    <!-- About -->
    <section id="about" ref="about" class="bg-card px-8 py-24">
      <div class="mx-auto max-w-[900px]">
        <h2
          class="mb-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]"
        >
          About me
        </h2>
        <div
          class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16"
        >
          <div class="flex flex-col gap-4">
            <p class="text-muted-foreground leading-[1.75]">
              I'm a solo developer who handles the full product lifecycle — from
              architecture and backend to UI and deployment. No hand-offs, no
              overhead, just fast and deliberate execution.
            </p>
            <p class="text-muted-foreground leading-[1.75]">
              I work with startups and founders to turn complex problems into
              clean, maintainable software. I care deeply about code quality,
              user experience, and shipping things that actually work.
            </p>
            <p class="text-muted-foreground leading-[1.75]">
              When I'm not building products, I'm contributing to open source or
              writing about the craft of software.
            </p>
          </div>
          <div class="flex flex-col gap-8">
            <div>
              <span
                class="text-primary block text-[2.5rem] leading-none font-extrabold tracking-[-0.03em]"
                >8+</span
              >
              <span class="text-muted-foreground text-sm"
                >Years of experience</span
              >
            </div>
            <div>
              <span
                class="text-primary block text-[2.5rem] leading-none font-extrabold tracking-[-0.03em]"
                >30+</span
              >
              <span class="text-muted-foreground text-sm"
                >Projects shipped</span
              >
            </div>
            <div>
              <span
                class="text-primary block text-[2.5rem] leading-none font-extrabold tracking-[-0.03em]"
                >100%</span
              >
              <span class="text-muted-foreground text-sm"
                >Solo, no agency markup</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section id="stack" ref="stack" class="px-8 py-24">
      <div class="mx-auto max-w-[900px]">
        <h2
          class="mb-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]"
        >
          Tech stack
        </h2>
        <p class="text-muted-foreground mb-12 text-base">
          Tools I reach for to build reliable, modern products.
        </p>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
          <div
            v-for="item in stackItems"
            :key="item.name"
            class="bg-card border-border hover:border-primary flex flex-col gap-1.5 rounded-xl border p-5 transition-all hover:-translate-y-0.5"
          >
            <span class="text-2xl">{{ item.icon }}</span>
            <span class="text-[0.95rem] font-semibold">{{ item.name }}</span>
            <span class="text-muted-foreground text-xs">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" ref="projects" class="bg-card px-8 py-24">
      <div class="mx-auto max-w-[900px]">
        <h2
          class="mb-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]"
        >
          Selected work
        </h2>
        <p class="text-muted-foreground mb-12 text-base">
          A few things I've built recently.
        </p>
        <div class="grid gap-4">
          <NuxtLink
            v-for="project in projectList"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group bg-background border-border text-foreground hover:border-primary block rounded-xl border px-8 py-7 no-underline transition-all hover:translate-x-1"
          >
            <div class="mb-2 flex items-center justify-between">
              <h3 class="text-[1.1rem] font-bold">{{ project.title }}</h3>
              <div class="flex shrink-0 items-center gap-3">
                <span class="text-muted-foreground text-xs">{{
                  project.year
                }}</span>
                <span
                  class="text-muted-foreground group-hover:text-primary text-[1.1rem] transition-all group-hover:translate-x-1"
                  >→</span
                >
              </div>
            </div>
            <p class="text-muted-foreground mb-4 text-sm leading-[1.6]">
              {{ project.tagline }}
            </p>
            <div class="flex flex-wrap gap-2">
              <TagBadge v-for="tag in project.tags" :key="tag" :tag="tag" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" ref="contact" class="px-8 py-24">
      <div class="mx-auto max-w-[900px] text-center">
        <h2
          class="mb-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em]"
        >
          Let's build something
        </h2>
        <p class="text-muted-foreground mb-10 text-base">
          Have a project in mind? I'm available for freelance work and
          collaborations.
        </p>
        <a
          href="mailto:hello@sven.dev"
          class="bg-primary text-primary-foreground mx-auto mb-10 inline-flex items-center rounded-lg px-6 py-3 text-base font-semibold no-underline transition-all hover:-translate-y-px hover:opacity-90"
        >
          hello@sven.dev
        </a>
        <div class="flex justify-center gap-6">
          <a
            href="#"
            class="text-muted-foreground hover:text-primary text-sm no-underline transition-colors"
            >GitHub</a
          >
          <a
            href="#"
            class="text-muted-foreground hover:text-primary text-sm no-underline transition-colors"
            >LinkedIn</a
          >
          <a
            href="#"
            class="text-muted-foreground hover:text-primary text-sm no-underline transition-colors"
            >Twitter / X</a
          >
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
