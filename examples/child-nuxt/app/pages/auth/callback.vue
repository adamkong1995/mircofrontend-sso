<template>
  <div class="p-6">Signing you in…</div>
</template>

<script setup lang="ts">
onMounted(async () => {
  console.log("Auth0 callback handling started");
  const nuxtApp = useNuxtApp();
  const auth0Ref = nuxtApp.$auth0Ref as Ref<any>;
  const auth0Ready = nuxtApp.$auth0Ready as Promise<void>;

  await auth0Ready;
  const auth0 = auth0Ref.value;
  if (!auth0) throw new Error("Auth0 not initialized");

  // This consumes the ?code & ?state and establishes the Auth0 session in memory
  const result = await auth0.handleRedirectCallback();

  // Optional: support returning to where the user originally wanted to go
  const returnTo = (result?.appState as any)?.returnTo || "/child-nuxt/home";

  await navigateTo(returnTo);
});
</script>
