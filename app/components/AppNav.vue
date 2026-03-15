<script setup lang="ts">
const { y: scrollY } = useWindowScroll()

const links = [
  { label: 'About', to: '/#about' },
  { label: 'Stack', to: '/#stack' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-[1.1rem] bg-background/85 backdrop-blur-md border-b transition-colors"
    :class="scrollY > 0 ? 'border-border' : 'border-transparent'"
  >
    <NuxtLink to="/" class="font-bold text-[1.15rem] tracking-tight no-underline text-foreground">
      sven<span class="text-primary">.</span>dev
    </NuxtLink>
    <nav class="flex gap-1">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-muted-foreground text-sm px-3 py-1.5 rounded-md transition-colors hover:text-foreground hover:bg-accent no-underline"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
