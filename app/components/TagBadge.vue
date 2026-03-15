<script setup lang="ts">
defineProps<{ tag: string }>()
</script>

<template>
  <span class="text-xs font-medium bg-primary/10 text-primary border border-primary/25 px-2.5 py-0.5 rounded-full">
    {{ tag }}
  </span>
</template>
