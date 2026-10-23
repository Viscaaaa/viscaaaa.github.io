import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is deployed as a GitHub Pages project site, so every asset is
  // served under this sub-path: https://viscaaaa.github.io/nikadekvisca_porto/
  // Without it, root-absolute asset URLs would 404 on GitHub Pages.
  base: '/nikadekvisca_porto/',
  plugins: [react()],
})
