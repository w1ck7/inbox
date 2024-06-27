// https://nuxt.com/docs/api/configuration/nuxt-config
// npm i -D sass
// npm i @vant/nuxt
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // npm install -D tailwindcss postcss autoprefixer
  // npx tailwindcss init
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@vant/nuxt'],
})
