// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/child-nuxt",
  },
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "tailwind.config.js",
  //   exposeConfig: false,
  // },
});
