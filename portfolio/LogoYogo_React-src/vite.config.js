import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 웹사이트의 경로
  base: '/portfolio/LogoYogo_React/',

  // 빌드 결과물 저장 위치
  build: {
    outDir: '../LogoYogo_React',
    emptyOutDir: true,
  },
})
