<template>
  <div
    className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-green-200"
  >
    <div className="text-white dark:text-white body">Child Nuxt App</div>

    <div v-if="isAuthenticated">
      <div>Logged in as: {{ user?.email || user?.name }}</div>
      <button @click="logout('/child-nuxt/home')">Logout</button>
    </div>

    <div v-else>
      <button @click="login('/child-nuxt/home')">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composable/useAuth";

const { isAuthenticated, user, refresh, login, logout } = useAuth();
onMounted(refresh);
</script>
