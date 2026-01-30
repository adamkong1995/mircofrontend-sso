<template><div class="p-6">Redirecting to login…</div></template>

<script setup lang="ts">
import { useAuth } from "~/composable/useAuth";
onMounted(async () => {
  const { login } = useAuth();
  await login("/home"); // or use route.query.returnTo
});
</script>
