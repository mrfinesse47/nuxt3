// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/modules -- all the available modules to extend nuxt features
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
