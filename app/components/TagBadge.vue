<script setup lang="ts">
defineProps<{ tag: string }>();
</script>

<template>
  <span
    class="bg-primary/10 text-primary border-primary/25 rounded-full border px-2.5 py-0.5 text-xs font-medium"
  >
    {{ tag }}
  </span>
</template>
