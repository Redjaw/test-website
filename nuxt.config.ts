// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image'
  ],
  devtools: {
    enabled: true
  },

  app: {
    baseURL: process?.env?.NUXT_APP_BASE_URL || '/'
  },

  css: ['~/assets/css/main.css'],

  // Public runtime config used at runtime (client + server)
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_SITE_URL in production to your full site URL (including protocol and hostname),
      // e.g. https://your-username.github.io or https://example.com
      siteUrl: process?.env?.NUXT_PUBLIC_SITE_URL || process?.env?.NUXT_APP_BASE_URL || '/'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    domains: ['images.unsplash.com']
  }
})
