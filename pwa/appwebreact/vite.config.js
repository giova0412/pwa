import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      // Habilita el service worker en modo desarrollo
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.svg"],
      // Para funcionar offline
      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg}"],
      },
      manifest: {
        name: "First PWA",
        short_name: "FPWA",
        description: "App React+Vite PWA",
        start_url: "/",
        // Habilita la instalacion en celulares
        display: "standalone",
        background_color: "#fff",
        theme_color: "#228be6",
        screenshots: [
          {
            src: "/screenshots/screenshot-wide.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-narrow.png",
            sizes: "384x520",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),

  ]
})