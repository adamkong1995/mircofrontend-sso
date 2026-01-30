import { useAuth } from "~/composable/useAuth";

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path.endsWith("/auth/callback")) return;

  const { isAuthenticated, refresh, login } = useAuth();
  await refresh();

  const needsAuth = to.path.startsWith("/child-nuxt/protected");
  if (needsAuth && !isAuthenticated.value) {
    return login(to.fullPath);
  }
});
