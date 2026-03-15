<script setup lang="ts">
const { projects: projectList } = useProjects()

const aboutRef = useTemplateRef<HTMLElement>('about')
const stackRef = useTemplateRef<HTMLElement>('stack')
const projectsRef = useTemplateRef<HTMLElement>('projects')
const contactRef = useTemplateRef<HTMLElement>('contact')

const sectionRefs = { about: aboutRef, stack: stackRef, projects: projectsRef, contact: contactRef }

const scrollTo = (id: keyof typeof sectionRefs) => {
  sectionRefs[id].value?.scrollIntoView({ behavior: 'smooth' })
}

const stackItems = [
  { name: 'Vue / Nuxt', icon: '💚', desc: 'Full-stack SSR apps' },
  { name: 'TypeScript', icon: '🔷', desc: 'Type-safe everything' },
  { name: 'Node.js', icon: '🟩', desc: 'APIs & automation' },
  { name: 'PostgreSQL', icon: '🐘', desc: 'Relational data' },
  { name: 'Docker', icon: '🐳', desc: 'Containers & deploy' },
  { name: 'Vite', icon: '⚡', desc: 'Blazing fast builds' },
]
</script>

<template>
  <div class="min-h-screen">
    <AppNav />

    <!-- Hero -->
    <section class="relative min-h-screen flex items-center px-8 pt-32 pb-20 overflow-hidden">
      <div class="relative z-10 max-w-2xl mx-auto">
        <p class="text-[1.05rem] text-muted-foreground mb-4">Hey, I'm Sven 👋</p>
        <h1 class="text-[clamp(2.6rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-6">
          Solo developer.<br>
          <span class="text-primary">Full-stack</span> builder.
        </h1>
        <p class="text-[1.15rem] text-muted-foreground max-w-[520px] mb-10 leading-[1.7]">
          I design, build, and ship products end-to-end — from idea to production,
          without a team getting in the way.
        </p>
        <div class="flex gap-4 flex-wrap">
          <button
            class="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg text-[0.95rem] font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
            @click="scrollTo('projects')"
          >
            See my work
          </button>
          <button
            class="inline-flex items-center bg-transparent text-foreground border border-border px-6 py-3 rounded-lg text-[0.95rem] font-medium transition-all hover:border-primary hover:bg-primary/10"
            @click="scrollTo('contact')"
          >
            Get in touch
          </button>
        </div>
      </div>
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.1] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>

    <!-- About -->
    <section id="about" ref="about" class="py-24 px-8 bg-card">
      <div class="max-w-[900px] mx-auto">
        <h2 class="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] mb-3">About me</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div class="flex flex-col gap-4">
            <p class="text-muted-foreground leading-[1.75]">
              I'm a solo developer who handles the full product lifecycle — from architecture
              and backend to UI and deployment. No hand-offs, no overhead, just fast and
              deliberate execution.
            </p>
            <p class="text-muted-foreground leading-[1.75]">
              I work with startups and founders to turn complex problems into clean,
              maintainable software. I care deeply about code quality, user experience,
              and shipping things that actually work.
            </p>
            <p class="text-muted-foreground leading-[1.75]">
              When I'm not building products, I'm contributing to open source or writing
              about the craft of software.
            </p>
          </div>
          <div class="flex flex-col gap-8">
            <div>
              <span class="block text-[2.5rem] font-extrabold text-primary tracking-[-0.03em] leading-none">8+</span>
              <span class="text-sm text-muted-foreground">Years of experience</span>
            </div>
            <div>
              <span class="block text-[2.5rem] font-extrabold text-primary tracking-[-0.03em] leading-none">30+</span>
              <span class="text-sm text-muted-foreground">Projects shipped</span>
            </div>
            <div>
              <span class="block text-[2.5rem] font-extrabold text-primary tracking-[-0.03em] leading-none">100%</span>
              <span class="text-sm text-muted-foreground">Solo, no agency markup</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section id="stack" ref="stack" class="py-24 px-8">
      <div class="max-w-[900px] mx-auto">
        <h2 class="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] mb-3">Tech stack</h2>
        <p class="text-muted-foreground text-base mb-12">Tools I reach for to build reliable, modern products.</p>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
          <div
            v-for="item in stackItems"
            :key="item.name"
            class="bg-card border border-border rounded-xl p-5 flex flex-col gap-1.5 transition-all hover:border-primary hover:-translate-y-0.5"
          >
            <span class="text-2xl">{{ item.icon }}</span>
            <span class="font-semibold text-[0.95rem]">{{ item.name }}</span>
            <span class="text-xs text-muted-foreground">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" ref="projects" class="py-24 px-8 bg-card">
      <div class="max-w-[900px] mx-auto">
        <h2 class="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] mb-3">Selected work</h2>
        <p class="text-muted-foreground text-base mb-12">A few things I've built recently.</p>
        <div class="grid gap-4">
          <NuxtLink
            v-for="project in projectList"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="group bg-background border border-border rounded-xl px-8 py-7 no-underline text-foreground block transition-all hover:border-primary hover:translate-x-1"
          >
            <div class="flex justify-between items-center mb-2">
              <h3 class="text-[1.1rem] font-bold">{{ project.title }}</h3>
              <div class="flex items-center gap-3 shrink-0">
                <span class="text-xs text-muted-foreground">{{ project.year }}</span>
                <span class="text-[1.1rem] text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1">→</span>
              </div>
            </div>
            <p class="text-muted-foreground text-sm mb-4 leading-[1.6]">{{ project.tagline }}</p>
            <div class="flex gap-2 flex-wrap">
              <TagBadge v-for="tag in project.tags" :key="tag" :tag="tag" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" ref="contact" class="py-24 px-8">
      <div class="max-w-[900px] mx-auto text-center">
        <h2 class="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] mb-3">Let's build something</h2>
        <p class="text-muted-foreground text-base mb-10">
          Have a project in mind? I'm available for freelance work and collaborations.
        </p>
        <a
          href="mailto:hello@sven.dev"
          class="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg text-base font-semibold transition-all hover:opacity-90 hover:-translate-y-px mb-10 mx-auto no-underline"
        >
          hello@sven.dev
        </a>
        <div class="flex gap-6 justify-center">
          <a href="#" class="text-muted-foreground no-underline text-sm transition-colors hover:text-primary">GitHub</a>
          <a href="#" class="text-muted-foreground no-underline text-sm transition-colors hover:text-primary">LinkedIn</a>
          <a href="#" class="text-muted-foreground no-underline text-sm transition-colors hover:text-primary">Twitter / X</a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>
