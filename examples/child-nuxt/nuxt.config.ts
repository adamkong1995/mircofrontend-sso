// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    baseURL: "/child-nuxt",
  },
  css: ["./app/assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: {
    public: {
      auth0Domain: process.env.NUXT_PUBLIC_AUTH0_DOMAIN,
      auth0ClientId: process.env.NUXT_PUBLIC_AUTH0_CLIENT_ID,
      auth0RedirectUri: process.env.NUXT_PUBLIC_AUTH0_REDIRECT_URI,
      auth0Audience: process.env.NUXT_PUBLIC_AUTH0_AUDIENCE,
    },
  },
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "tailwind.config.js",
  //   exposeConfig: false,
  // },
});
