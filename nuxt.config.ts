// https://nuxt.com/docs/api/configuration/nuxt-config
// npm i -D sass
// npm i @vant/nuxt
// npm install --save-dev @nuxtjs/tailwindcss
export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@vant/nuxt'],
})
