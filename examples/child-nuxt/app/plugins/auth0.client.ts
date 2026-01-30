import { defineNuxtPlugin } from "#app";
import { createAuth0Client, type Auth0Client } from "@auth0/auth0-spa-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const auth0 = shallowRef<Auth0Client | null>(null);
  const ready = (async () => {
    auth0.value = await createAuth0Client({
      domain: config.public.auth0Domain,
      clientId: config.public.auth0ClientId,
      authorizationParams: {
        redirect_uri: config.public.auth0RedirectUri,
        scope: "openid profile email",
        // audience: config.public.auth0Audience,
      },
      cacheLocation: "memory",
      useRefreshTokens: false,
    });
  })();

  nuxtApp.provide("auth0Ref", auth0);
  nuxtApp.provide("auth0Ready", ready);
});
