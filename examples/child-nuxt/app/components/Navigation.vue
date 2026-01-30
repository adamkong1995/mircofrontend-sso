<template>
  <div class="h-16 px-4 py-2">
    <nav class="grid grid-cols-3 gap 4 items-center h-full">
      <h2>SSO DEMO</h2>
      <ul class="flex justify-center gap-6">
        <li v-for="item in navigationItems" :key="item.link">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="tsx">
const navigationItems = [
  { name: "Home", link: "/auth/login?returnTo=/home" },
  { name: "Child-Next", link: "/child-next/auth/login?returnTo=/home" },
  { name: "Child-Nuxt", link: "/child-nuxt/home" },
];
</script>
