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
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  //   configPath: "tailwind.config.js",
  //   exposeConfig: false,
  // },
});
