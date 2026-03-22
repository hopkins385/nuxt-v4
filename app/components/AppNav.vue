<script setup lang="ts">
const { y: scrollY } = useWindowScroll();

const links = [
  { label: 'About', to: '/#about' },
  { label: 'Stack', to: '/#stack' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
];
</script>

<template>
  <header
    class="bg-background/85 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-8 py-[1.1rem] backdrop-blur-md transition-colors"
    :class="scrollY > 0 ? 'border-border' : 'border-transparent'"
  >
    <NuxtLink
      to="/"
      class="text-foreground text-[1.15rem] font-bold tracking-tight no-underline"
    >
      sven<span class="text-primary">.</span>dev
    </NuxtLink>
    <nav class="flex gap-1">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-1.5 text-sm no-underline transition-colors"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
