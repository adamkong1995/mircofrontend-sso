import type { Auth0Client } from "@auth0/auth0-spa-js";

export function useAuth() {
  const nuxtApp = useNuxtApp();
  const auth0Ref = nuxtApp.$auth0Ref as Ref<Auth0Client | null>;
  const auth0Ready = nuxtApp.$auth0Ready as Promise<void>;

  const isAuthenticated = ref(false);
  const user = ref<any>(null);

  const ensureReady = async () => {
    if (process.server) return false;
    await auth0Ready;
    return !!auth0Ref.value;
  };

  const refresh = async () => {
    if (!(await ensureReady())) return;
    const auth0 = auth0Ref.value!;
    isAuthenticated.value = await auth0.isAuthenticated();
    user.value = isAuthenticated.value ? await auth0.getUser() : null;
  };

  const login = async (returnTo = "/child-nuxt/home") => {
    if (!(await ensureReady())) throw new Error("Auth0 not initialized");
    await auth0Ref.value!.loginWithRedirect({
      appState: { returnTo },
      authorizationParams: {
        redirect_uri: useRuntimeConfig().public.auth0RedirectUri,
      },
    });
  };

  const logout = async (returnTo = "/child-nuxt/home") => {
    if (!(await ensureReady())) throw new Error("Auth0 not initialized");
    const base = window.location.origin;
    const absolute = returnTo.startsWith("/") ? `${base}${returnTo}` : returnTo;
    await auth0Ref.value!.logout({ logoutParams: { returnTo: absolute } });
  };

  return { isAuthenticated, user, refresh, login, logout };
}
