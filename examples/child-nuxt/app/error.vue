<template>
  <div>
    <h1>Child Nuxt Error Page</h1>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
console.log("props", props.error);
</script>
